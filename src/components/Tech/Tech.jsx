import "./Tech.css"; 
import techData from "../../data/techData.json"; // import the tech data from json file
import React from "react"; // Import React library

const Tech = () => {
    return (
        <div className="Tech_Container">
            <div className="Tech_Container_Title">{techData.title}</div>
            <div className="Tech_Container_Desc">{techData.description}</div>
        </div>
    )
}
export default Tech;