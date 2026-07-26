import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        const increment = prev < 70 ? Math.random() * 12 : Math.random() * 4;
        return Math.min(prev + increment, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => onComplete?.(), 600);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [visible, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader__glow" />
          <motion.div
            className="loader__logo"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="loader__bracket">{"<"}</span>
            <span className="loader__name">Suman</span>
            <span className="loader__bracket">{"/>"}</span>
          </motion.div>

          <div className="loader__bar-track">
            <motion.div
              className="loader__bar-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>

          <motion.span
            className="loader__percentage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.floor(progress)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
