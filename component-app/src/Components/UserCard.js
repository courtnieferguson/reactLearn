const UserCard = (props)=>{
    return(
        <div style={{
            margin: "0 10px",
            borderRadius: 10,
            width: 120,
            padding: 10,
            boxShadow: "0px 0px 10px black",
            backgroundColor: "white"
        }}>
            <h3>{Full name of user}</h3>
            <p>username of user</p>
        </div>
    )
}

export default UserCard