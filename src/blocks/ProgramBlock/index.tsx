import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const ProgramBlock: React.FC = () => {
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
		{ time: '11:30', event: 'Сбор гостей' },
		{ time: '12:00', event: 'Регистрация в ЗАГСе' },
		{ time: '14:00', event: 'Сбор гостей в «Центр активного отдыха Ялгора»' },
		{ time: '15:00', event: 'Банкет' },
	];

	return (
		<section
			ref={sectionRef}
			className={`${styles.dateProgramSection} ${isVisible ? styles.visible : ''}`}
			id="date-program"
		>
			<div className={styles.content}>
				<h2 className={styles.title}>Программа</h2>
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
