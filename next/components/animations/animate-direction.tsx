import {AnimateOnScrollBase} from "@/components/animations/animate-on-scroll";

export const AnimateFromLeft = ({ children, delay }: { children: React.ReactNode; delay?: number }) => (
    <AnimateOnScrollBase direction="left" delay={delay}>
        {children}
    </AnimateOnScrollBase>
);

export const AnimateFromRight = ({ children, delay }: { children: React.ReactNode; delay?: number }) => (
    <AnimateOnScrollBase direction="right" delay={delay}>
        {children}
    </AnimateOnScrollBase>
);

export const AnimateFromBottom = ({ children, delay }: { children: React.ReactNode; delay?: number }) => (
    <AnimateOnScrollBase direction="bottom" delay={delay}>
        {children}
    </AnimateOnScrollBase>
);
