import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <li>
        <Link to={"/add"}>Home</Link>
      </li>
      <li>
        <Link to={"/update"}>Products</Link>
      </li>
      <li>
        <Link to={"/logout"}>Logout</Link>
      </li>
      <li>
        <Link to={"/profile"}>Profile</Link>
      </li>
      <li>
        <Link to={"/signup"}>Signup</Link>
      </li>
    </div>
  );
}

export default Nav;
