const BaseButton = ({children, color, onClick})=>{
    return(
        <button onClick={onClick} style={{
            alignSelf: 'center',
            height: 55,
            borderRadius: 10,
            backgroundColor: color ?? 'white',
            cursor: "pointer",
            width: '100%',
            outline: 'none',
            border: "1px solid #eeeeee"
        }}>
            <p style={{
                color: color ? "white" : "black"
                //if there's a color then make text white , if not make it black
            }}>{children} </p>

        </button>
    )
}

export default BaseButton