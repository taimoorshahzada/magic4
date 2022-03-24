import 'bootstrap/dist/css/bootstrap.css';
import '../../public/loader';
import { useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
	useEffect(() => {
		        //Enable Smooth Scrolling
// const locoScroll = new LocomotiveScroll({
//     // el: document.querySelector(".scroll-container"),
//     el: document.querySelector("main"),
//       smooth: true,
      
//   }); 


       /* jQuery Code Here */
      });
	return (
		<footer data-scroll-section="7">
			<div className="footer">
				<div className="container">
					<div className="footer-top">
						<div className="footer-top-outer">
							<div className="row">
								<div className="col-12">
									<div className="footer-logo">
										<div className="logo">
											<Link href="/">MAGIC4U</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="footer-box footer-box-1">
										<div className="footer-box-inner">
											<div className="footer-menu">
												<ul>
													<li>
														<a href="#">
															Calle Paseo de Talleres
															<br />
															28041 Madrid
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="footer-box footer-box-2">
										<div className="footer-box-inner">
											<div className="footer-menu">
												<ul>
													<li>
														<a href="#">Home</a>
													</li>
													<li>
														<a href="#">About</a>
													</li>
													<li>
														<a href="#">Work</a>
													</li>
													<li>
														<Link href="/contacto">Contact</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="footer-box footer-box-3">
										<div className="footer-box-inner">
											<div className="footer-menu">
												<ul>
													<li>
														<Link href="/privacidad">Política de privacidad</Link>
													</li>
													<li>
														<Link href="/cookies">Política de cookies</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="footer-box footer-box-4">
										<div className="footer-box-inner">
											<div className="footer-menu">
												<ul>
													<li>
														<a href="#">Facebook</a>
													</li>
													<li>
														<a href="#">Instagram</a>
													</li>
													<li>
														<a href="#">Linkedin</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="footer-bottom-inner">
							<div className="footer-copy text-center">
								<p>© Magic4U 2022</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
