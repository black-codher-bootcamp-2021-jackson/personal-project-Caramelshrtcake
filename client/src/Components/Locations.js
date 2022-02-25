import React, { useEffect, useState } from "react";
import { getLocations } from "../services/locationsService";

function Locations({ user }) {
  console.log(user);
  const [locations, setLocations] = useState([]);
  // const [showDemo, setShowDemo] = useState(false);
  useEffect(() => {
    // getDemo returns a promise and once that's resolved; we want to pass it into setLocations to update the state
    // then(data => setLocations(data))
    //   when it loads gens a random capacity
    if (locations.length === 0) {
      getLocations().then((data) => {
       const newLocations = data.map((item) => {
          const capacity = Math.round(Math.random() * 100);
          item.capacity = capacity;
         if(capacity > 70){ item.type = 'busy time'} else if(capacity < 50) {item.type = 'quiet time'} else {item.type = "don't mind"}
         return item
        
        });
        setLocations(newLocations);
      });
    }
  }, [locations]);
  /* check both exsits set to true then show demo */
  
  return (
    <>
      <h4> Locations</h4>
      {locations &&
        locations.map((item) => {
          if(user.userPrefrences.startsWith(item.type)){

          
          return (
            <>
              <p> {item.city}</p>
              <p>{item.town}</p>
              <p>{item.capacity}%</p>
            </>
          );}
        })}
    </>
  );
}

export default Locations;
