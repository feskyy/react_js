import React from "react";

function Button(props) {
    return (
        <button className="my-button">
            {props.text}
        </button>
    );
}

export default Button;