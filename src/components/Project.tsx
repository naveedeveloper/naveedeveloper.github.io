import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Project.scss';

type ProjectItem = {
    title: string;
    description: string;
    tech: string[];
    // Optional: add a live/GitHub URL and an imported screenshot to show them on the card
    link?: string;
    image?: string;
};

const projects: ProjectItem[] = [
    {
        title: "AI-Powered Sales Automation Platform",
        description: "Multi-agent workflows that take over post-meeting sales work: agents read meeting transcripts, answer open prospect questions through the company's RAG endpoint, send personalised follow-up emails, and flag missed follow-ups. Integrated with HubSpot and Google Calendar and used daily by 6 account executives.",
        tech: ["Gemini API", "Multi-Agent", "RAG", "HubSpot", "Google Calendar"],
    },
    {
        title: "AI Sales Copilot",
        description: "Real-time copilot that listens to sales calls and gives account executives 3–5 bullet-point answers to business questions as they come up. Built as a low-latency voice-to-answer pipeline, with a Manifest V3 browser extension and a desktop app that stays hidden from screen sharing.",
        tech: ["Sonic STT", "Gemini API", "RAG", "Chrome Extension", "Tkinter"],
    },
    {
        title: "Otto's Office – AI Voice Agent",
        description: "End-to-end real-time voice agent with a 3D avatar and synchronised lip movement, grounded in a business knowledge base. Responds in 1–2 seconds end to end.",
        tech: ["Gemini Real-Time API", "Wav2ARKit", "FastAPI", "Prompt Engineering"],
    },
    {
        title: "Optimized KYC Verification Solution",
        description: "Retrained and quantised KYC computer vision models to fit a strict 5 GB size limit for on-premises deployment, with OCR and information extraction in a modular inference pipeline optimised for CPU.",
        tech: ["Computer Vision", "OpenVINO", "Quantization", "FastAPI", "Docker"],
    },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {projects.map((project) => (
                <div className="project" key={project.title}>
                    {project.image && (
                        project.link
                            ? <a href={project.link} target="_blank" rel="noreferrer"><img src={project.image} className="zoom" alt={project.title} width="100%"/></a>
                            : <img src={project.image} className="zoom" alt={project.title} width="100%"/>
                    )}
                    {project.link
                        ? <a href={project.link} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
                        : <h2>{project.title}</h2>}
                    <p>{project.description}</p>
                    <div className="flex-chips">
                        {project.tech.map((label) => (
                            <Chip key={label} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
