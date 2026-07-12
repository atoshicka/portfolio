import { contacts } from '../model/data';
import './footer.css';

function Footer() {
    return (
        <footer className="footer" id='contacts'>  

            <div className="footer__info">   
                <p className="footer__farewell">Буду рада сотрудничать с вами!</p>
                <p className="footer__connection">На связи: Telegram / Email <br/> 8:00 — 20:00 (МСК)</p>
            </div>

            <div className='footer__contacts'>
                <nav aria-label="Контакты для связи">
                    <ul className="footer__social-list">
                        {contacts.map(contact => (
                            <li key={contact.id} className="footer__social-item">
                                <a 
                                    href={contact.href} 
                                    target={contact.id !== 'email' ? "_blank" : undefined}
                                    rel={contact.id !== 'email' ? "noopener noreferrer" : undefined}
                                    aria-label={contact.label}
                                >
                                    <img src={contact.img} alt={contact.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="footer__brand">
                    <p>A T O S H I C A</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;