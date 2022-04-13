import Header from "./components/Header";
import UserCard from "./components/UserCard";

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
            {users.map(user => <UserCard isAdmin={user.fullname.length < 10} fullname={user.fullname} username={user.username} />)}
            <UserCard username={"Daniel"} fullname={"Daniel Davis"} />

        </div>
    );
}

export default App;

