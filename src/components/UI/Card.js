import "./Card.css";

//This is how to make a "wrapper" component
//Value of children prop will always be the content between the opening and closing tags of component
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
