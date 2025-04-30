'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollBaseProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'left' | 'right' | 'bottom' | 'fade';
}

export const AnimateOnScrollBase = ({
    children,
    delay = 0,
    direction = 'fade',
}: AnimateOnScrollBaseProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });
    const hasAnimated = useRef(false);

    const getInitial = () => {
        switch (direction) {
            case 'left':
                return { opacity: 0, x: -50 };
            case 'right':
                return { opacity: 0, x: 50 };
            case 'bottom':
                return { opacity: 0, y: 50 };
            default:
                return { opacity: 0 };
        }
    };

    const getAnimate = () => ({ opacity: 1, x: 0, y: 0 });

    useEffect(() => {
        if (inView && !hasAnimated.current) {
            controls.start('visible');
            hasAnimated.current = true;
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref as React.Ref<HTMLDivElement>}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay }}
            variants={{
                hidden: getInitial(),
                visible: getAnimate(),
            }}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </motion.div>
    );
};
