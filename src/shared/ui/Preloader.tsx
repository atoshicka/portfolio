import { useEffect, useState } from "react";

import './preloader-styles.css';

interface PreloaderProps {
    onFinish?: () => void;
}

const BLOCKS__COUNT = 3;
const RISE_DURATION = 800;
const RISE__STAGGER = 180;
const HOLD_AFTER_RISE = 300;
const REVEAL_DURATION = 700;

export default function Preloader({ onFinish }: PreloaderProps) {
    const [isRevealing, setIsRevealing] = useState(false);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const lastBlockStart = (BLOCKS__COUNT - 1) * RISE__STAGGER;
        const riseEnd = lastBlockStart + RISE_DURATION;

        const revealTimer = setTimeout(() => {
            setIsRevealing(true);
        }, riseEnd + HOLD_AFTER_RISE);

        const doneTimer = setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = prevOverflow;
            onFinish?.();
        }, riseEnd + HOLD_AFTER_RISE + REVEAL_DURATION);

        return () => {
            clearTimeout(revealTimer);
            clearTimeout(doneTimer);
            document.body.style.overflow = prevOverflow;
        };
    }, [onFinish]);

    if (isDone) return null;

    return (
        <div 
        className={` preloader ${isRevealing ? 'isRevealing' : ''}`}
        aria-hidden='true'
        >
            <div className="columns">
                {Array.from({ length: BLOCKS__COUNT }).map((_, index) => (
                    <div
                    key={index}
                    className="column"
                    style={{
                        animationDelay: `${index * RISE__STAGGER}ms`,
                        animationDuration: `${RISE_DURATION}ms`,
                    }}
                    />
                ))}
            </div>
        </div>
    )
}