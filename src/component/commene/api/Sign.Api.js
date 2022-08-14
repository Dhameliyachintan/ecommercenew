import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../../Firebase"

export const SIgnAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        const uid = user.uid;
                        // ...
                    } else {
                    }
                });
                // ...
            })
            .then((emailverified) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        if (user.emailVerified) {
                            resolve({ payload: "Email Sucessfull" })
                            // console.log("Email Sucessfull");
                        } else {
                            resolve({ payload: "Please verify your Email" })
                            // console.log("Please verify your Email");
                        }
                    } else {
                        reject({ payload: "wrong verify" })
                    }
                });
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);

                if (errorCode.localeCompare("auth/alerday use-email"))
                    reject({ payload: "email already Ragistared" });
                else {
                    reject({ payload: errorCode });
                }
            });
    })
}


export const LoginAPI = (data) => {
   
}