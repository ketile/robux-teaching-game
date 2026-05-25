// Dette er konfigurasjonsfilen for Firebase.
// Siden vi bygger med Vanilla JS for lokal testing, kommenterer vi ut import inntil videre.
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Bytt ut dette med konfigurasjonen fra ditt eget Firebase-prosjekt
const firebaseConfig = {
    apiKey: "DIN_API_KEY",
    authDomain: "ditt-prosjekt.firebaseapp.com",
    projectId: "ditt-prosjekt",
    storageBucket: "ditt-prosjekt.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};

// Initialiser Firebase (Kommentert ut inntil du har lagt inn riktig config)
/*
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, doc, getDoc, setDoc, updateDoc };
*/

// Siden vi ikke har satt opp Firebase enda, gjør vi en mock-database tilgjengelig globalt
// for at spillet skal fungere lokalt med en gang (bruker localStorage).
window.mockDb = {
    async getProfile(username) {
        const data = localStorage.getItem("profile_" + username);
        return data ? JSON.parse(data) : null;
    },
    async saveProfile(username, data) {
        localStorage.setItem("profile_" + username, JSON.stringify(data));
    }
};
