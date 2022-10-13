import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { auth, authentication, db, } from "../../Firebase"

// SignAPI

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
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        if (user.emailVerified) {
                            resolve({ payload: "Email Sucessfull" })
                            // console.log("Email Sucessfull");
                        } else {
                            resolve({ payload: "Please verify your Email" })
                            await setDoc(doc(db, "users", user.uid), {
                                email: data.email,
                                role: "user",
                                emailVerified: user.emailVerified
                            })
                                .then(() => console.log("user added"))
                                .catch((error) => console.log(error.code))

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

// LoginAPI

export const LoginAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, data.email, data.password)

            .then(async (user) => {
                console.log(user.user.uid);
                if (user.user.emailVerified) {
                    const userRef = doc(db, "users", user.user.uid);
                    await updateDoc(userRef, {
                        emailVerified: true
                    })
                    resolve({ payload: user.user.uid });
                    const userRefGet = doc(db, "users", user.user.uid);
                    const userSnap = await getDoc(userRefGet);
                    console.log({ id: userSnap.id, ...userSnap.data() });
                    resolve({ id: userSnap.id, ...userSnap.data() });
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


export const googleLoginAPI = () => {
    const provider = new GoogleAuthProvider();
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                resolve({ payload: user })

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                reject({ payload: errorCode })
            });
    })
}

export const ForgetpasswordAPI = (data) => {
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then(() => {
                resolve({ payload: "Please Check Your email" });
            }).catch((error) => {
                const errorCode = error.code;

                if (error.code.localeCompare("auth/user-not-found") === 0)
                    reject({ payload: "user not found" })


                reject({ payload: error.code });
            })
    })
}


export const FacebookLoginAPI = () => {
    const provider = new FacebookAuthProvider();
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                resolve({ payload: user })
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                reject({ payload: errorCode })
                // ...
            });
    })
}

