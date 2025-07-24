"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CustomButton = ({
  text,
  className,
  link,
}: {
  text: string;
  className?: string;
  link: string;
}) => {
  return (
    <Link href={link || "#"}>
      <motion.button
        className={`bg-primaryColor hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 ${className}`}
        whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {text}
      </motion.button>
    </Link>
  );
};

export default CustomButton;
