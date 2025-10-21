import { useState } from "react";
import "./App.scss";
import Box from "./components/Box";

// 가위바위보 선택지 (객체)
const choice = {
    rock: {
        name: "Rock",
        img: "https://cdn-icons-png.flaticon.com/512/14465/14465453.png",
    },
    scissors: {
        name: "Scissors",
        img: "https://cdn-icons-png.flaticon.com/512/14465/14465437.png",
    },
    paper: {
        name: "Paper",
        img: "https://cdn-icons-png.flaticon.com/512/11468/11468613.png",
    },
};

function App() {
    // 상태
    const [userSelect, setUserSelect] = useState(choice.rock); // 유저 선택
    const [computerSelect, setComputerSelect] = useState(choice.rock); // 컴퓨터 선택
    const [userResult, setUserResult] = useState("유저결과"); // 유저 결과
    const [computerResult, setComputerResult] = useState("컴퓨터결과"); // 컴퓨터 결과
    const [userScore, setUserScore] = useState(0); // 유저 승리 횟수
    const [computerScore, setComputerScore] = useState(0); // 컴퓨터 승리 횟수

    // 랜덤 선택 함수
    const randomChoice = () => {
        let itemArray = Object.keys(choice); // ["rock", "scissors", "paper"]
        let randomItem = Math.floor(Math.random() * itemArray.length); // 0~2 중 랜덤
        return itemArray[randomItem]; // 랜덤 선택지 반환
    };

    // 승부 판정 함수
    const judgement = (user, computer) => {
        if (user.name === computer.name) {
            setUserResult("tie"); // 유저 무승부
            setComputerResult("tie"); // 컴퓨터 무승부
        } else if (
            (user.name === "Rock" && computer.name === "Scissors") || // 바위 > 가위
            (user.name === "Scissors" && computer.name === "Paper") || // 가위 > 보
            (user.name === "Paper" && computer.name === "Rock") // 보 > 바위
        ) {
            setUserResult("win");
            setComputerResult("lose");
            setUserScore((prev) => prev + 1); // 유저 승리 횟수 증가
        } else {
            setUserResult("lose");
            setComputerResult("win");
            setComputerScore((prev) => prev + 1); // 컴퓨터 승리 횟수 증가
        }
    };

    // 게임 실행 함수
    const play = (userChoice) => {
        setUserSelect(choice[userChoice]); // 유저 선택 저장

        let computerChoice = randomChoice();
        setComputerSelect(choice[computerChoice]); // 컴퓨터 선택 저장

        judgement(choice[userChoice], choice[computerChoice]); // 승부 판정
    };

    return (
        <div className="container">
            <div className="wrap score-wrap">
                <div className="score">Player: {userScore}</div>
                <div className="score">Computer: {computerScore}</div>
            </div>

            <div className="wrap result-wrap">
                <Box title="Player" item={userSelect} result={userResult} />
                <Box title="Computer" item={computerSelect} result={computerResult} />
            </div>

            <div className="wrap button-wrap">
                <button onClick={() => play("scissors")}>가위</button>
                <button onClick={() => play("rock")}>바위</button>
                <button onClick={() => play("paper")}>보</button>
            </div>
        </div>
    );
}

export default App;
