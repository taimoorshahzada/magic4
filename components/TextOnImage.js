import React, { useRef, useEffect } from 'react';
import styles from '../styles/textonimage.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function TextOnImage({ text1, text2, image, imageSmall }) {
	const theText = useRef();
	const theimage = useRef();
	useEffect(() => {
		gsap.to(theText.current, {
			top: '0em',
			scrollTrigger: {
				trigger: theText.current,
				start: 'top center',
				end: 'center top',
				scrub: 1,
			}
		});
	}, []);
	return (
		<div id={styles.textOnImage}>
			<div ref={theText} id={styles.h2container}>
				<h2 className={styles.textOnImageForeground}>
					<span>{text1}</span>
				</h2>
				<h2 className={styles.textOnImageForeground}>
					<span>{text2}</span>
				</h2>
			</div>
			<img ref={theimage} src={image} id={styles.backgroundImageBig} className="img-fluid" alt="" />
			<img ref={theimage} src={imageSmall} id={styles.backgroundImageSmall} className="img-fluid" alt="" />
		</div>
	);
}
