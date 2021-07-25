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
                <meta
                    property="og:description"
                    content="I am a student developer trying and learning new technolgies everyday! I love all tech!"
                />

                <meta property="og:title" content="Megh Rathod" />
                <meta
                    property="og:image"
                    content="https://pbs.twimg.com/profile_images/1362374551548563463/-NFBY4tq_400x400.jpg"
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
