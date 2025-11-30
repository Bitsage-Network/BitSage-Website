'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

interface NetworkVisualizationProps {
  className?: string;
}

export function NetworkVisualization({ className = '' }: NetworkVisualizationProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    // No background - transparent
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15);

    // Renderer setup with improved settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
      logarithmicDepthBuffer: false
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Completely transparent
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    rendererRef.current = renderer;
    
    // Ensure canvas is transparent and properly styled
    renderer.domElement.style.background = 'transparent';
    renderer.domElement.style.backgroundColor = 'transparent';
    renderer.domElement.style.display = 'block';
    
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls for 3D interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 8;
    controls.maxDistance = 30;
    controls.maxPolarAngle = Math.PI;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Create computing infrastructure layers - bright vibrant green glass
    const brightGreen = 0x00FF66; // Much brighter, more vibrant green
    const layers = [
      { name: 'Sage Cloud', color: brightGreen, position: [0, 8, 0], nodes: 4 }, // Application Layer - Cloud Services
      { name: 'Sage Mesh', color: brightGreen, position: [0, 3, 0], nodes: 6 }, // Network Layer - Routing Infrastructure  
      { name: 'Sage Forge', color: brightGreen, position: [0, -2, 0], nodes: 8 }, // Node Layer - Compute Nodes
      { name: 'Sage Proof', color: brightGreen, position: [0, -7, 0], nodes: 3 }, // Verification Layer - Proof Validators
    ];

    const nodes: THREE.Mesh[] = [];
    const connections: THREE.Line[] = [];
    const allNodes: THREE.Mesh[] = [];

    // Create enterprise computing infrastructure
    layers.forEach((layer, layerIndex) => {
      // Create distributed nodes for each layer (like data centers)
      for (let i = 0; i < layer.nodes; i++) {
        // Position nodes in a distributed grid pattern
        const angle = (i / layer.nodes) * Math.PI * 2;
        const radius = 6 + layerIndex * 1.5; // Different radius per layer
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = layer.position[1] + (Math.random() - 0.5) * 1;

        // Create varied server infrastructure geometry
        const serverType = Math.random();
        let width, height, depth;
        
        if (serverType < 0.3) {
          // Server towers (tall and narrow)
          width = 0.6 + Math.random() * 0.2;
          height = 2.0 + Math.random() * 1.0;
          depth = 0.6 + Math.random() * 0.2;
        } else if (serverType < 0.7) {
          // Rack units (wide and flat)
          width = 1.2 + Math.random() * 0.6;
          height = 0.4 + Math.random() * 0.3;
          depth = 0.8 + Math.random() * 0.4;
        } else {
          // Standard servers (balanced)
          width = 0.8 + Math.random() * 0.4;
          height = 1.0 + Math.random() * 0.6;
          depth = 0.6 + Math.random() * 0.3;
        }
        
        const geometry = new THREE.BoxGeometry(width, height, depth);
        
        // Bright vibrant green glass material with strong glow
        const material = new THREE.MeshPhysicalMaterial({
          color: brightGreen,
          transparent: true,
          opacity: 0.6, // More visible for better glow
          metalness: 0.0, // Pure glass
          roughness: 0.05, // Very smooth glass
          clearcoat: 1.0, // Maximum clearcoat
          clearcoatRoughness: 0.0, // Perfect glass surface
          transmission: 0.4, // Balanced transmission for visibility
          thickness: 0.3, // Glass thickness
          emissive: brightGreen,
          emissiveIntensity: 0.8, // Much stronger glow!
          ior: 1.5, // Glass index of refraction
        });

        const node = new THREE.Mesh(geometry, material);
        node.position.set(x, y, z);
        node.castShadow = true;
        node.receiveShadow = true;
        
        // Add some random rotation for realism
        node.rotation.y = Math.random() * 0.3;
        
        scene.add(node);
        nodes.push(node);
        allNodes.push(node);

        // Create connections within the same layer with proper cube surface connections
        if (i > 0) {
          const prevNode = allNodes[allNodes.length - 2];
          if (prevNode && Math.abs(prevNode.position.y - node.position.y) < 2) {
            // Calculate connection points on cube surfaces instead of centers
            const direction = new THREE.Vector3().subVectors(node.position, prevNode.position).normalize();
            const prevBox = prevNode.geometry as THREE.BoxGeometry;
            const currentBox = node.geometry as THREE.BoxGeometry;
            
            // Get cube dimensions for surface calculation
            const prevSize = new THREE.Vector3();
            prevBox.computeBoundingBox();
            prevBox.boundingBox!.getSize(prevSize);
            
            const currentSize = new THREE.Vector3();
            currentBox.computeBoundingBox();
            currentBox.boundingBox!.getSize(currentSize);
            
            // Calculate surface connection points
            const startPoint = prevNode.position.clone().add(direction.clone().multiplyScalar(prevSize.length() * 0.5));
            const endPoint = node.position.clone().add(direction.clone().multiplyScalar(-currentSize.length() * 0.5));
            
            const points = [startPoint, endPoint];
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineMaterial = new THREE.LineBasicMaterial({
              color: brightGreen,
              transparent: true,
              opacity: 0.8, // More visible connections
              linewidth: 3 // Thicker lines
            });
            const line = new THREE.Line(lineGeometry, lineMaterial);
            scene.add(line);
            connections.push(line);
          }
        }
      }
    });

    // Create inter-layer network connections (like backbone infrastructure)
    const spineConnections: THREE.Line[] = [];
    
    // Connect layers with multiple backbone connections
    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayerNodes = allNodes.filter(node => 
        Math.abs(node.position.y - layers[i].position[1]) < 3
      );
      const nextLayerNodes = allNodes.filter(node => 
        Math.abs(node.position.y - layers[i + 1].position[1]) < 3
      );

      // Create multiple connections between layers (like network switches)
      for (let j = 0; j < Math.min(currentLayerNodes.length, nextLayerNodes.length); j++) {
        if (currentLayerNodes[j] && nextLayerNodes[j]) {
          const points = [currentLayerNodes[j].position, nextLayerNodes[j].position];
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          
          const lineMaterial = new THREE.LineBasicMaterial({
            color: brightGreen,
            transparent: true,
            opacity: 0.7, // More visible
            linewidth: 3 // Thicker backbone connections
          });
          
          const line = new THREE.Line(lineGeometry, lineMaterial);
          scene.add(line);
          spineConnections.push(line);
          connections.push(line as any);
        }
      }
    }

    // Removed data flow particles to eliminate geometric interference

    // Data packet visualization system
    const packetCount = 30;
    const packetGeometry = new THREE.BufferGeometry();
    const packetPositions = new Float32Array(packetCount * 3);
    const packetColors = new Float32Array(packetCount * 3);
    const packetVelocities: number[] = [];

    // Create data packets flowing through the network
    for (let i = 0; i < packetCount; i++) {
      // Start packets near server nodes
      const nearNode = allNodes[Math.floor(Math.random() * allNodes.length)];
      packetPositions[i * 3] = nearNode.position.x + (Math.random() - 0.5) * 2;
      packetPositions[i * 3 + 1] = nearNode.position.y + (Math.random() - 0.5) * 2;
      packetPositions[i * 3 + 2] = nearNode.position.z + (Math.random() - 0.5) * 2;
      
      // Data packet colors (bright green for consistency)
      const color = new THREE.Color(brightGreen); // Bright green data packets
      packetColors[i * 3] = color.r;
      packetColors[i * 3 + 1] = color.g;
      packetColors[i * 3 + 2] = color.b;
      
      // Directed movement between nodes
      packetVelocities.push(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.02
      );
    }

    packetGeometry.setAttribute('position', new THREE.BufferAttribute(packetPositions, 3));
    packetGeometry.setAttribute('color', new THREE.BufferAttribute(packetColors, 3));
    
    const packetMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    const packets = new THREE.Points(packetGeometry, packetMaterial);
    scene.add(packets);

    setIsLoaded(true);

    // Enhanced animation loop with advanced effects
    let time = 0;
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Update controls
      controls.update();

      // Animate bright green glass servers with strong glow
      nodes.forEach((node, index) => {
        // Dynamic intense glow effect
        const material = node.material as THREE.MeshPhysicalMaterial;
        material.emissiveIntensity = 0.8 + Math.sin(time * 2.5 + index * 0.7) * 0.4; // Much stronger glow variation
        
        // Subtle glass opacity pulsing for "data processing" effect
        material.opacity = 0.6 + Math.sin(time * 1.8 + index * 0.3) * 0.2;
        
        // Very subtle floating movement (like servers in a data center)
        node.position.y += Math.sin(time * 1.2 + index * 0.8) * 0.03;
        
        // Gentle rotation for dynamic effect
        node.rotation.y += 0.003;
        node.rotation.x += 0.002;
      });

      // Animate bright green connections with strong pulsing
      spineConnections.forEach((spine, index) => {
        const material = spine.material as THREE.LineBasicMaterial;
        material.opacity = 0.7 + Math.sin(time * 3 + index * 1.2) * 0.3; // Stronger pulsing
      });

      // Removed data flow particle animation

      // Animate data packets flowing through network
      const positions = packets.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < packetCount; i++) {
        // Move packets through the network
        positions[i * 3] += packetVelocities[i * 3];
        positions[i * 3 + 1] += packetVelocities[i * 3 + 1];
        positions[i * 3 + 2] += packetVelocities[i * 3 + 2];

        // Reset packets that go too far (simulate new data packets)
        if (Math.abs(positions[i * 3]) > 20 || Math.abs(positions[i * 3 + 2]) > 20) {
          const nearNode = allNodes[Math.floor(Math.random() * allNodes.length)];
          positions[i * 3] = nearNode.position.x + (Math.random() - 0.5) * 2;
          positions[i * 3 + 1] = nearNode.position.y + (Math.random() - 0.5) * 2;
          positions[i * 3 + 2] = nearNode.position.z + (Math.random() - 0.5) * 2;
        }
      }
      
      packets.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      controls.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={mountRef} 
        className="w-full h-full"
        style={{ 
          minHeight: '600px',
          background: 'transparent'
        }}
      />
      
      {/* Loading overlay - transparent */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span className="text-white font-medium">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
