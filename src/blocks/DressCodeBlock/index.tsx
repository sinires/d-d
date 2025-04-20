import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const DressCodeBlock: React.FC = () => {
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

	// Цвета для дресс-кода
	const colors = ['#614c31', '#7c825e', '#bca68f', '#d7b4ae', '#fde8e7']; // Золотой, коричневый, зеленый, фиолетовый, белый

	return (
		<section
			ref={sectionRef}
			className={`${styles.dressCodeSection} ${isVisible ? styles.visible : ''}`}
			id="dress-code"
		>
			<div className={styles.content}>
				<h2 className={styles.title}>Дресс-код</h2>
				<p className={styles.description}>
					Нам будет очень приятно, если поддержите цветовую гамму торжества и выберите наряды в соответстви с цветовой палитрой нашей свадьбы.
				</p>
				<div className={styles.colorContainer}>
					{colors.map((color, index) => (
						<div
							key={index}
							className={styles.colorCircle}
							style={{ backgroundColor: color }}
						></div>
					))}
				</div>
			</div>
		</section>
	);
};
