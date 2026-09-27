
import "./projects.css";

const projects = [
    {
        id: 1,
        title: "Project Management Dashboard",
        category: "Professional",
        description:
            "A full-stack application to help teams manage tasks, track progress, and collaborate more effectively.",
        contribution:
            "Designed the architecture, developed the frontend and backend, and implemented authentication and CI/CD.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        image: "/images/project-dashboard.png",
        liveUrl: "",
        githubUrl: "",
    },
    {
        id: 2,
        title: "Personal Finance Tracker",
        category: "Personal",
        description:
            "A web application that helps users visualise spending, manage budgets, and understand their financial habits.",
        contribution:
            "Built the application from scratch, including data visualisation, responsive UI, and data persistence.",
        technologies: ["React", "TypeScript", "Firebase"],
        image: "/images/finance-tracker.png",
        liveUrl: "",
        githubUrl: "",
    },
    {
        id: 3,
        title: "Developer CLI Tool",
        category: "Open Source",
        description:
            "A command-line tool designed to automate repetitive development tasks and improve developer productivity.",
        contribution:
            "Created the CLI architecture, implemented commands, and wrote documentation and tests.",
        technologies: ["Node.js", "TypeScript", "Jest"],
        image: "/images/cli-tool.png",
        liveUrl: "",
        githubUrl: "",
    },
];

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-image">
                <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                />
            </div>

            <div className="project-content">
        <span className="project-category">
          {project.category}
        </span>

                <h3>{project.title}</h3>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="project-tags">
                    {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                <div className="project-contribution">
                    <h4>My contribution</h4>
                    <p>{project.contribution}</p>
                </div>

                <div className="project-links">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link primary"
                        >
                            Live demo ↗
                        </a>
                    )}

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
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section className="featured-projects" id="projects">
            {/*<div className="projects-header">
            <span className="section-eyebrow">
              WHAT I'VE BUILT
            </span>

                <h2>Featured projects</h2>

                <p>
                    A selection of projects that showcase my
                    engineering experience, problem-solving
                    approach, and passion for building useful software.
                </p>
            </div>*/}

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