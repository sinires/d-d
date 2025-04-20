import React from 'react';
import styles from './styles.module.css';

export const FooterBlock: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<p className={styles.text}>Пожалуйста, сообщите нам о вашем присутствии до 1 июля, это очень важно для нас!</p>
				<p className={styles.text}>Спасибо, что разделяете с нами этот особенный день!</p>
				{/*<p className={styles.copyright}>© 2025 Дмитрий & Диана</p>*/}
			</div>
		</footer>
	);
};
