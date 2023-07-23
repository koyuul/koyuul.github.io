import * as React from "react";
import { Scrollbar } from 'react-scrollbars-custom';
import ProjectCard from "./ProjectCard";
import ttdsjsu from "../../Assets/Cards/ttdsjsu/ttdsjsuCard.json";
import typetester from "../../Assets/Cards/typeTester/typetesterCard.json";
import streetkombat from "../../Assets/Cards/streetKombat/streetKombatCard.json";
import projectJAVELIN from "../../Assets/Cards/projectJAVELIN/projectJAVELIN.json";
import JAVELINGroundStation from "../../Assets/Cards/JAVELINGroundStation/JAVELINGroundStation.json";
import twitterpercent from "../../Assets/Cards/2021percent/2021percent.json";

export default() => {
    return (
        <div id="projects">
            <Scrollbar style={ {width: 'auto', height: '80vh'} }>
                <div className="row">
                    <ProjectCard key={projectJAVELIN.title} projectFile={projectJAVELIN}/>
                    <ProjectCard key={JAVELINGroundStation.title} projectFile={JAVELINGroundStation}/>
                </div>
                <div className="row">
                    <ProjectCard key={ttdsjsu.title} projectFile={ttdsjsu}/>
                    <ProjectCard key={typetester.title} projectFile={typetester}/>
                </div>
                <div className="row">
                    <ProjectCard key={streetkombat.title} projectFile={streetkombat}/>
                    <ProjectCard key={twitterpercent.title} projectFile={twitterpercent}/>
                </div>
            </Scrollbar>
        </div>
    )
}