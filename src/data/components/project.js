import React from "react"
import { ReactDOM } from "react";

export default function Project(props) {
  return (
    <div className="pj-grid">
        <div className="project-img">
          <img src={props.img} alt="." />
        </div>

        <div className="project-info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <h6>{props.builtWith}</h6>

                <div className="button-section">
                    <a href={props.links.liveApp} target="_blank">
                    <button>Live App</button></a>
                    <a href={props.links.repo}  target="_blank">
                    <button>View Code</button></a>
                </div>
        </div>
    </div>
  );
}
