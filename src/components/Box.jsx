import React from "react";

const Box = ({ title, item, result }) => {
    return (
        <div className={`box ${result}`}>
            <h1>{title}</h1>
            <h2>{item?.name}</h2>
            <img className="item-img" src={item?.img} alt="img"></img>
            <h2>{result}</h2>
        </div>
    );
};

export default Box;