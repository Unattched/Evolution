import React from "react";
import "./LoginPage.css"
import firebase from "firebase"
import {useHistory} from "react-router";
const LoginPage: React.FC = () => {
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    return (

        <div className={"LoginPage"}>
            <header>
                <div id={"Order"} onClick={() => {
                    history.push("/orderForm");
                }}>Order now</div>
                <div onClick={() => {
                    firebase.auth().signInWithPopup(googleAuth).then((res) => {
                       // @ts-ignore
                        console.log(res.user.email)
                        history.push("/orderPage")
                    })
                }} id={"Login"}>Login</div>
            </header>

            <h1 id={"title"}>Evolution Cafe</h1>
        </div>
    )
};
export default LoginPage;
