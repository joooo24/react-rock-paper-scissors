import React from "react";

const Box = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props?.item?.img && (
                <img className="item-img" src={props?.item?.img} alt={props.title} />
            )}
            <h2>{props.result}</h2>
        </div>
    );
};

export default Box;
