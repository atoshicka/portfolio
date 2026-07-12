import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { scrollTo } from '@/shared/lib/scrollTo';
import { NAV_ITEMS } from '../model/data';
import './navbar-styles.css';

interface NavbarProps {
    theme: 'dark' | 'light';
    onToggleTheme: () => void;
}

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 801px)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) setIsMenuOpen(false);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        scrollTo(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <a
                    href="#header"
                    className="brand"
                    onClick={(e) => handleNavClick(e, 'header')}
                >
                    atoshica
                </a>

                <div className="navbar__menu">
                    <ul className="navbar__list">
                        {NAV_ITEMS.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className="navbar__link"
                                    onClick={(e) => handleNavClick(e, id)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="navbar__theme-btn"
                        onClick={onToggleTheme}
                        aria-label="Переключить тему"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <button
                    className="navbar__burger"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div className={`navbar__mobile-menu ${isMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
                <ul className="navbar__mobile-list">
                    {NAV_ITEMS.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className="navbar__mobile-link"
                                onClick={(e) => handleNavClick(e, id)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="navbar__theme-btn navbar__theme-btn--mobile"
                    onClick={onToggleTheme}
                    aria-label="Переключить тему"
                >
                    {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                </button>
            </div>
        </nav>
    );
};