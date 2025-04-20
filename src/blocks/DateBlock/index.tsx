import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const DateBlock: React.FC = () => {
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
			{ threshold: 0.3 } // Срабатывает, когда 30% элемента видно
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
			className={`${styles.dateProgramSection} ${isVisible ? styles.visible : ''}`}
			id="date-program"
		>
			<div className={styles.content}>
				<div className={styles.title}>Дата проведения</div>
				<div className={styles.description}>
					23 августа 2025
				</div>
				<div className={styles.date}>
					<img
						src="./calendar.png"
						alt="Молодожены"
						className={styles.image}
					/>
				</div>
			</div>
		</section>
	);
};
