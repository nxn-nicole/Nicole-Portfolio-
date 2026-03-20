import { motion } from "framer-motion";

export default function BlobBlue({ size = 160 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-20 0 760 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* body */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M309.525 2.15665C416.094 -12.5829 528.373 49.7391 582.07 142.963C629.999 226.172 591.514 329.414 547.051 414.525C515.878 474.197 447.445 491.636 385.792 518.681C328.588 543.775 273.66 575.258 212.808 561.146C128.525 541.601 26.2743 513.64 3.78744 430.093C-19.0209 345.353 66.5303 278.617 117.545 207.212C174.812 127.057 211.944 15.6532 309.525 2.15665Z"
        fill="#75A8FF"
      />
      <path
        d="M182.238 224.931C228.458 185.058 251.005 187.761 286.238 229.931"
        stroke="black"
        strokeWidth="8"
      />
      <path
        d="M398.213 225.328C444.432 185.454 466.98 188.157 502.213 230.328"
        stroke="black"
        strokeWidth="8"
      />

      {/* arm1 */}
      <g transform="translate(0, 200)">
        <motion.g
          animate={{ rotate: [-15, 15, -15] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            originX: "187px",
            originY: "123.65px",
          }}
        >
          <path
            d="M30.2979 4C44.7634 4 56.5957 15.9278 56.5957 30.7725C56.5956 45.617 44.7633 57.5439 30.2979 57.5439C15.8324 57.5439 4.00014 45.617 4 30.7725C4 15.9278 15.8323 4.00003 30.2979 4Z"
            stroke="black"
            stroke-width="8"
          />
          <path
            d="M48.3579 49.9009C89.5492 100.855 118.755 113.183 187 123.656"
            stroke="black"
            stroke-width="8"
          />
        </motion.g>
      </g>

      {/* arm2 */}
      <g transform="translate(500, 200)">
        <motion.g
          animate={{ rotate: [-15, 15, -15] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            originX: "0px",
            originY: "123.65px",
          }}
        >
          <path
            d="M157.208 4C142.742 4 130.91 15.9278 130.91 30.7725C130.91 45.617 142.742 57.5439 157.208 57.5439C171.673 57.5439 183.505 45.617 183.505 30.7725C183.505 15.9278 171.673 4.00003 157.208 4Z"
            stroke="black"
            stroke-width="8"
          />
          <path
            d="M139.147 49.9009C97.9562 100.855 68.7508 113.183 0.5056 123.656"
            stroke="black"
            stroke-width="8"
          />
        </motion.g>
      </g>
    </svg>
  );
}
