import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body.jsx";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGXkcQdRuckVgQS-mcPyqKdyEhI7ZcFtk",
  authDomain: "react-portfolio-6e83b.firebaseapp.com",
  projectId: "react-portfolio-6e83b",
  storageBucket: "react-portfolio-6e83b.appspot.com",
  messagingSenderId: "298834424791",
  appId: "1:298834424791:web:0d21aa95ec029333cdd192",
  measurementId: "G-2DN6G39EE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta
                    name="description"
                    content="Hey, I'm Megh Rathod, trying my hands at object oriented programming in Java, web development technologies, and also Machine Learning."
                />
            </Helmet>
            <div className="background"></div>
            <div className="background-image"></div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
