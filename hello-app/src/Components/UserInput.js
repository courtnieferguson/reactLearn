const UserInput = ({value, onInput, type ="text"})=>{
    return(
        <input value={value} onInput={onInput} type={type} style={{
            height: 45,
            borderRadius: 10,
            width: '95%',
            backgroundColor:'white',
            outline: 'none',
            padding: "0 10px",
            border: "1px solid #eeeeee"
        }} />
    )
}

export default UserInput