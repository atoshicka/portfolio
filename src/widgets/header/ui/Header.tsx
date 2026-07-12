import atoshica from '../assets/atoshica.svg';
import { scrollTo } from '@/shared/lib/scrollTo';
import './headers.css';

function Header() {
    return (
        <header className='hero' id='header'>
            <div className="hero__container">
                <div className="hero__content">
                    
                    <h1 className='hero__title'>
                        Привет! Меня зовут <span>Маша.</span>
                        <br/>
                        Я <span>фронтенд разработчик.</span>
                    </h1>

                    <div className='hero__icon'>
                        <img src={atoshica} alt="" />
                    </div>

                    <button className="hero__contact" onClick={() => scrollTo('contacts')}>Связаться</button>
                </div>
            </div>
        </header>
    )
}

export default Header;