import React from 'react';
import styles from './styles.module.css';

export const FooterBlock: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<p className={styles.text}>Спасибо, что разделяете с нами этот особенный день!</p>
				{/*<div className={styles.socialLinks}>*/}
				{/*	<a*/}
				{/*		href="https://instagram.com"*/}
				{/*		target="_blank"*/}
				{/*		rel="noopener noreferrer"*/}
				{/*		className={styles.socialLink}*/}
				{/*	>*/}
				{/*		Instagram*/}
				{/*	</a>*/}
				{/*	<a*/}
				{/*		href="https://facebook.com"*/}
				{/*		target="_blank"*/}
				{/*		rel="noopener noreferrer"*/}
				{/*		className={styles.socialLink}*/}
				{/*	>*/}
				{/*		Facebook*/}
				{/*	</a>*/}
				{/*</div>*/}
				<p className={styles.copyright}>© 2025 Дмитрий & Диана. Мы вас очень ждем.</p>
			</div>
		</footer>
	);
};
