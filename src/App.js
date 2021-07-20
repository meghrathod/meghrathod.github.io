import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body.jsx";
import Footer from "./components/Footer/Footer";
import {Helmet} from "react-helmet";

function App() {
    return (
        <div className="App">
            <div className="background"></div>
            <div className="background-image"></div>
            <Helmet>
                <meta
                    name="description"
                    content="I am a student developer trying and learning new technolgies everyday! I love all tech!"
                />
                <meta
                    property="og:description"
                    content="I am a student developer trying and learning new technolgies everyday! I love all tech!"
                />
                <meta property="og:title" content="Megh Rathod" />
                <meta property="og:image" content="./components/images/megh.png" />
            </Helmet>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
