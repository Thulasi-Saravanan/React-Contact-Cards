import LikeCard from "./components/LikeCard";
import "./App.css";

function App() {

    return (
        <div className="app">

            <h1>React Like Card</h1>

            <LikeCard title="React Development" />

            <LikeCard title="Web Development" />

            <LikeCard title="JavaScript" />

        </div>
    );
}

export default App;