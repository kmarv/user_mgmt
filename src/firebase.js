import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe0RQtgPHmWnRfHbpfRzLYyd_QdMCLKkg",
  authDomain: "testapp-49687.firebaseapp.com",
  projectId: "testapp-49687",
  storageBucket: "testapp-49687.appspot.com",
  messagingSenderId: "717709061021",
  appId: "1:717709061021:web:bb43de34b2b64dd9705d74",
  measurementId: "G-MRKXBJY85Z",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
