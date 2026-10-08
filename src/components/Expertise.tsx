import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRobot, faGears } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Scikit-learn",
    "Google Document AI",
    "OCR",
    "Face Verification",
    "Anomaly Detection",
];

const labelsSecond = [
    "Gemini API",
    "RAG",
    "Multi-Agent Systems",
    "Hugging Face",
    "DistilBERT",
    "Qwen",
    "Mistral",
    "Gemma",
    "ElasticSearch",
];

const labelsThird = [
    "MLflow",
    "ONNX",
    "OpenVINO",
    "Quantization",
    "FastAPI",
    "Redis",
    "PostgreSQL",
    "Docker",
    "Git",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faEye} size="3x"/>
                    <h3>Computer Vision & Identity Verification</h3>
                    <p>I build production computer vision models for KYC: document authenticity, tampering detection, and face verification. At Shufti I raised end-to-end verification accuracy from 93% to 98% across thousands of document classes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>LLMs & Agentic AI</h3>
                    <p>I use LLMs, RAG, and multi-agent workflows to automate enterprise operations, from support chatbots and query routing to sales copilots and real-time voice agents.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGears} size="3x"/>
                    <h3>MLOps & Model Optimization</h3>
                    <p>I turn ML models into low-latency, cost-efficient services: quantization, ONNX and OpenVINO inference, and MLflow pipelines for tracking and versioning 90+ models in production.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
