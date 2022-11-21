import * as React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import { Routes, Route, useLocation, useNavigate, redirect } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";

function App(){
    const location = useLocation();
    const navigate = useNavigate();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");
    useEffect(() => {
        if (location.search.includes("?modal")) return navigate("/projects");
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location, displayLocation])

    

    return(
        <>
            <Header/>
            <div
                id="fadeDiv"
                className={`${transitionStage}`}
                onAnimationEnd={() => {
                    if (transitionStage == "fadeOut"){
                        setTransitionStage("fadeIn");
                        setDisplayLocation(location);
                    }
                }}
            >
                <Routes location={displayLocation}>
                    <Route path="/">
                        <Route index element={<About/>} exact/>
                    </Route>
                    <Route path="/projects" element={<Projects/>} exact/>
                    <Route path="/experience" element={<Experience/>} exact/>
                </Routes>
            </div>
        </>
    )
}

export default App;
