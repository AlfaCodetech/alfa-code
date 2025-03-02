
import { useEffect, useRef } from 'react';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene = ({ className = '' }: ThreeSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Three.js library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!containerRef.current) return;
      
      // @ts-ignore - Three.js is loaded from CDN
      const THREE = window.THREE;
      
      // Set up scene
      const scene = new THREE.Scene();
      
      // Set up camera
      const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      camera.position.z = 5;
      
      // Set up renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setClearColor(0x000000, 0); // Transparent background
      
      if (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      containerRef.current.appendChild(renderer.domElement);
      
      // Add lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
      
      // Create a group for our objects
      const group = new THREE.Group();
      scene.add(group);
      
      // Create several small spheres
      const sphereGeometry = new THREE.SphereGeometry(0.2, 24, 24);
      const colors = [0x2563eb, 0x3b82f6, 0x60a5fa, 0x93c5fd];
      
      for (let i = 0; i < 10; i++) {
        const material = new THREE.MeshPhongMaterial({ 
          color: colors[i % colors.length],
          transparent: true,
          opacity: 0.7,
          shininess: 100
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, material);
        
        // Position the spheres randomly
        sphere.position.x = (Math.random() - 0.5) * 6;
        sphere.position.y = (Math.random() - 0.5) * 6;
        sphere.position.z = (Math.random() - 0.5) * 4;
        
        // Add to the group
        group.add(sphere);
      }
      
      // Add some subtle animation
      const animate = () => {
        requestAnimationFrame(animate);
        
        // Rotate the entire group
        group.rotation.y += 0.002;
        group.rotation.x += 0.001;
        
        // Move each sphere slightly
        group.children.forEach((child, i) => {
          child.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
        });
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Handle window resize
      const handleResize = () => {
        if (!containerRef.current) return;
        
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
};

export default ThreeScene;
