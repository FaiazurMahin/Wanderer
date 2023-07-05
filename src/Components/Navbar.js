import { Component } from "react";
import "./Navbarstyles.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbarlogo">Wanderer</h1>

        <div classname="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "Nav-menu active" : "Nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          {/* <button="hover">Sign up</button> */}
          <button class="hover">Sign up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
