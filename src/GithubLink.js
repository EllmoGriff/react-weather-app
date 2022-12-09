import React from "react";
import "./GithubLink.css";

export default function GithubLink() {
  return (
    <div className="sourceCode">
      <p>
        <a
          href="https://github.com/EllmoGriff/react-weather-app.git"
          target="_blank"
          className="git"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Elle Griffiths
      </p>
    </div>
  );
}
