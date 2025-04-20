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

	// Программа дня
	const program = [
		{ time: '15:00', event: 'Сбор гостей, приветственный фуршет' },
		{ time: '16:00', event: 'Выездная регистрация' },
		{ time: '17:00', event: 'Фотосессия' },
		{ time: '18:00', event: 'Банкет' },
		{ time: '22:00', event: 'Танцы и развлечения' },
	];

	return (
		<section
			ref={sectionRef}
			className={`${styles.dateProgramSection} ${isVisible ? styles.visible : ''}`}
			id="date-program"
		>
			<div className={styles.content}>
				<h2 className={styles.title}>Дата и программа</h2>
				<p className={styles.date}>15 сентября 2024 года</p>
				<div className={styles.program}>
					{program.map((item, index) => (
						<div key={index} className={styles.programItem}>
							<span className={styles.time}>{item.time}</span>
							<span className={styles.event}>{item.event}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
