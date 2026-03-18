"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type p5Config from "p5";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export default function GenerativeBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isClient, setIsClient] = useState(false);
    const blobsRef = useRef<any[]>([]);
    // Track mouse position in a ref so p5's draw closure can read it without re-mounting
    const mouseRef = useRef({ x: -1, y: -1 });

    useEffect(() => {
        setIsClient(true);
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        updateDimensions();

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        let timeoutId: NodeJS.Timeout;
        const delayedResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateDimensions, 100);
        };
        window.addEventListener("resize", delayedResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", delayedResize);
        };
    }, []);

    // Brand accent palette, soft pastels
    const colors = ['#DE84A8', '#E9EFF4', '#502FC8', '#DE84A8'];

    const setup = (p5: p5Config, canvasParentRef: Element) => {
        if (dimensions.width === 0) return;
        p5.createCanvas(dimensions.width, dimensions.height).parent(canvasParentRef);
        p5.noStroke();

        blobsRef.current = [];
        for (let i = 0; i < 4; i++) {
            blobsRef.current.push({
                // Initial position — spread around canvas
                x: p5.random(p5.width * 0.1, p5.width * 0.9),
                y: p5.random(p5.height * 0.1, p5.height * 0.9),
                // Current position for smooth interpolation (lerp)
                cx: p5.random(p5.width * 0.3, p5.width * 0.9),
                cy: p5.random(p5.height * 0.3, p5.height * 0.9),
                baseRadius: p5.random(p5.width * 0.15, p5.width * 0.3),
                colorStr: colors[i % colors.length],
                seedOffset: p5.random(1000),
                // Each blob has a slightly different mouse attraction strength
                attraction: p5.random(0.5, 0.7),
            });
        }
    };

    const draw = (p5: p5Config) => {
        if (dimensions.width === 0) return;
        p5.clear(0, 0, 0, 0);

        const time = p5.millis() * 0.00015;
        const mx = mouseRef.current.x < 0 ? p5.width / 2 : mouseRef.current.x;
        const my = mouseRef.current.y < 0 ? p5.height / 2 : mouseRef.current.y;

        blobsRef.current.forEach((blob) => {
            // Organic drift target based on noise/sin
            const driftX = blob.x + p5.sin(time + blob.seedOffset) * (p5.width * 0.15);
            const driftY = blob.y + p5.cos(time * 0.8 + blob.seedOffset) * (p5.height * 0.15);

            // Weighted target: mostly drift with a pull toward the mouse
            const targetX = driftX * (1 - blob.attraction) + mx * blob.attraction;
            const targetY = driftY * (1 - blob.attraction) + my * blob.attraction;

            // Smooth lerp toward the combined target — looks like fluid
            blob.cx = blob.cx + (targetX - blob.cx) * 0.015;
            blob.cy = blob.cy + (targetY - blob.cy) * 0.015;

            const c = p5.color(blob.colorStr);

            for (let layer = 0; layer < 6; layer++) {
                p5.beginShape();
                const radiusMod = blob.baseRadius * (1 + layer * 0.12);
                const baseAlpha = 8;
                c.setAlpha(Math.max(0, baseAlpha - layer * 1.5));
                p5.fill(c);

                for (let angle = 0; angle < p5.TWO_PI + 0.5; angle += 0.5) {
                    const noiseVal = p5.noise(
                        p5.cos(angle) * 1.2 + blob.seedOffset,
                        p5.sin(angle) * 1.2 + blob.seedOffset,
                        time * 0.8
                    );
                    const r = radiusMod + p5.map(noiseVal, 0, 1, -blob.baseRadius * 0.4, blob.baseRadius * 0.4);
                    const px = blob.cx + p5.cos(angle) * r;
                    const py = blob.cy + p5.sin(angle) * r;
                    // @ts-ignore
                    p5.curveVertex(px, py);
                }
                p5.endShape(p5.CLOSE);
            }
        });
    };

    const windowResized = (p5: p5Config) => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    if (!isClient || dimensions.width === 0) {
        return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
    }

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-0 mix-blend-multiply opacity-70 riso-filter blur-[40px] md:blur-[80px]"
        >
            <Sketch setup={setup} draw={draw} windowResized={windowResized} />
        </div>
    );
}
