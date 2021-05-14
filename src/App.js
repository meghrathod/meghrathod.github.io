import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body.jsx";
import Footer from "./components/Footer/Footer";
import Helmet from "helmet";

function App() {
    return (
        <div className="App">
            <div className="background"></div>
            <Helmet>
                <meta
                    name="description"
                    content="Megh Rathod is a student developer working towards becoming a great developer and give the world something amazing!"
                />
            </Helmet>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
