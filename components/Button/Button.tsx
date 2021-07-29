import { ButtonProps } from "./Button.props";
import styles from './Button.module.css'

export default function Button({children, ...props}: ButtonProps): JSX.Element {
    return (
        <button className={styles.btn} {...props}>
            {children}
        </button>
    )
}
