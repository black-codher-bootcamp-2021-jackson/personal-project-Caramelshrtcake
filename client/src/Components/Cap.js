import React from "react";

// .Cap {
//     background:
// conic-gradient(
//   #4e79a7 0,
//   #4e79a7 25%,
//   transparent 0,
//   transparent 100%

//     );

function Cap() {
  const capacity = Math.round(Math.random() * 100);
  const background = `
   conic-gradient(
       #4e79a7 0,
       #4e79a7 ${capacity}%,
       transparent 0,
       transparent 100%)`;

  return <div className="Cap" style={{background}}>{capacity}%</div>;
}
export default Cap;
