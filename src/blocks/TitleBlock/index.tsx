import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

export const TitleBlock: React.FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.unobserve(entry.target); // Останавливаем наблюдение после появления
					}
				});
			},
			{ threshold: 0.5 } // Срабатывает, когда 50% элемента видно
		);

		const currentSection = sectionRef.current;

		if (currentSection) {
			observer.observe(currentSection);
		}

		return () => {
			if (currentSection) {
				observer.unobserve(currentSection);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}
		>
			<div className={styles.overlay}></div>
			<div className={styles.content}>
				<h1 className={styles.title}>Анна & Иван</h1>
				<p className={styles.subtitle}>15 сентября 2024</p>
				<p className={styles.location}>Загородный клуб "Лесная сказка"</p>
				<button className={styles.ctaButton}>Подробнее</button>
			</div>
		</section>
	);
};
