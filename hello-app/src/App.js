import logo from './logo.svg';
import './App.css';
import LoginScreen from "./Screens/LoginScreen";

function App() {
  return (
      <div style={{
          height:'100vh',
          backgroundColor:"#f2f2f2",
          display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
      }}>
   <LoginScreen />
      </div>
  );
}

export default App;
