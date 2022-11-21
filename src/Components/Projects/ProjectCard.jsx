import * as React from "react";
import "./ProjectCard.css"

function ProjectCard({projectFile}){
    let project = projectFile; //title: string; description: string; categories: string[]; links: {}; 
    let categoryElements  =[];
    for (let category of project.categories){
        let element = 
        <div className ="project-category" key={projectFile.title + "_" + category}>
            {category}
        </div>
        categoryElements.push(element);
    }
    
    return (
        <div className="project-card">
            <div className="project-content">
                <div className="project-thumbnail-container">
                    <img className="project-gif" src={project.links["gif"]}/>
                    <img className="project-thumbnail" src={project.links["thumb"]} alt={project.title} />
                </div>
                <div className="project-description">
                    <a className="project-anchor" target="_blank" href={project.links["site"]}>
                        <h4 className="project-title">
                            {project.title}
                            <span className="project-link">
                                <svg className="project-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                            </span>
                        </h4>
                    </a>

                    <p>{project.description}</p>
                    <span>{categoryElements}</span>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard;