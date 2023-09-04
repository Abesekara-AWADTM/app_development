import React from "react";

import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  /* props.children will be content between your customized  component*/

  return <div className={classes}>{props.children}</div>;
}

export default Card;
