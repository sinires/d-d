import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

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
			className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}
		>
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<img
						src="./photo_2025-02-22_21-31-50%20(1).png"
						alt="Молодожены"
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<h1 className={styles.subtitle}>Приглашение на свадьбу</h1>
					<h1 className={styles.title}>Дмитрия & Дианы</h1>
				</div>
			</div>
		</section>
	);
};
