import 'bootstrap/dist/css/bootstrap.css';
// import Head from 'next/head';
import Navbar from './Navbar/index';
import { useEffect } from 'react';
import Heads from './Head';
import Footer from './Footer';
import ContactoImage from '../components/ContactoImage';

export default function Contacto() {
	useEffect(() => {
		/* Cursor Animation end */
	});
	return (
		<div className="">
			<Heads />

			<main>
				<Navbar />

				<div className="main-heading-section main-heading-contac">
					<div className="container">
						<div className="main-header-inner">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<div className="main-header-inner" style={{ overflow: 'hidden' }}>
										<div className="main-header-titles" style={{ overflow: 'hidden' }}>
											<h1
												className="animate__animated animate__fadeInUp animate__delay-5ms animate__slow contact-title"
												style={{ overflow: 'hidden' }}
											>
												¿Hablamos?
											</h1>
										</div>
										<div className="main-header-titles" style={{ overflow: 'hidden' }}>
											<h1
												className="animate__animated animate__fadeInUp animate__delay-5ms animate__slow contact-title"
												style={{ overflow: 'hidden' }}
											>
												Queremos crear,
											</h1>
										</div>
										<div className="main-header-titles" style={{ overflow: 'hidden' }}>
											<h1
												className="animate__animated animate__fadeInUp animate__delay-5ms animate__slow contact-title"
												style={{ overflow: 'hidden' }}
											>
												disfrutar y sentir tu idea
											</h1>
										</div>
										<div className="main-header-titles" style={{ overflow: 'hidden' }}>
											<h1
												className="animate__animated animate__fadeInUp animate__delay-5ms animate__slow contact-title"
												style={{ overflow: 'hidden' }}
											>
												como si fuera nuestra.
											</h1>
										</div>
									</div>
								</div>
								<p className="header-description">
									Lorem Ipsum es simplemente el texto de relleno de las imprentas
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-contact-section">
					<div className="container">
						<div className="footer-contact-outer ft-cta-inner ft-cta-inner-contact no-x-padding">
							<div className="row">
								<div className="col-lg-4 col-md-4">
									<div className="footer-contact-box">
										<div className="footer-contact-box-inner">
											<div className="footer-contact-box-title">
												<h3>EVENTOS</h3>
											</div>
											<div className="footer-contact-box-desc">
												<p>hola@magic4u.es</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="footer-contact-box">
										<div className="footer-contact-box-inner">
											<div className="footer-contact-box-title">
												<h3>BRANDS</h3>
											</div>
											<div className="footer-contact-box-desc">
												<p>hola@magic4u.es</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="footer-contact-box">
										<div className="footer-contact-box-inner">
											<div className="footer-contact-box-title">
												<h3>CONTACTO</h3>
											</div>
											<div className="footer-contact-box-desc">
												<p>hola@magic4u.es</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div
					className="contact-section contact-page-section"
					style={{ paddingTop: '30px', paddingBottom: '30px', borderTop: 'none' }}
				>
					<div className="container">
						<div className="contact-inner contact-bg">
							<div className="row">
								<div className="col-lg-12">
									<div className="contact-left">
										<div className="contact-left-inner">
											<div className="contact-google-map contacto-img">
												<div className="row">
													<div className="col-lg-4">
														<p className="contact-left">MADRID</p>
													</div>
													<div className="col-lg-8">
														<p className="contact-left">
															P.º Talleres, 3, Nave 166, 28021 Madrid
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
				<ContactoImage />
			</main>

			<Footer />
			<style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
    
            * {
              box-sizing: border-box;
            }
            
          `}</style>
		</div>
	);
}
