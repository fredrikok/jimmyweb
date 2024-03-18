import React from "react";
import { Container, Grid, Menu } from "semantic-ui-react";
import logo from "../../src/logo/logo-Color.svg";

const NavbarMenuItems = [
  { key: "1", name: "link-1", content: "Link 1" },
  { key: "2", name: "link-2", content: "Link 2" },
  { key: "3", name: "link-3", content: "Link 3" },
];

const Navbar = () => {
  return (
    <div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <a class="toc item">
          <i class="sidebar icon"></i>
        </a>
        <a class="active item">Home</a>
        <a class="item">Work</a>
        <a class="item">Company</a>
        <a class="item">Careers</a>
        <div class="right item">
          <a class="ui inverted button">Log in</a>
          <a class="ui inverted button">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
