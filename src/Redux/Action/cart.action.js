import *as ActionTypes from "../ActionTypes"
import { db, storage } from "../../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const addtocart = () => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_TO_CART })
}

export const removetocart = () => (dispatch) => {
    dispatch({ type: ActionTypes.REMOVE_TO_CART })
}

// export const emptytocart = () => (dispatch) => {
//     dispatch({ type: ActionTypes.EMPTY_TO_CART })
// }

export const cartgetproduct = (data,) => async (dispatch) => {
    console.log("data");
    try {
        let data = []

        const querySnapshot = await getDocs(collection(db, "product"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        })

        dispatch({ type: ActionTypes.CARTGET_PRODUCT, payload: data })  

    } catch (error) {
        dispatch(errorcartproduct(error))
        console.log(error);
    }
}

export const addproductdata = (data) => async (dispatch) => {
    console.log(data);
    try {
        const docRef = await addDoc(collection(db, "product"), data);
        console.log("Document written with ID: ", docRef.id);
        dispatch({ type: ActionTypes.CARTADD_PRODUCT, payload: { id: docRef.id, ...data } })
    } catch (error) {
        dispatch(errorcartproduct(error.message))
        console.error("Error adding document: ", error);
    }
}

export const errorcartproduct = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.CART_PRODUCT_ERROR, payload: error })
} 