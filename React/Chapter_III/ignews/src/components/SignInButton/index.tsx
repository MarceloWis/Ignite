import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedIn = true;
    return isUserLoggedIn ? (
        <button className={styles.signInButton}>
            <FaGithub color="#a4d361" />
            Marcelo Wis
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button className={styles.signInButton}>
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    ) 
}