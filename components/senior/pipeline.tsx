"use client";

import { useEffect, useRef } from "react";

/*
 * The hero's live pipeline: a request path I actually run in production
 * (clients → API → cache and queue → three AI models → ensemble → PostgreSQL),
 * drawn as glowing nodes with packets flowing along the edges.
 */
const nodes: Record<string, { p: [number, number, number]; label: string; hot?: boolean; big?: boolean }> = {
  ios: { p: [-6, 2.2, 0], label: "iOS / Android" },
  web: { p: [-6, -1.2, 0.6], label: "web" },
  api: { p: [-2.6, 0.5, 0], label: "api · node / fastapi", big: true },
  redis: { p: [-0.6, 2.9, -1], label: "redis · cache + locks" },
  queue: { p: [0.6, -0.6, 0.4], label: "bullmq workers", big: true },
  claude: { p: [4, 2.6, -0.6], label: "claude" },
  openai: { p: [4.6, 0.3, 0.4], label: "openai" },
  gemini: { p: [4, -2, -0.4], label: "gemini" },
  pg: { p: [0.4, -3.4, -0.6], label: "postgresql" },
  ens: { p: [7.4, 0.3, 0], label: "ensemble", hot: true, big: true },
};
const edges: [string, string][] = [
  ["ios", "api"], ["web", "api"], ["api", "redis"], ["api", "queue"], ["queue", "claude"], ["queue", "openai"],
  ["queue", "gemini"], ["claude", "ens"], ["openai", "ens"], ["gemini", "ens"], ["queue", "pg"], ["ens", "pg"],
];

export function Pipeline() {
  const host = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const labelBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    (async () => {
      const THREE = await import("three");
      if (disposed || !host.current || !canvas.current || !labelBox.current) return;
      const el = host.current;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const renderer = new THREE.WebGLRenderer({ canvas: canvas.current, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x08090b);
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.set(0, 0, 17);

      const group = new THREE.Group();
      scene.add(group);
      const v = (k: string) => new THREE.Vector3(...nodes[k].p);

      const meshes = Object.entries(nodes).map(([k, n]) => {
        const core = new THREE.Mesh(
          new THREE.SphereGeometry(n.big ? 0.17 : 0.12, 24, 16),
          new THREE.MeshBasicMaterial({ color: n.hot ? 0xff6a2b : 0x8a919b }),
        );
        core.position.set(...n.p);
        const halo = new THREE.Mesh(
          new THREE.RingGeometry(0.34, 0.37, 48),
          new THREE.MeshBasicMaterial({ color: 0xeceef1, transparent: true, opacity: 0.06, side: THREE.DoubleSide }),
        );
        core.add(halo);
        group.add(core);
        return { core, halo, k };
      });

      const curves = edges.map(([a, b]) => {
        const A = v(a), B = v(b), M = A.clone().lerp(B, 0.5);
        M.z += 0.8;
        M.y += (B.x - A.x) * 0.05;
        const c = new THREE.QuadraticBezierCurve3(A, M, B);
        group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(c.getPoints(40)), new THREE.LineBasicMaterial({ color: 0x2a2f36, transparent: true, opacity: 0.8 })));
        return c;
      });

      const pGeo = new THREE.SphereGeometry(0.035, 10, 8);
      const packets: { m: InstanceType<typeof THREE.Mesh>; c: InstanceType<typeof THREE.QuadraticBezierCurve3>; off: number; speed: number }[] = [];
      curves.forEach((c, ei) => {
        for (let i = 0; i < 2; i++) {
          const m = new THREE.Mesh(pGeo, new THREE.MeshBasicMaterial({ color: ei >= 7 && ei <= 9 ? 0xff6a2b : 0xc6ccd3 }));
          group.add(m);
          packets.push({ m, c, off: i / 2 + Math.random() * 0.1, speed: 0.05 + Math.random() * 0.03 });
        }
      });



      const labels = meshes.map(({ k }) => {
        const s = document.createElement("span");
        s.className = "pl-label";
        s.textContent = nodes[k].label;
        labelBox.current!.appendChild(s);
        return s;
      });

      const resize = () => {
        const w = el.clientWidth, h = el.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        const wide = w > 900;
        camera.setViewOffset(w, h, wide ? -w * 0.24 : 0, wide ? h * 0.04 : h * 0.3, w, h);
        camera.position.z = wide ? 17 : 26;
        group.scale.setScalar(wide ? 0.5 : 0.55);
        camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener("resize", resize);

      const mouse = { x: 0, y: 0 };
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      };
      el.addEventListener("pointermove", onMove);
      let visible = true;
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
      io.observe(el);

      const clock = new THREE.Clock();
      let frame = 0;
      const tmp = new THREE.Vector3();
      const tick = () => {
        frame = requestAnimationFrame(tick);
        if (!visible) return;
        const t = clock.getElapsedTime();
        const intro = reduce ? 1 : Math.min(1, t / 1.6);
        packets.forEach((p) => {
          p.m.position.copy(p.c.getPoint(reduce ? p.off : (p.off + t * p.speed) % 1));
          p.m.visible = intro > 0.6;
        });
        meshes.forEach(({ core, halo }, i) => {
          halo.scale.setScalar(1 + Math.sin(t * 2 + i) * 0.08);
          core.scale.setScalar(Math.min(1, Math.max(0.001, intro * 1.4 - i * 0.05)));
        });
        group.rotation.y += ((reduce ? 0 : mouse.x * 0.12 + Math.sin(t * 0.1) * 0.06) - group.rotation.y) * 0.03;
        group.rotation.x += ((reduce ? 0 : -mouse.y * 0.06) - group.rotation.x) * 0.03;
        group.position.y = Math.min(1, window.scrollY / window.innerHeight) * 2.2;
        const r = el.getBoundingClientRect();
        meshes.forEach(({ core }, i) => {
          const p = core.getWorldPosition(tmp).project(camera);
          labels[i].style.left = `${(p.x * 0.5 + 0.5) * r.width}px`;
          labels[i].style.top = `${(-p.y * 0.5 + 0.5) * r.height}px`;
          labels[i].style.opacity = String(intro);
        });
        renderer.render(scene, camera);
      };
      tick();

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        el.removeEventListener("pointermove", onMove);
        io.disconnect();
        labels.forEach((l) => l.remove());
        renderer.dispose();
      };
    })();
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div ref={host} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvas} className="absolute inset-0 h-full w-full" />
      <div ref={labelBox} className="hidden" />
    </div>
  );
}
