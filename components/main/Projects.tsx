import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-7 px-12">
            <ProjectCard
                    src="/200.png"
                    title="Ultimate Netflix UI Clone"
                    description="In just 7 days, I've created a fully functional UI akin to Netflix, showcasing dedication and commitment.
                    This project marks a pivotal milestone, refining my UI/UX skills and imparting invaluable lessons. [ TOOLS: FIGMA, PHOTOSHOP ]"

                    link=""
                />
                <ProjectCard
                    src="/300.png"
                    title="PVR Movie Ticket Booking Website"
                    description="In just 15 days, I've honed my craft with a remarkable UI and UX in my second major project. Through innovative tweaks, I've achieved mastery in UI/UX design, marking significant progress in my skills. [ TOOLS: FIGMA, PHOTOSHOP ]"
                    link=""
                />
            </div>
            <br></br>
            <div className="h-full w-full flex flex-col md:flex-row gap-7 px-12">
            <ProjectCard
                    src="/400.png"
                    title="Shop Mart"
                    description="
                    The eCommerce UI project bolstered my understanding of UI/UX, yielding a sleek app for exceptional user experience. It underscores my commitment to honing essential design skills within the UI/UX domain. [ TOOLS: FIGMA, PHOTOSHOP ]"
                    link=""
                />
                <ProjectCard
                    src="/500.png"
                    title="Music App"
                    description="Implemented a meticulously crafted UI with user-centric interfaces and UX, culminating in the development of a stunningly designed Music app that exemplifies excellence in both aesthetics and functionality. [ TOOLS: FIGMA, PHOTOSHOP ]"
                    link=""
                />
            </div>
            <br></br>
            <div className="h-full w-full flex flex-col md:flex-row gap-7 px-12">
            <ProjectCard
                    src="/600.png"
                    title="VR/AI Police Game"
                    description="
                    As a UI/UX designer, I played a pivotal role in the Rajasthan Police hackathon 1.0 (2024), excelling in UI design, game design, website UI, presentations, and logos, contributing significantly to our team's victory. [ TOOLS: FIGMA, PHOTOSHOP ]"
                    link=""
                />
            <ProjectCard
                    src="/700.png"
                    title="Chess Game"
                    description="
                    For my minor project, I crafted my inaugural game, boasting a visually captivating UI and immersive user interactions that elevate the gaming experience to new heights of engagement and aesthetic appeal. [ TOOLS: FIGMA, PHOTOSHOP ]"
                    link=""
                />
            </div>
        </div>
    );
};

export default Projects;