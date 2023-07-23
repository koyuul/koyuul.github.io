import * as React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
import nasa from "../../Assets/Cards/nasa/nasa.json";
import cssi from "../../Assets/Cards/cssi/cssi.json";
import spaceLab from "../../Assets/Cards/spaceLab/spaceLab.json";
import cube3 from "../../Assets/Cards/cube3/cube3.json";


export default () => {

    return(
        <div id="experience">
            <div id="experience-content">
            <div id="experience-top-row" className="experience-row">
                <ExperienceCard experienceFile={cssi}/>
                <ExperienceCard experienceFile={cube3}/>
                
            </div>
            
            <div id="experience-timeline"/>
            
            <div id="experience-bottom-row" className="experience-row">
                <ExperienceCard experienceFile={spaceLab}/>
                <ExperienceCard experienceFile={nasa}/>
            </div>
            </div>
        </div>
    )
}