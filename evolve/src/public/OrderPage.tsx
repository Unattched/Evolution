import React from "react";
import firebase from "firebase";
import {log} from "util";

const OrderPage: React.FC = () => {

    let orders: any = [];
    let unsub = firebase.firestore().collection("Orders").where("active", "==", true)
        .onSnapshot((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                orders.push(doc.data())

            })
            console.log(orders)
            console.log(orders.toString())
        })
    return (
        <div className={"OrderPage"}>
            {orders.toString()}
        </div>
    )
};
export default OrderPage;
