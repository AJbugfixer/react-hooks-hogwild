import React from "react";
import Tile from "./Tile";

function Tiles({sortedHogs}){
    
    console.log(sortedHogs)

    return(
        <div>
            <div className="ui grid container">
                {sortedHogs.map((hog) =>(
                    <Tile
                    key={hog.name}
                    name={hog.name}
                    src={hog.name}
                    alt={hog.name}
                    specialty={hog.name}
                    greased={hog.name}
                    weight={hog.name}
                    medal={hog["highest medal achieved"]}
                    />
                ))}
            </div>
        </div>
    )
}

export default Tiles