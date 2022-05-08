import React from "react";
import me from "./images/me_flip.png";
import "./styles/header.css";

export default function header() {
  return (
    <div class="header">
      <img class="head-logo" alt="profile" src={me} width="50" height="50" />
      <nav class="head-nav">
        <a class="active" href="index.html">
          Home
        </a>
        <a href="project.html">Projects</a>
        <a href="aboutme.html">About me</a>
      </nav>
    </div>
  );
}
