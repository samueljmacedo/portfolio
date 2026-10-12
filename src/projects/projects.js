
import "./projects.css";

const projects = [
    {
        id: 1,
        title: "Government Procurement Platform",
        description:
            "A full-stack procurement platform built with Java and React, designed to streamline government bidding and purchasing processes. It brought structure, transparency, and efficiency to a complex workflow where every detail matters.",
        contribution:
            "Designed the architecture, developed the frontend and backend, and implemented authentication and CI/CD.",
        technologies: ["React", "Java"],
        image: "/images/project-dashboard.png",
        liveUrl: "",
        githubUrl: "",
    },
    {
        id: 2,
        title: "Refinery Damage Dashboard",
        description:
            "A lightweight data dashboard built with NestJS, TypeScript, and React, aggregating information about damage across refinery pipelines. It turned scattered inspection data into a clear, centralized view for faster analysis and decision-making.",
        contribution:
            "Built the application from scratch, including data visualisation, responsive UI, and data persistence.",
        technologies: ["React", "TypeScript", "NestJS"],
        image: "/images/finance-tracker.png",
        liveUrl: "",
        githubUrl: "",
    },
    {
        id: 3,
        title: "3D Construction & Point Cloud Analysis",
        description:
            "A 3D visualization platform built with Java, Angular, and Three.js, allowing users to upload construction models and point-cloud data and compare planned structures with real-world measurements. It made the gap between what was designed and what was built visible at a glance.",
        contribution:
            "Created the CLI architecture, implemented commands, and wrote documentation and tests.",
        technologies: ["Java", "TypeScript", "Angular", "ThreeJS"],
        image: "/images/cli-tool.png",
        liveUrl: "",
        githubUrl: "",
    },
    {
        id: 4,
        title: "Water Access & Cistern Management",
        description:
            "A government platform built with Java, React, and TypeScript to help communities in vulnerable and remote areas gain access to clean water. The system supported the planning and management of cistern construction in villages and schools, turning technology into a practical tool for making an essential resource more accessible.",
        contribution:
            "Created the CLI architecture, implemented commands, and wrote documentation and tests.",
        technologies: ["Java", "ReactJS", "Typescript"],
        image: "/images/cli-tool.png",
        liveUrl: "",
        githubUrl: "",
    },
];

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="project-tags">
                    {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                {/*<div className="project-contribution">
                    <h4>My contribution</h4>
                    <p>{project.contribution}</p>
                </div>

                <div className="project-links">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link secondary"
                        >
                            GitHub ↗
                        </a>
                    )}
                </div>*/}
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section className="featured-projects" id="projects">
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}