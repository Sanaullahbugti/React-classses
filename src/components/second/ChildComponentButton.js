const Button = (props)=>{
    console.log(props)
    return <button
        onClick={()=>props.onIncreament()}
    >
        increament
    </button>
}

export default Button