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
				<h2 className={styles.title}>Подарки</h2>
				<p className={styles.description}>
					<p>
					 Если вы хотите подарить нам ценный подарок, мы будем рады вкладу в наше свадебное путешествие ✈️.
					</p>
				</p>
				<div className={styles.line} />
				<h2 className={styles.title}>Цветы</h2>
				<p>
					Мы будем рады, если вместо цветов вы подарите нам книги 📗.<br />
					Это станет прекрасным вкладом в нашу семейную библиотеку
					и оставит теплые воспоминания о вашем подарке.
				</p>
				<p>
					<a target='_blank' href='https://podarkus.ru/user/763835?utm_source=share&utm_medium=friends&utm_campaign=profile'>Список книг</a> 📚
				</p>
			</div>
		</section>
	);
};
