import "./Card.css"
import StyledUserCard from "./Styled/StyledUserCard";

const UserCard = ({fullname, username, isAdmin = false})=>{
    return(
        // if isAdmin is true make it red , if false make white
        <StyledUserCard color={isAdmin ? 'red' : 'white'}>
            <h3>{fullname}</h3>
            <p>{username}</p>
        </StyledUserCard>
    )
}

export default UserCard