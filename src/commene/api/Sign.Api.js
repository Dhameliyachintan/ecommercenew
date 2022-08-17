import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../Firebase"

export const SignAPI = (data) => {
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
    console.log(data);
    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, data.email, data.password)

            .then((user) => {
                console.log(user);
                if (user.user.emailVerified) {
                    resolve({ payload: user.user });
                }
                else {
                    reject({ payload: "please verfity your email" });
                }
                // console.log(user);        
            })

            .catch((error) => {
                if (error.code.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: "wrong email or password" })
                }
                else if (error.code.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "please ragistred email" })
                }
                else {
                    reject({ payload: error.code });
                }
                // console.log(error); 
            });

    })
}

export const LogoutAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then((user) => {
                resolve({ payload: "Logout Sucessfull" });
            }).catch((error) => {
                reject({ payload: error.code });
            })
    })
}