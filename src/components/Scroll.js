import React from "react";

const Scroll = (props) =>{
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            return props.children
        </div>
        );
};

export default Scroll;