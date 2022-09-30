import { db, storage } from "../../Firebase";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import * as ActionTypes from "../ActionTypes"
import { deleteObject, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const getproductdata = (data) => async (dispatch) => {
    // console.log(data)
    try {
        let data = []

        const querySnapshot = await getDocs(collection(db, "product"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        })

        dispatch({ type: ActionTypes.GET_PRODUCT, payload: data })

    } catch (error) {
        dispatch(errorproduct(error))
        // console.log(error);
    }
}


export const addproductdata = (data) => async (dispatch) => {
    // console.log(data);
    try {
        let imagestr = Math.floor(Math.random() * 100000).toString();
        const productRef = ref(storage, 'product/' + imagestr);

        uploadBytes(productRef, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const productsRef = await addDoc(collection(db, "product"), {
                            categories: data.categories,
                            price: data.price,
                            productname: data.productname,
                            desc: data.desc,
                            url: url,
                            fileName: imagestr
                        }
                        );
                        dispatch({
                            type: ActionTypes.ADD_PRODUCT, payload: {
                                id: productsRef.id,
                                categories: data.categories,
                                price: data.price,
                                productname: data.productname,
                                desc: data.desc,
                                url: url,
                                fileName: imagestr
                            }
                        })
                    });
            });


        // const productRef = await addDoc(collection(db, "product"), data);
        // console.log("Document written with ID: ", productRef.id);
        // dispatch({ type: ActionTypes.ADD_CATOGORIES, payload: { id: productRef.id, ...data } })

    } catch (error) {
        dispatch(errorproduct(error.message))
        console.error("Error adding document: ", error);
    }
}

export const updateproductdata = (data) => async (dispatch) => {
    console.log(data);
    try {
        const productRefedit = doc(db, "product", data.id);
        if (typeof data.file === "string") {
            console.log("only data");
            await updateDoc(productRefedit, {
                categories: data.categories,
                price: data.price,
                productname: data.productname,
                desc: data.desc,
                url: data.url
            });
            dispatch({ type: ActionTypes.UPDATE_PRODUCT, payload: data })
        } else {
            // console.log("image with");
            const productRefdel = ref(storage, 'product/' + data.fileName);

            deleteObject(productRefdel).then(async () => {

                let imagestr = Math.floor(Math.random() * 100000).toString();
                const productRef = ref(storage, 'product/' + imagestr);

                uploadBytes(productRef, data.file)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                await updateDoc(productRefedit, {
                                    categories: data.categories,
                                    price: data.price,
                                    productname: data.productname,
                                    desc: data.desc,
                                    url: url,
                                    fileName: imagestr
                                });
                                dispatch({
                                    type: ActionTypes.UPDATE_PRODUCT, payload: {
                                        ...data, url: url,
                                        fileName: imagestr
                                    }
                                })
                            })
                    })
            })
        }

    } catch (error) {
        dispatch(errorproduct(error.message));
    }
}


export const deleteproductdata = (data) => async (dispatch) => {
    console.log(data)
    try {
        const desertRef = ref(storage, 'product/' + data.fileName);
        deleteObject(desertRef).then(async () => {
            await deleteDoc(doc(db, "product", data.id));
            dispatch({ type: ActionTypes.DELETE_PRODUCT, payload: data.id })
        }).catch((error) => {
            dispatch(errorproduct(error.message));
        });

    } catch (error) {
        dispatch(errorproduct(error.message));
    }
}




export const errorproduct = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_PRODUCT, payload: error })
}
