import { db, storage } from "../../Firebase";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import * as ActionTypes from "../ActionTypes"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const getorder = (data) => async (dispatch) => {
    console.log(data)
    try {
        let data = []

        const querySnapshot = await getDocs(collection(db, "order"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        })

        dispatch({ type: ActionTypes.GET_ORDER, payload: data })

    } catch (error) {
        dispatch(errororder(error))
        // console.log(error);
    }
}

export const addorder = (OrderData) => async (dispatch) => {
    console.log(OrderData);
    try {
        const ordersRef = await addDoc(collection(db, "order"), OrderData)
        dispatch({ type: ActionTypes.ADD_ORDER, payload: ordersRef })


        // const productRef = await addDoc(collection(db, "product"), data);
        // console.log("Document written with ID: ", productRef.id);
        // dispatch({ type: ActionTypes.ADD_CATOGORIES, payload: { id: productRef.id, ...data } })

    } catch (error) {
        dispatch(errororder(error.message))
        console.error("Error adding document: ", error);
    }
}

export const errororder = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_ORDER, payload: error })
}
