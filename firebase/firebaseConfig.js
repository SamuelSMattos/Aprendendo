import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Configura��o do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAa8Yr91OPnhhGE5Guid5VUnuGMuCG6Fx4",
  authDomain: "formatura-gabi.firebaseapp.com",
  projectId: "formatura-gabi",
  storageBucket: "formatura-gabi.appspot.com",
  messagingSenderId: "678771170333",
  appId: "1:678771170333:web:350796f435ab305c973af4",
  measurementId: "G-F8ZFS38LXG"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fun��o para registrar um novo usu�rio
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Fun��o para login de um usu�rio existente
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};