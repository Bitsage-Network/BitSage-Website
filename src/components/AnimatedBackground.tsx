'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className = '' }: AnimatedBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    console.log('Initializing Three.js background...');

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0f23); // Very dark navy background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create very subtle particle system
    const particleCount = 150; // Further reduced for minimal interference
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    // Subtle monochromatic palette - soft blues and whites
    const subtleColor = new THREE.Color(0x6366f1); // Soft indigo
    const whiteColor = new THREE.Color(0xffffff); // Pure white

    for (let i = 0; i < particleCount; i++) {
      // Random positions
      positions[i * 3] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      // Subtle color variation - mostly white with some soft indigo
      const useWhite = Math.random() < 0.7; // 70% white, 30% indigo
      const color = useWhite ? whiteColor : subtleColor;
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Slower, more gentle movement
      velocities.push(
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.003
      );
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5, // Even smaller particles
      transparent: true,
      opacity: 0.2, // Much more subtle
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    console.log(`Created ${particleCount} particles for clean background`);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      // Animate particles
      const positionArray = particleSystem.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positionArray[i * 3] += velocities[i * 3];
        positionArray[i * 3 + 1] += velocities[i * 3 + 1];
        positionArray[i * 3 + 2] += velocities[i * 3 + 2];

        // Boundary check
        if (Math.abs(positionArray[i * 3]) > 100) velocities[i * 3] *= -1;
        if (Math.abs(positionArray[i * 3 + 1]) > 100) velocities[i * 3 + 1] *= -1;
        if (Math.abs(positionArray[i * 3 + 2]) > 100) velocities[i * 3 + 2] *= -1;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;


      // Very slow particle rotation
      particleSystem.rotation.y += 0.0003;
      particleSystem.rotation.x += 0.0001;

      // Minimal camera movement
      camera.position.x = Math.sin(time * 0.02) * 2;
      camera.position.y = Math.cos(time * 0.015) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      console.log('Cleaning up Three.js background...');
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
