import React from "react";

const Header = () => {
  return (
    <div>
      <div className="">
        <a href="#">
          <img src="./default_user.png" />
        </a>
      </div>
      <div className="header_button">
        <button className="btn btn-primary">Schedule</button>
        <button className="btn btn-primary">Social</button>
        <button className="btn btn-primary">Messages</button>
      </div>
      <div className="">
        <a href="#1">Name 1</a>
        <i></i>
        <a href="#2">Name 2</a>
      </div>
      <div className="notiication">
        <i></i>
      </div>
    </div>
  );
};

export default Header;
