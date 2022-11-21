import * as React from "react";

function ExperienceCard(props){
    let experience = props.experienceFile;
    let categoryElements = [];
    for (let category of experience.categories){
        let element =
        <div className="experience-category" key={experience.title + "_" + category}>
            {category}
        </div>
        categoryElements.push(element);
    }

    return(
        <div className="experience-card">
            <svg className="experience-bullet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg>
            
            <div className="experience-description">
                <div className="experience-header">
                    <h4 className="experience-title">{experience.title}</h4>
                    <h4 className="experience-dates">[{experience.date_start} - {experience.date_end}]</h4>
                </div>
                <h6 className="experience-subtitle">
                    {experience.company}
                </h6>

                <p className="experience-paragraph">{experience.description}</p>

                <span>{categoryElements}</span>
            </div>

        </div>
    );
};

export default ExperienceCard;