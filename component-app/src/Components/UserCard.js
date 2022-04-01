import "./Card.css"

const UserCard = ({fullname, username})=>{
    return(
        <div className="card" style={{
            margin: "0 10px",
            borderRadius: 10,
            width: 120,
            padding: 10,
            boxShadow: "0px 0px 10px black",
        }}>
            <h3>{fullname}</h3>
            <p>{username}</p>
        </div>
    )
}

export default UserCard