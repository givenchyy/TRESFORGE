// components/TresforgeLogo.jsx
import React, { useId } from "react";
import logoUrl from "../img/svg/tresforge_logo_black.svg?url";

export default function TresforgeLogo({
  size = 40,
  duration = 6, // скорость перелива (сек)
  className,
  onClick,
}) {
  const id = useId();
  const gradId = `tg-${id}`;
  const maskId = `tm-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 800 800"
      aria-hidden="true"
      className={className}
      onClick={onClick}
    >
      <defs>
        {/* Маска по альфе из внешнего SVG */}
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <image
            href={logoUrl}
            x="0"
            y="0"
            width="800"
            height="800"
            preserveAspectRatio="xMidYMid meet"
          />
        </mask>

        {/* АНИМИРОВАННЫЙ ГРАДИЕНТ (SMIL) */}
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff007f">
            <animate
              attributeName="stop-color"
              values="#ff007f; #a832ff; #ff9900; #ff007f"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="#a832ff">
            <animate
              attributeName="stop-color"
              values="#a832ff; #ff9900; #ff007f; #a832ff"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#ff9900">
            <animate
              attributeName="stop-color"
              values="#ff9900; #ff007f; #a832ff; #ff9900"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </stop>

          {/* Дополнительно слегка «катаем» сам градиент */}
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="-0.15 0; 0.15 0; -0.15 0"
            dur={`${duration * 1.4}s`}
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>

      {/* Под маской — прямоугольник с градиентом */}
      <g mask={`url(#${maskId})`}>
        <rect x="0" y="0" width="100%" height="100%" fill={`url(#${gradId})`} />
      </g>
    </svg>
  );
}
