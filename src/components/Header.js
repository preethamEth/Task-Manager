// import PropTypes from "prop-types";
import Button from "./Button";
const Header = (props) => {
  return (
    <div>
      <header className="header">
        <h1>{props.title}</h1>
        <Button
          onClick={props.onAdd}
          color={props.showAdd ? "red" : "green"}
          text={props.showAdd ? "close" : "Add"}
        />
      </header>
    </div>
  );
};

export default Header;
