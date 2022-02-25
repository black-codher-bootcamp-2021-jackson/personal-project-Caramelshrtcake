import React, { useEffect, useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { getDemonstrations } from "../services/demonstrationsService";

function Demonstrations(){
    const [demonstrations, setDemonstrations] = useState([]);
    // const [showDemo, setShowDemo] = useState(false);
    useEffect(() => {
        // getDemo returns a promise and once that's resolved; we want to pass it into setDemonstrations to update the state
      // then(data => setDemonstrations(data))
      if (demonstrations.length === 0) {
        getDemonstrations().then(setDemonstrations);
      }
    },[demonstrations]);
  /* check both exsits set to true then show demo */
    return(
             <div className="demos">
             <h4> Demonstrations</h4>
         {(demonstrations) &&
        demonstrations.map((item) => <YoutubeEmbed youtubeUrl={item.uri} />)}
 </div>

    )
}

export default Demonstrations;