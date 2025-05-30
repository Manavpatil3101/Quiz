"use client";
import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const explode = keyframes`
  100% {
    transform: translate3d(var(--x), var(--y), 0) scale(var(--s));
    opacity: 0;
  }
`;

const CubeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  perspective: 800px;
  pointer-events: none;
`;

const MainCube = styled.div`
  width: 120px;
  height: 120px;
  background: #222;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  transform: rotateX(20deg) rotateY(30deg) translateZ(0);
  transition: all 0.3s ease-in-out;
  text-align: center;
  padding: 10px;
`;

const CubeSpan = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  background: #fcd12a;
  box-shadow: 0 0 5px #fcd12a;
  border-radius: 4px;
  transform: translate3d(0, 0, 0);
  ${(props) =>
    props.explode &&
    css`
      animation: ${explode} 0.8s ease-out forwards;
      animation-delay: ${props.delay}ms;
    `}
`;

const CubeExplosion = ({ trigger, text }) => {
  const [spans, setSpans] = useState([]);

  useEffect(() => {
    if (trigger) {
      const generated = Array.from({ length: 40 }, (_, i) => {
        const angle = (i / 40) * 2 * Math.PI;
        const radius = 200 + Math.random() * 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const size = 0.6 + Math.random() * 1.4;

        return {
          id: i,
          x: `${x}px`,
          y: `${y}px`,
          s: size,
          delay: Math.random() * 200,
        };
      });

      setSpans(generated);
    } else {
      setSpans([]);
    }
  }, [trigger]);

  if (!trigger) return null;

  return (
    <CubeWrapper>
      <MainCube>{text}</MainCube>
      {spans.map((cube) => (
        <CubeSpan
          key={cube.id}
          explode={trigger}
          delay={cube.delay}
          style={{
            "--x": cube.x,
            "--y": cube.y,
            "--s": cube.s,
          }}
        />
      ))}
    </CubeWrapper>
  );
};

export default CubeExplosion;
