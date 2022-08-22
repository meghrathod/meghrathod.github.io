import "./App.css";
import Body from "./components/Body/Body.jsx";
import Background from "./components/Body/Background";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Helmet } from "react-helmet";
import React from "react";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="description"
          content="Hey, I'm Megh Rathod, trying my hands at object oriented programming in Java, web development technologies, and also Machine Learning."
        />
      </Helmet>
      <Background />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
