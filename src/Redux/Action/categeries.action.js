import { db, storage } from "../../Firebase";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import * as ActionTypes from "../ActionTypes"
import { deleteObject, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const getcategorydata = (data) => async (dispatch) => {
    console.log("data");
    try {
        let data = []

        const querySnapshot = await getDocs(collection(db, "categories"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        })

        dispatch({ type: ActionTypes.GET_CATOGORIES, payload: data })

    } catch (error) {
        dispatch(errorcategories(error))
        console.log(error);
    }
}


export const addcategorydata = (data) => async (dispatch) => {
    // console.log(data);
    try {
        let imagestr = Math.floor(Math.random() * 100000).toString();
        const productRef = ref(storage, 'categories/' + imagestr);

        uploadBytes(productRef, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const productsRef = await addDoc(collection(db, "categories"), {
                            // categories: data.categories,
                            // price: data.price,
                            categoryname: data.categoryname,
                            url: url,
                            fileName: imagestr
                        }
                        );
                        dispatch({
                            type: ActionTypes.ADD_CATOGORIES, payload: {
                                id: productsRef.id,
                                // categories: data.categories,
                                // price: data.price,
                                categoryname: data.categoryname,
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
        dispatch(errorcategories(error.message))
        console.error("Error adding document: ", error);
    }
}

export const updatecatogrydata = (data) => async (dispatch) => {
    console.log(data);
    try {
        const productRefedit = doc(db, "categories", data.id);
        if (typeof data.file === "string") {
            console.log("only data");
            await updateDoc(productRefedit, {
                // categories: data.categories,
                // price: data.price,
                categoryname: data.categoryname,
                url: data.url
            });
            dispatch({ type: ActionTypes.UPDATE_CATOGORIES, payload: data })
        } else {
            // console.log("image with");
            const productRefdel = ref(storage, 'categories/' + data.fileName);

            deleteObject(productRefdel).then(async () => {

                let imagestr = Math.floor(Math.random() * 100000).toString();
                const productRef = ref(storage, 'categories/' + imagestr);

                uploadBytes(productRef, data.file)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                await updateDoc(productRefedit, {
                                    categories: data.categories,
                                    price: data.price,
                                    categoryname: data.categoryname,
                                    url: url,
                                    fileName: imagestr
                                });
                                dispatch({
                                    type: ActionTypes.UPDATE_CATOGORIES, payload: {
                                        ...data, url: url,
                                        fileName: imagestr
                                    }
                                })
                            })
                    })
            })
        }

    } catch (error) {
        dispatch(errorcategories(error.message));
    }
}


export const deletecategorydata = (data) => async (dispatch) => {
console.log(data)
    try {
        const desertRef = ref(storage, 'categories/' + data.fileName);
        deleteObject(desertRef).then(async () => {
            await deleteDoc(doc(db, "categories", data.id));
            dispatch({ type: ActionTypes.DELETE_CATOGORIES, payload: data.id })
        }).catch((error) => {
            dispatch(errorcategories(error.message));
        });

    } catch (error) {
        dispatch(errorcategories(error.message));
    }
}




export const errorcategories = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CATOGORIES, payload: error })
}
