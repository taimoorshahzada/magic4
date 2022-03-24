import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BottomTextAnimate() {
	const bottomtext = useRef();
	const textcontainer = useRef();
	useEffect(() => {
		gsap.fromTo(
			bottomtext.current,
			{ translateY: 500 },
			{
				translateY: 0,
				duration: 0.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: textcontainer.current,
					start: 'center bottom'
				}
			}
		);
	}, []);

	return (
		<div className="ft-cta-section">
			<div className="container">
				<div
					ref={textcontainer}
					className="ft-cta-inner"
					style={{
						overflow: 'hidden'
					}}
				>
					<div ref={bottomtext} className="section-title text-center">
						<h2 className="title-text">cuéntanos tu idea</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
