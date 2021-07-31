const Button = ( props ) => {
    const { onClick, className, text } = props
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    )
}
export default Button