import React from "react";
import Label from "../Components/Label";
import Title from "../Components/Title";
import BaseButton from "../Components/BaseButton";
import SizedBox from "../Components/SizedBox";
import UserInput from "../Components/UserInput";
import ErrorMessage from "../Components/ErrorMessage";

const LoginScreen = ()=>{
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [hasError, setHasError] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')

    const inputToUsername = (e)=>{
        setUsername(e.target.value)
    }

    const inputToPassword = (e)=>{
        setPassword(e.target.value)
    }

    const loginTheUser = ()=>{
        setHasError(false)
        //validate the data
        if(username === ''){
            //user needs to enter a value
            setHasError(true)
            setErrMsg('Please input a username')
            return
        }
        if(username.length <3){
            //user needs to enter more values
            setHasError(true)
            setErrMsg('Username must be at least 4 characters')
            return
        }
        if(password === ''){
            //user needs to enter a value
            setHasError(true)
            setErrMsg('Please input a password')
            return
        }
        if(password.length <6){
            //user needs to enter more values
            setHasError(true)
            setErrMsg('Password must be at least 7 characters')
            return
        }

        alert("Success")
    }

    return(
    <div style={{
        padding: "10px 30px",
        borderRadius: 10,
        width: 400,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
        // justifyContent:'center',
        // alignItems: 'center'
        }}>
         <Title value="Log In" />
         <BaseButton>Sign in with google</BaseButton>
         <SizedBox height={20} />
        <div style={{
            height: 2,
            width: '100%',
            backgroundColor: "#eeeeee"
            }}/>
        <SizedBox height={20} />
        <div>
            <Label value="Username" />
            <SizedBox height={10} />
            <UserInput value={username} onInput={inputToUsername}/>
        </div>
        <SizedBox height={20} />
        <div>
            <Label value="password" />
            <SizedBox height={10} />
            <UserInput value={password} onInput={inputToPassword} type="password"/>
        </div>
        {hasError && (
            <ErrorMessage error={errMsg} />
        )}
        <SizedBox height={20} />
        <BaseButton onClick={loginTheUser} color="#0285FF">Log in</BaseButton>
    </div>
    )
}

export default LoginScreen