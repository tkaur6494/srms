// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// import { firebaseConfig } from '../constants/defaultValues';

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const database = firebase.database();

// export { auth, database };

import { baseURL } from '../constants/defaultValues';
import axios from 'axios';

const auth = {signInWithEmailAndPassword:function(username, password) {
    return axios.post(`${baseURL}/authenticate`, {
        username: username,
        password: password
    });
}};

const database=function(){}

export { auth, database };