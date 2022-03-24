import 'bootstrap/dist/css/bootstrap.css';
import '../../public/loader'
import {useEffect} from 'react';
import Link from 'next/link'
export default function FooterLight() {
    ;
    return (
        <footer>
        <div className="cta-section">
            <div className="container">
                <div className="cta-inner">
                    <div className="section-title section-title-white text-center">
                        <h2>Al primer café invita la casa... ¿Hablamos?</h2>
                    </div>
                    <div className="btn-cta-outer text-center">
                        <Link href="contacto" >
                        <a className="btn-link btn-link-white">Contacto</a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-top">
                        <div className="section-title">
                            <h2>Diseñamos soluciones digitales</h2>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="footer-left">
                                    <div className="footer-left-inner">
                                        <div className="footer-logo">
                                            <div className="logo">
                                                <a href="#">Bla.</a>
                                            </div>
                                        </div>
                                        <div className="footer-copy">
                                            <p>© Copyright Bla Agency 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-right">
                                    <div className="footer-right-inner">
                                        <div className="footer-email">
                                            <a href="mailto:sos@blaagency.com">sos@blaagency.com</a>
                                        </div>
                                        <div className="footer-social">
                                            <ul>
                                                <li><a href="https://www.instagram.com/blaagency/?hl=es" target="_blank">
                                                    <img src="/images/Instagram.svg" className="img-fluid" alt=""/>
                                                    <img src="/images/Instagram-white.svg" className="img-fluid social-dark" alt=""/>
                                                </a></li>
                                                <li><a href="https://www.linkedin.com/company/blaagency/" target="_blank">
                                                    <img src="/images/Linkedin.svg" className="img-fluid" alt=""/>
                                                    <img src="/images/Linkedin-white.svg" className="img-fluid  social-dark" alt=""/>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </footer>
    )
}

