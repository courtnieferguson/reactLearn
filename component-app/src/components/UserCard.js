import "./Card.css"
import StyledUserCard from "./Styled/StyledUserCard";

const UserCard = ({fullname, username, isAdmin = false})=>{
    return(
        <StyledUserCard>
            <h3>{fullname}</h3>
            <p>{username}</p>
        </StyledUserCard>
    )
}

export default UserCard