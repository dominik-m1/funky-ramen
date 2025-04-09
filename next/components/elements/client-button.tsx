'use client';

import {Button} from "@/components/elements/button";

export function CTAButton({ text, url }: { text: string; url: string }) {
    const handleClick = () => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Button
            className="mt-28"
            variant="primary"
            onClick={handleClick}
        >
            {text}
        </Button>
    );
}
