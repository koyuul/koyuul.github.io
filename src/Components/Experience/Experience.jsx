import * as React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
import napaLearns from "../../Assets/Cards/napaLearns/napaLearns.json";
import cssi from "../../Assets/Cards/cssi/cssi.json";
import spaceLab from "../../Assets/Cards/spaceLab/spaceLab.json";
import cube3 from "../../Assets/Cards/cube3/cube3.json";


export default () => {

    return(
        <div id="experience">
            <div id="experience-content">
            <div id="experience-top-row" className="experience-row">
                <ExperienceCard experienceFile={napaLearns}/>
                <ExperienceCard experienceFile={spaceLab}/>
                
            </div>
            
            <div id="experience-timeline"/>
            
            <div id="experience-bottom-row" className="experience-row">
                <ExperienceCard experienceFile={cssi}/>
                <ExperienceCard experienceFile={cube3}/>
            </div>
            </div>
        </div>
    )
}