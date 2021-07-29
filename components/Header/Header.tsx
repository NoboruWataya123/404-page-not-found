import { HeaderProps } from "./Header.props";
import styles from './Header.module.css'

export default function Header({children}: HeaderProps): JSX.Element {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}
