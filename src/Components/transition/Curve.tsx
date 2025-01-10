import { useEffect, useState, ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import { curve, text, translate } from "./anime";

// Define the routes with proper types
const routes: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/reservation": "Reservation",
};

// Define the animation function type
const anim = (variants: Variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

// Props for Curve component
interface CurveProps {
  children: ReactNode;
}

export default function Curve({ children }: CurveProps) {
  const location = useLocation();

  // Define dimensions state with proper typing
  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="page curve">
      {/* Background */}
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />

      {/* Route Title */}
      <motion.p
        className="absolute left-1/2 top-[40%] uppercase font-restora_light text-white text-6xl z-[1001] transform -translate-x-1/2 text-center"
        {...anim(text)}
      >
        {routes[location.pathname] || "Unknown"}
      </motion.p>

      {/* Curve SVG */}
      {dimensions.width != null && (
        <SVG height={dimensions.height || 0} width={dimensions.width || 0} />
      )}

      {/* Route Children */}
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </div>
  );
}

// Props for SVG component
interface SVGProps {
  height: number;
  width: number;
}

// SVG Component for Animated Path
const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg
      className="fixed inset-0 w-full h-[calc(100vh+600px)] pointer-events-none !z-[1000]"
      {...anim(translate)}
    >
      <motion.path
        className="fill-current text-gold-500"
        {...anim(curve(initialPath, targetPath))}
      />
    </motion.svg>
  );
};
