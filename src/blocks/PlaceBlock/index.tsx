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
					Наша свадьба состоится в загородном клубе "Лесная сказка", окруженном живописным лесом. Это идеальное место для
					праздника, наполненного теплом и уютом.
				</p>
				<div className={styles.mapContainer}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.678901234567!2d37.12345678901234!3d55.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDA3JzI0LjQiTiAzN8KwMDcnMzQuNiJF!5e0!3m2!1sen!2sru!4v1234567890123!5m2!1sen!2sru"
						width="100%"
						height="400"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	);
};
