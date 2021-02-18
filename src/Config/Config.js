import firebase from 'firebase';

 var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCmx0Qvl2CsTjGkL8rVTkGxk5KOkISQVFc",
    authDomain: "taxvisor-project.firebaseapp.com",
    databaseURL: "https://taxvisor-project.firebaseio.com",
    projectId: "taxvisor-project",
    storageBucket: "taxvisor-project.appspot.com",
    messagingSenderId: "1066617282650",
    appId: "1:1066617282650:web:363ed3f5e7e14e02617863",
    measurementId: "G-M4WL4LE14J"
};
const fire = firebase.initializeApp(config);
export default  fire