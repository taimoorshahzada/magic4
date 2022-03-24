import React, { useRef, useEffect } from 'react';
import styles from '../styles/bgtextchange.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function BgChangeText() {
	let p_one = useRef();
	let p_two = useRef();
	let p_three = useRef();
	let p_four = useRef();
	let p_five = useRef();
	let p_six = useRef();

	let p_one1 = useRef();
	let p_two1 = useRef();
	let p_three1 = useRef();
	let p_four1 = useRef();
	let p_five1 = useRef();
	let p_six1 = useRef();
	let p_seven1 = useRef();
	let p_eight1 = useRef();
	let p_nine1 = useRef();
	let p_ten1 = useRef();
	let p_eleven1 = useRef();

	useEffect(() => {
		gsap.to(p_one.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_one.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_two.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_two.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_three.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_three.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_four.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_four.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_five.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_five.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_six.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_six.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});

		gsap.to(p_one1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_one1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_two1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_two1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_three1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_three1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_four1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_four1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_five1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_five1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});

		gsap.to(p_six1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_six1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_seven1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_seven1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_eight1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_eight1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_nine1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_nine1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_ten1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_ten1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
		gsap.to(p_eleven1.current, {
			backgroundPositionX: '0%',
			stagger: 1,
			scrollTrigger: {
				trigger: p_eleven1.current,
				scrub: 1,
				start: 'top center',
				end: 'bottom top'
			}
		});
	}, []);
	return (
		<div>
			<div id={styles.bgchangetext} className="desktop">
				<p ref={p_one}>La magia de crear proyectos,</p>
				<p ref={p_two}>convertirlos en historias y hacerlos</p>
				<p ref={p_three}>realidad. Un camino que queremos</p>
				<p ref={p_four}>construir contigo desde el principio,</p>
				<p ref={p_five}>desarrollando tu idea y haciendo</p>
				<p ref={p_six}>algo único y diferente.</p>
				{/* <p ref={p_one}>La magia de crear proyectos,</p>
			<p ref={p_two}>convertirlos en historias y hacerlos</p>
			<p ref={p_three}>realidad. Un camino que queremos</p>
			<p ref={p_four}>construir contigo desde el principio,</p>
			<p ref={p_five}>desarrollando tu idea y haciendo</p>
			<p ref={p_six}>algo único y diferente.</p> */}
			</div>
			<div id={styles.bgchangetext1} className="mobile">
				<p ref={p_one1}>La magia de crear</p>
				<p ref={p_two1}>proyectos,</p>
				<p ref={p_three1}>convertirlos en</p>
				<p ref={p_four1}>historias y hacerlos</p>
				<p ref={p_five1}>realidad. Un camino</p>
				<p ref={p_six1}>que queremos</p>
				<p ref={p_seven1}>construir contigo</p>
				<p ref={p_eight1}>desde el principio,</p>
				<p ref={p_nine1}>desarrollando tu idea</p>
				<p ref={p_ten1}>y haciendo algo</p>
				<p ref={p_eleven1}> único y diferente.</p>
				{/* <p ref={p_one}>La magia de crear proyectos,</p>
			<p ref={p_two}>convertirlos en historias y hacerlos</p>
			<p ref={p_three}>realidad. Un camino que queremos</p>
			<p ref={p_four}>construir contigo desde el principio,</p>
			<p ref={p_five}>desarrollando tu idea y haciendo</p>
			<p ref={p_six}>algo único y diferente.</p> */}
			</div>
		</div>
	);
}
