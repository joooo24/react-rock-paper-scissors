import "./App.css";
import Box from "./components/Box";

function App() {
    return (
        <div className="container">
            <div className="main">
                <Box title="You" result="" />
                <Box title="Computer" result="" />
            </div>
            <div className="btn-wrap">
                <button>가위</button>
                <button>바위</button>
                <button>보</button>
            </div>
        </div>
    );
}

export default App;