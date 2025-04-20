import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const DetailsBlock: React.FC = () => {
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
			className={`${styles.additionalInfoSection} ${isVisible ? styles.visible : ''}`}
			id="additional-info"
		>
			<div className={styles.content}>
				<h2 className={styles.title}>Дополнительная информация</h2>
				<p className={styles.description}>
					Мы будем рады, если вместо цветов вы подарите нам книги. Это станет прекрасным вкладом в нашу будущую библиотеку
					и оставит теплые воспоминания о вашем подарке.
				</p>
				<div className={styles.bookContainer}>
					<div className={styles.bookIcon}>📚</div>
					<p className={styles.bookText}>Книги вместо цветов</p>
				</div>
			</div>
		</section>
	);
};
