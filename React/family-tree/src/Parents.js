import React from "react";
import Family from "./Family";
import Brother from "./Brother";


function parents(props) {
  return (
    <div>
      <Family Dad={props.Dad} Mom={props.Mom} />
      <Brother Brother={props.Brother}/>
    </div>
  );
}

export default parents ;