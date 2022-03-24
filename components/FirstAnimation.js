import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/firstanimation.module.css';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function FirstAnimation() {
	const mainanimcontainer = useRef();
	const hello = useRef();
	const random1 = useRef();
	const random2 = useRef();
	const random3 = useRef();
	const random4 = useRef();
	const random5 = useRef();
	const random6 = useRef();
	const random7 = useRef();
	const content = useRef();
	const firstenjoy = useRef();
	const lastenjoy = useRef();
	const firstanimcontainer = useRef();

	let moveUpDuration = 0.5;
	let moveUpDistance = 110;
	let tl2 = gsap.timeline({
		onComplete: () => {
			ScrollTrigger.refresh();
		}
	});

	useEffect(() => {
		tl2.fromTo(hello.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 2 });
		tl2.fromTo(random1.current, { y: moveUpDistance }, { y: 0, duration: moveUpDuration });
		tl2.to(random1.current, { y: -moveUpDistance, duration: moveUpDuration });
		tl2.fromTo(random2.current, { y: moveUpDistance }, { y: 0, duration: moveUpDuration }, `>-${moveUpDuration}`);
		tl2.to(random2.current, { y: -moveUpDistance, duration: moveUpDuration });
		tl2.fromTo(random3.current, { y: moveUpDistance }, { y: 0, duration: moveUpDuration }, `>-${moveUpDuration}`);
		tl2.to(random3.current, { y: -moveUpDistance, duration: moveUpDuration });
		tl2.fromTo(random4.current, { y: moveUpDistance }, { y: 0, duration: moveUpDuration }, `>-${moveUpDuration}`);
		tl2.to(random4.current, { y: -moveUpDistance, duration: moveUpDuration });
		tl2.fromTo(random5.current, { y: moveUpDistance }, { y: 0, duration: moveUpDuration }, `>-${moveUpDuration}`);
		tl2.to(random5.current, { y: -moveUpDistance, duration: moveUpDuration });
		tl2.fromTo(random6.current, { y: moveUpDistance }, { y: 0, duration: moveUpDuration }, `>-${moveUpDuration}`);
		tl2.to(random6.current, { y: -moveUpDistance, duration: moveUpDuration });

		tl2.addLabel('lastElement').fromTo(random7.current, { y: moveUpDistance }, { y: 0, duration: moveUpDuration }, `>-${moveUpDuration}`);
		tl2.to(random7.current, { y: -moveUpDistance, duration: 1.5, ease: 'power4.out' }, 'lastElement+=1');
		tl2.to(hello.current, { y: -moveUpDistance, duration: 1.5, ease: 'power4.out' }, 'lastElement+=1');
		tl2.to(content.current, { height: '21em', duration: 1.5, ease: 'power4.out' }, 'lastElement+=1');
		tl2.fromTo(
			'body',
			{ overflowY: 'hidden' },
			{ overflowY: 'auto', duration: 1.5, ease: 'power4.out' },
			'lastElement+=1'
		);
		tl2.fromTo(
			'html',
			{ overflowY: 'hidden' },
			{ overflowY: 'auto', duration: 1.5, ease: 'power4.out' },
			'lastElement+=1'
		);
		tl2.fromTo(
			firstenjoy.current,
			{ opacity: 0, translateY: '2em' },
			{ opacity: 1, duration: 1.5, ease: 'power4.out', translateY: '0em' },
			'lastElement+=1'
		);
		tl2.fromTo(
			lastenjoy.current,
			{ opacity: 0, translateY: '2em' },
			{ opacity: 1, duration: 1.5, ease: 'power4.out', translateY: '0em' },
			'lastElement+=1'
		);
		tl2.to(mainanimcontainer.current, { paddingTop: 0, duration: 1.5 }, 'lastElement+=1');
		tl2.to(firstanimcontainer.current, { height: 0, duration: 1.5 }, 'lastElement+=1');
	});
	return (
		<div ref={mainanimcontainer} id={styles.mainAnimFirstContainer}>
			<div id={styles.content} ref={content}>
				<div id={styles.firstAnim} className="hide-it" ref={firstanimcontainer}>
					<div id={styles.firstPartOfAnim}>
						<p ref={hello} id={styles.hello}>
							MAGIC4
						</p>
					</div>
					<div id={styles.absolutes}>
						<p ref={random1} id={styles.random1}>
						Events
						</p>
						<p ref={random2} id={styles.random2}>
						Management
						</p>
						<p ref={random3} id={styles.random3}>
						Brand
						</p>
						<p ref={random4} id={styles.random4}>
							Allianz
						</p>
						<p ref={random5} id={styles.random4}>
							ROI
						</p>
						<p ref={random6} id={styles.random5}>
						Madrid Escena
						</p>
						<p ref={random7} id={styles.random6}>
							U
						</p>
					</div>
				</div>
				<div id={styles.enjoycreaterelax} className="main-heading-first">
					<p ref={firstenjoy} id={styles.firstenjoy}>
						ENJOY.
					</p>
					<div ref={lastenjoy} id={styles.lastenjoycontainer}>
						<p className={styles.lastenjoy}>CREATE.</p>
						<p className={styles.lastenjoy}>FEEL.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
