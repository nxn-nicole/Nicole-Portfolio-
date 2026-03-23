import { motion } from "framer-motion";

export default function HeadLine({ size = 160 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M183.426 4.00049C173.75 70.3258 174.017 100.046 181.048 144.456"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
        initial={{ rotate: 10 }}
        animate={{ rotate: [10, 0, 10] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M53.8789 6.93896C85.0541 85.246 101.839 123.967 142.879 154.939"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
        initial={{ rotate: 5 }}
        animate={{ rotate: [5, 0, 5] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M4.00093 157.038C49.9511 146 75.4512 157.039 105.001 171.038"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
        initial={{ rotate: 8 }}
        animate={{ rotate: [8, 0, 8] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
