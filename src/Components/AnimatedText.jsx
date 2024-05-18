import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedText({ text, onComplete, duration = 10 }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration,
            ease: "linear",
            onUpdate: (latest) => {
                if (latest === text.length) {
                    setAnimationCompleted(true);
                }
            },
            onComplete
        });

        return controls.stop;
    }, []); 

    return (
        <p className={animationCompleted ? "animation-completed" : ""}>
            <motion.span>{displayText}</motion.span>
        </p>
    );
}
