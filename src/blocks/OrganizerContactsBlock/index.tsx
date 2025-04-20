import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const OrganizerContactsBlock: React.FC = () => {
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
			className={`${styles.organizerContactsSection} ${isVisible ? styles.visible : ''}`}
			id="organizer-contacts"
		>
			<div className={styles.content}>
				<h2 className={styles.title}>Контакты организатора</h2>
				<p className={styles.description}>
					Если у вас есть вопросы, свяжитесь с организатором свадьбы:
				</p>
				<div className={styles.contacts}>
					<a href="tel:+71234567890" className={styles.contactLink}>
						📞 +7 (123) 456-78-90
					</a>
					<a href="mailto:organizer@wedding.com" className={styles.contactLink}>
						✉️ organizer@wedding.com
					</a>
				</div>
			</div>
		</section>
	);
};
