// APP FUNCTION OF FIREBASE
import {initializeApp} from "firebase/app";
import SHOP_DATA from "../../shop_data";

// FUNCTIONS OF AUTHENTICATION IN FIREBASE
import {
    getAuth , 
    signInWithRedirect , 
    signInWithPopup , 
    GoogleAuthProvider , 
    createUserWithEmailAndPassword , 
    signInWithEmailAndPassword,
    signOut,
    FacebookAuthProvider,
    onAuthStateChanged
} from "firebase/auth";

import {
    getFirestore,
    doc ,
    getDoc , 
    setDoc, 
    serverTimestamp,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';

//  ID OF YOUR DATABASE PROVIDED BY FIREBASE 
const firebaseConfig = {
    apiKey: "AIzaSyApjefiMZp4jPEzjnn3KW4wRY0Dtj-IuY0",
    authDomain: "crwn-clothing-db-cbdc2.firebaseapp.com",
    projectId: "crwn-clothing-db-cbdc2",
    storageBucket: "crwn-clothing-db-cbdc2.appspot.com",
    messagingSenderId: "210281311062",
    appId: "1:210281311062:web:2efc8cfcc754e8cc5f04f7"
};

const firebaseApp = initializeApp(firebaseConfig);// this function allow firebase FOR DOING CRUD OPERATIONS

// AUTH METhODS PROVIDER (PROVIDED BY GOOGLE)
const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

// FOR SELECTING GOOGLE OR EMAIL ACCOUNT IN POPUP..
googleProvider.setCustomParameters({
    prompt : "select_account",
});

// AUTH METHODS (ALL FUNCTIONS OF AUTH ARE INSIDE IT.)
export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth , googleProvider);


// CREATING DATABASE
export const db = getFirestore();
 
// FOR INSERTING WHOLE DATA OF SITE INTO DATABASE(FIREBASE)
export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) =>{
    // FOR CREATING COLLECTION
    const collectionRef = collection(db , collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=>{
        // FOR CREATING DOCUMENT
        const docRef = doc(collectionRef , object.title.toLowerCase());
        // FOR INSERTING DATA INTO DOCUMENT
        batch.set(docRef , object);
    });
    // FOR SAVING 
    await batch.commit();
    console.log("Done");
};

export const getCategoriesAndDocuments = async () =>{
    const collectionRef = collection(db , "categories");
    console.log(collectionRef);
    // const q = query(collectionRef);
    // console.log(q);
    // const querySnapShot = await getDocs(q);

    // IT STORES DATA INTO AN ARRAY BUT IN ENCRYPTED FORM
    const querySnapShot = await getDocs(collectionRef);
    console.log(querySnapShot.docs);
    const categoryMap = querySnapShot.docs.reduce((acc , docSnapshot)=>{
        // data() converts encrypted data into actual data [i.e. cl = {...}]
        console.log(docSnapshot.data());
        console.log(acc);
        const {title , items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    } , {});
    return categoryMap;
};

// CREATING DOCUMENT AND DATA INSIDE DOCUMENT
export const createUserDocumentFromAuth = async (userAuth , aditionalInformation={})=>{  
    //CREATING DOCUMENT  
    const userDocRef = doc(db , "users" , userAuth.uid);
    console.log(userDocRef); // CREATING DOCUMENT

    // DATA OF DOCUMENT
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot); //DATA OF DOCUMENT
    console.log(userSnapshot.exists()); // FOR CHECKING THE EXISTANCE OF DATA

    if(!userSnapshot.exists()){
        const { displayName , email} = userAuth;
        const createdAt = new Date();

        try{
            // SETDOC IS USE FOR CREATING THE FIELDS
            await setDoc(userDocRef , {
                displayName : `${aditionalInformation.displayName}`,
                email, 
                createdAt,
                password : `${aditionalInformation.Password}`
            });
        }catch(error){
            console.log("Invalid....");
        };    
    };
    return userDocRef;
};

// THIS FUNCTION GIVES THE USER OBJECT AFTER CHECKING THE DETAILS (WHILE SIGN UP OR REGISTRATION)
export const createAuthUserWithEmailAndPassword = async (email , password)=>{
    if(!email || !password) return;

   return await createUserWithEmailAndPassword(auth , email , password);
};

// THIS FUNCTION GIVES THE USER OBJECT AFTER CHECKING THE DETAILS (WHILE SIGN IN)
export const signAuthUserWithEmailAndPassword = async (email , password)=>{
    if(!email || !password) return;

   return await signInWithEmailAndPassword(auth , email , password);

};

export const SignOutUser = async ()=> await signOut(auth); 