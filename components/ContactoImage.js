import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactoImage() {
	let el = useRef();
	let trigg = useRef();
	let trigg1 = useRef();
	let q = gsap.utils.selector(el);
	let imageSrcBig = '/bg.jpeg';
	let imageSrcSmall = 'images/Magic4U_contacto.webp';

	useEffect(() => {
		gsap.fromTo(
			q('p'),
			{ translateY: 100, opacity: 0 },
			{
				translateY: 0,
				duration: 0.4,
				ease: 'power1.in',
				opacity: 1,
				markers: true,
				scrollTrigger: {
					trigger: trigg.current,
					start: 'bottom bottom'
				}
			}
		);
	}, []);
	return (
		<div className="container">
			<div className="contact-inner contact-bg">
				<div className="row">
					<div className="col-lg-12">
						<div id="contactUsImageContainer">
							<img ref={trigg1} src={imageSrcSmall} id="imageSmallContact" />
							<img ref={trigg} src={imageSrcBig} id="imageBigContact" />
							<div ref={el} id="contactUsTextContainer">
								<p className="titleMadrid">MADRID</p>
								<p>P.º Talleres, 3, Nave 166, 28021 Madrid</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
