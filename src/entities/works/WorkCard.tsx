import github from '@/shared/assets/icon/github.svg';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import './work-card-styles.css';

interface Tech {
    src: string;
    alt: string;
}

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    techs: Tech[];
    href: string;
}

function WorkCard({ image, title, description, techs, href }: ProjectCardProps) {
    const [isImageOpen, setIsImageOpen] = useState(false);

    useEffect(() => {
        if (!isImageOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsImageOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isImageOpen]);

    return (
        <div className="work-card">
            <button
                type="button"
                className="work-card__image-btn"
                onClick={() => setIsImageOpen(true)}
                aria-label={`Открыть изображение проекта: ${title}`}
            >
                <img src={image} alt={title} />
            </button>

            <div className="work-card__content">
                <div className="work-card__header">
                    <h3 className="work-card__title">{title}</h3>
                    <a
                        className="work-card__github-link"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Открыть репозиторий на GitHub"
                    >
                        <img src={github} alt="GitHub" />
                    </a>
                </div>

                <p className="work-card__description">{description}</p>

                <ul className="work-card__techs">
                    {techs.map((tech) => (
                        <li className="work-card__tech" key={tech.alt}>
                            <img src={tech.src} alt={tech.alt} />
                            <span className="work-card__tech-tooltip">{tech.alt}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {isImageOpen && createPortal(
                <div
                    className="work-card__modal-overlay"
                    onClick={() => setIsImageOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Изображение проекта: ${title}`}
                >
                    <button
                        type="button"
                        className="work-card__modal-close"
                        onClick={() => setIsImageOpen(false)}
                        aria-label="Закрыть"
                    >
                        <X size={22} />
                    </button>
                    <img
                        className="work-card__modal-image"
                        src={image}
                        alt={title}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>,
                document.body
            )}
        </div>
    );
}

export default WorkCard;