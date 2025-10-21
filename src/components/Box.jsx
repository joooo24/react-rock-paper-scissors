import React from "react";

const Box = ({ title, item, result }) => {
    return (
        <div className={`box ${result}`}>
            <h1>{title}</h1>
            <h2>{item?.name}</h2>
            {item?.img && <img className="item-img" src={item.img} alt={item.name} />}
            <h2>{result || "결과"}</h2>
        </div>
    );
};

export default Box;
