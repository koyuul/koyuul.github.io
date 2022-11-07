import * as React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import ttdsjsu from "../../Assets/Cards/ttdsjsu/ttdsjsuCard.json";
import typetester from "../../Assets/Cards/typeTester/typetesterCard.json";
import streetkombat from "../../Assets/Cards/streetKombat/streetKombatCard.json";
import twitterpercent from "../../Assets/Cards/2021percent/2021percent.json";

export default() => {
    return (
        <div id="projects">
            <div className="row">
                <ProjectCard key={ttdsjsu.title} projectFile={ttdsjsu}/>
                <ProjectCard key={typetester.title} projectFile={typetester}/>
            </div>
            <div className="row">
                <ProjectCard key={streetkombat.title} projectFile={streetkombat}/>
                <ProjectCard key={twitterpercent.title} projectFile={twitterpercent}/>
            </div>
        </div>
    )
}