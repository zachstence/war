import React from "react";
import Card from "../Card/Card";

const Table: React.FC = () => {
    return (
        <div className="table">
            <div className="player">
                <Card />
            </div>
            <div className="player"></div>
        </div>
    )
};

export default Table;