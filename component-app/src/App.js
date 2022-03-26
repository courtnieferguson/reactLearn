import Header from "./Components/Header";
import UserCard from "./Components/UserCard";

const users = [
    {
        fullname: "Monica Gellar",
        username: "mon"
    },
    {
        fullname: "Joey Trib",
        username: "joe"
    },
    {
        fullname: "Ross Gellar",
        username: "ross"
    },
    {
        fullname: "Monica Gellar",
        username: "mon"
    },
    {
        fullname: "Joey Trib",
        username: "joe"
    },
    {
        fullname: "Ross Gellar",
        username: "ross"
    },

]

function App() {
    return (
        <div style={{
            padding: 10,
            display:"flex",
            flexDirection:"row",
            overflow:"scroll"
        }}>
            {users.map(user => <UserCard fullname={user.fullname} username={user.username} />)}
            <UserCard />

        </div>
    );
}

export default App;

