
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORGE_BOKIT,
  messagingSenderId: import.meta.env.VITE_MESSAGE_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// apiKey: "AIzaSyAP9EIeMzXSSj_282mzFhgmCj26WZlchV0",
// authDomain: "techelectrohub-a5a23.firebaseapp.com",
// projectId: "techelectrohub-a5a23",
// storageBucket: "techelectrohub-a5a23.appspot.com",
// messagingSenderId: "243078617321",
// appId: "1:243078617321:web:5203d0ff0fad11a577b878"