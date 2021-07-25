import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body.jsx";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta
                    name="description"
                    content="I am a student developer trying and learning new technolgies everyday! I love all tech!"
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
