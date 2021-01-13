import React, { useState } from 'react';

const Legend = ({LegendItems}) =>{
    console.log(LegendItems);
    return (
        <div id="strechi" style={{
            display: "flex",
            alignItem: "strech"
        }}
        >
            {LegendItems.map((item) => (
                <div
                    key={item.title}
                    style={{
                        backgroundColor:item.color,
                        flex:1,
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        color: item.textColor,
                        height:"10vh",
                        fontWeight:"bolder",
                        fontSize:"1.5em"
                     }}
                    >
                        <span>{item.title}</span>
                </div>
                   ))}

        </div>
    );

}
export default Legend;