import React from "react";

// import images
import html5 from "../resources/html5.png"
import css from "../resources/css.png"
import js from "../resources/js.png"
import react_img from "../resources/react.png"
import typescript from "../resources/typescript.png"
import bootstrap from "../resources/bootstrap.png"
import sass from "../resources/sass.png"
import redux from "../resources/redux.png"
import python from "../resources/python.png"
import command_line from "../resources/command.png"

import git_img from "../resources/git.png"
import github_img from "../resources/github.svg"
import figma from "../resources/figma.svg"
import firebase_img from "../resources/firebase.png"
import stackover from "../resources/stack.png"


export default function Skills() {
  return (
    <div id="Skills" className="Skills">
      <section id="skills" className="skills-section">
        <h1>skills & tools</h1>

        <div className="tech">
            <h2>Technologies</h2>
            
            <div className="tech-grid">
                <div className="tech-list">
                    <img src={html5} className="icon-upscale" alt="."/>
                    <p>html</p>
                </div>

                <div className="tech-list">
                    <img src={css} className="icon-upscale"/>
                    <p>css</p>
                </div>

                <div className="tech-list">
                    <img src={js} className="icon-upscale"/>
                    <p>javascript</p>
                </div>

                <div className="tech-list">
                    <img src={react_img} className="icon-upscale"/>
                    <p>react</p>
                </div>

                <div className="tech-list">
                    <img src={typescript} className="icon-upscale"/>
                    <p>typescript</p>
                </div>

                <div className="tech-list">
                    <img src={bootstrap} className="icon-upscale"/>
                    <p>bootstrap</p>
                </div>

                <div className="tech-list">
                    <img src={sass} className="icon-upscale"/>
                    <p>sass (scss)</p>
                </div>

                <div className="tech-list">
                    <img src={redux} className="icon-upscale"/>
                    <p>redux</p>
                </div>

                <div className="tech-list">
                    <img src={python} className="icon-upscale"/>
                    <p>python</p>
                </div>

                <div className="tech-list">
                    <img src={command_line}className="icon-upscale"/>
                    <p>command line</p>
                </div>
            </div>
        </div>

        <div className="tools">
            <h2>Tools</h2>
            
            <div className="tools-grid">
                <div className="tools-list">
                    <img src={git_img} className="icon-upscale"/>
                    <p>git</p>
                </div>

                <div className="tools-list">
                    <img src={github_img} className="icon-upscale"/>
                    <p>github</p>
                </div>

                <div className="tools-list"> 
                    <img src={figma} className="icon-upscale"/>
                    <p>figma</p>
                </div>

                <div className="tools-list">
                    <img src={firebase_img} className="icon-upscale"/>
                    <p>firebase</p>
                </div>

                <div className="tools-list">
                    <img src={stackover} className="icon-upscale"/>
                    <p>stack overflow</p>
                </div>
            </div>
        </div>

        <div className="working-on">
            <h2>what i'm studying right now:</h2>
            <div className="learning-grid">
                <div className="lg-grid">
                    <h3>Advanced Responsive Web Design</h3>
                    <p>I'm learning how to make webpages respond to different screen sizes by building a interactive photo gallery using CSS flexbox.</p>
                    <p className="date">started course: 2021</p>
                </div>

                <div className="lg-grid">
                    <h3>Scientific Computing with Python</h3>
                    <p>Learning Python's complex fundamental data structures, networking, relational databases, and data visualization.</p>
                    <p className="date">started course: 2023</p>
                </div>
            </div>
        </div>
        
    </section>
    </div>
  );
}
