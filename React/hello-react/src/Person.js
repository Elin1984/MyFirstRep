import React from "react";
import FullName from "./FullName";
import Age from "./Age";
import Job from "./Job";

function Person(props) {
  return (
    <div>
      <FullName firstName={props.firstName} lastName={props.lastName} />
      <Age number={props.age} />
      <Job job={props.job} />
    </div>
  );
}

export default Person;
