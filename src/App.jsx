import "./App.scss";
import Box from "./components/Box";

function App() {
    return (
        <div className="container">
            <div className="wrap">
                <Box title="You" result="" />
                <Box title="Computer" result="" />
            </div>
            <div className="wrap">
                <button>가위</button>
                <button>바위</button>
                <button>보</button>
            </div>
        </div>
    );
}

export default App;