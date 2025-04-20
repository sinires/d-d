import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const PlaceBlock: React.FC = () => {
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
			className={`${styles.locationSection} ${isVisible ? styles.visible : ''}`}
			id="location"
		>
			<div className={styles.content}>
				<h2 className={styles.title}>Место проведения</h2>
				<p className={styles.description}>
					Наша свадьба состоится в центре активного отдыха "Ялгора", окруженном живописным лесом. Это идеальное место для
					праздника, наполненного теплом и уютом.
				</p>
				<div className={styles.mapContainer}>
					<iframe
						src="https://yandex.ru/map-widget/v1/?um=constructor%3A4ff7e591f793458613f84a0b8fbeab4980bdc500537346c5f5923db1935fcb9d&amp;source=constructor"
						width='100%' height="400" frameBorder="0"></iframe>
				</div>
			</div>
		</section>
	);
};
