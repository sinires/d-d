import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const WelcomeBlock: React.FC = () => {
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

	// todo мб бахнуть фотографию сюда?
	return (
		<section
			ref={sectionRef}
			className={`${styles.additionalInfoSection} ${isVisible ? styles.visible : ''}`}
			id="additional-info"
		>
			<div className={styles.content}>
				<h2 className={styles.title}>Дорогие друзья и родные</h2>
				<div className={styles.description}>
					<p>Скоро наступит важный для нас день - мы станем семьей!</p>
							<p>Вместе с Вами мы откроем новую главу нашей истории.</p>
								<p>Мы хотим провести этот волшебный день в кругу самых близких и дорогих людей.</p>
									<p>С большой радостью приглашаем тебя на это торжество.</p>
				</div>
				{/*<div className={styles.leafDecoration} />*/}
				{/*<div className={styles.detailsContainer}>*/}
				{/*	<div className={styles.detailItem}>*/}
				{/*		<span className={styles.icon}> 🗓</span>*/}
				{/*		<span> 15 сентября 2024 года в 15:00</span>*/}
				{/*	</div>*/}
				{/*	<div className={styles.detailItem}>*/}
				{/*		<span className={styles.icon}> 🌳</span>*/}
				{/*		<span> Лесная поляна, урочище "Сосновая Роща"</span>*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
		</section>
	);
};
