import  {initializeApp} from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCOS43W9JhXJDhYKOfAEwC1k_kGEiKtY6Y",
  authDomain: "pyforschool-35937.firebaseapp.com",
  databaseURL: "https://pyforschool-35937-default-rtdb.firebaseio.com",
  projectId: "pyforschool-35937",
  storageBucket: "pyforschool-35937.appspot.com", 
  messagingSenderId: "428605642363",
  appId: "1:428605642363:web:7507f1a47c57d7fbf4f4de"
}; 
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);

  export {database, auth  }

