import styles from '../styles/Button.module.css'

const STYLES = [
    styles.btnPrimary,
    styles.btnOutline
]

const SIZES = [
    styles.btnMedium,
    styles.btnLarge
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize

}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={checkButtonSize && checkButtonStyle} onClick={onClick} type={type}>
            {children}
        </button>
    )

}