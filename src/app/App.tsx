import { useEffect, useState } from "react";
import Header from "@/widgets/header/ui/Header";
import Skils from "@/widgets/skills/ui/Skils";
import Works from "@/widgets/works/ui/Works";
import Footer from "@/widgets/footer/ui/Footer";
import { Navbar } from "@/widgets/navbar/ui/NavBar";
import './styles/colors.css';
import './styles/App.css';
import Preloader from "@/shared/ui/Preloader";

type Theme = 'dark' | 'light';

export const App = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) ?? 'dark';
  });

  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
    {showPreloader && (
      <Preloader onFinish={() => setShowPreloader(false)}/>
    )}

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Header />
      <Skils />
      <Works />
      <Footer />
    </>
  )
}