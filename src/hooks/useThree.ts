import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function useParticleCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>, options?: {
  count?: number; color?: string; speed?: number; dark?: boolean;
}) {
  const { count = 80, speed = 0.3, dark = false } = options || {};
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 50;

    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();

    // Particles
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      velocities[i * 3] = (Math.random() - 0.5) * speed * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * speed * 0.02;
      velocities[i * 3 + 2] = 0;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.8,
      color: dark ? 0x38bdf8 : 0x0ea5e9,
      transparent: true,
      opacity: 0.6,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Connection lines
    const lineMat = new THREE.LineBasicMaterial({
      color: dark ? 0x38bdf8 : 0x0ea5e9,
      transparent: true,
      opacity: 0.12,
    });

    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      const pos = geo.attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        if (Math.abs(pos[i * 3]) > 60) velocities[i * 3] *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 40) velocities[i * 3 + 1] *= -1;
      }

      geo.attributes.position.needsUpdate = true;
      points.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      lineMat.dispose();
      ro.disconnect();
    };
  }, [dark]);
}

export function useGlobeCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();

    // Globe wireframe
    const geo = new THREE.SphereGeometry(1.2, 32, 32);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const globe = new THREE.Mesh(geo, mat);
    scene.add(globe);

    // Glowing dots on surface
    const dotGeo = new THREE.BufferGeometry();
    const dotPositions: number[] = [];
    const markers = [
      [0.3, 0.9, 0.7], [-0.5, 0.7, 0.9], [0.8, -0.4, 0.6],
      [-0.7, -0.5, 0.8], [0.6, 0.5, -0.8], [-0.9, 0.3, -0.4],
      [0.1, -0.8, -0.8], [0.7, 0.7, -0.5]
    ];
    for (const [x, y, z] of markers) {
      const len = Math.sqrt(x*x + y*y + z*z);
      dotPositions.push(x/len * 1.22, y/len * 1.22, z/len * 1.22);
    }
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));
    const dotMat = new THREE.PointsMaterial({ size: 0.06, color: 0x38bdf8 });
    scene.add(new THREE.Points(dotGeo, dotMat));

    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      globe.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      renderer.dispose();
      ro.disconnect();
    };
  }, []);
}
