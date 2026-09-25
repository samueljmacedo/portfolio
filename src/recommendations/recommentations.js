
import { useState } from "react";
import "./recommendationsCarousel.css"
import chevron_left from "../images/chevron_left.svg"
import chevron_right from "../images/chevron_right.svg"
//import "./RecommendationsCarousel.css";

const recommendations = [
    {
        name: "Luciana Barbosa",
        relationship: "Product Owner",
        company: "Synergia",
        text: "It was great working with Samuel! Beyond being an excellent professional with an incredible knack for solving complex problems, he is a fantastic team player—always willing to help and share knowledge. It was a pleasure sharing projects and challenges with you. I’m rooting for your success and recommend you without hesitation!",
        initials: "LB",
    },
    {
        name: "Renata Japur",
        relationship: "Product Owner",
        company: "Synergia",
        text: "I had the opportunity to work with Samuel on multiple projects and observe his performance as a key technical leader within the team. On a particularly complex project—where I served as Product Manager and he as Tech Lead—he stood out for his ability to quickly grasp the application's context, lead strategic refactoring efforts, and drive architectural decisions. He also played a pivotal role in team development by mentoring developers, sharing knowledge, and contributing to technical decision-making. He is a collaborative, committed professional with outstanding technical expertise. I am confident that he will bring this same level of dedication and quality to any future teams he joins.",
        initials: "RJ",
    },
    {
        name: "Patrick Killian",
        relationship: "Software Engineer",
        company: "Synergia",
        text: "Samuel was my tech lead on one of the most prominent projects of my career, where we worked directly with Petrobras; there were countless moments of learning and guidance—far too many to list here. The impact he had on the project is evident, as he consistently led our team in a way that fostered both individual personal growth and the success of the project itself. It is an honor to recommend this professional!",
        initials: "PK",
    },
    {
        name: "Jefferson Rodrigues",
        relationship: "Tech Lead and Software Engineer",
        company: "Synergia",
        text: "I have had the opportunity to closely observe Samuel’s work and his growth as a developer. He stands out for his proactivity, autonomy, and ability to take ownership of tasks, carrying out his work with commitment and consistently seeking solutions.\n" +
            "\n" +
            "Beyond his technical competence, he demonstrates an aptitude for understanding project challenges, collaborating with various team members, and effectively contributing to problem-solving. His proactive attitude and sense of responsibility have a direct, positive impact on the quality and reliability of his deliverables.\n" +
            "\n" +
            "Samuel is a competent, committed, and collaborative professional who adds significant value to the team and is always ready to take on new challenges.",
        initials: "JR",
    },
    {
        name: "Daniel Terra",
        relationship: "Software Engineer",
        company: "Synergia",
        text: "I worked with Samuel at Synergia and highly recommend his work. As a full-stack developer, he has mastered the end-to-end Software Development Life Cycle and was responsible for delivering high-impact features and improvements to our project.\n" +
            "\n" +
            "Beyond his technical skills, he became a key figure for the team: he supported sprint planning, conducted code reviews, handled deployments, and mentored developers with great clarity and patience. Always approachable, he elevated the performance of those around him and was always ready to help without hesitation.\n" +
            "\n" +
            "He is a well-rounded professional and a great person to have on the team. He would be a top-tier developer in any organization. I recommend him without reservation!",
        initials: "DT",
    },
];

export default function RecommendationsCarousel() {
    const [current, setCurrent] = useState(0);

    const previous = () => {
        setCurrent(
            (current - 1 + recommendations.length) %
            recommendations.length
        );
    };

    const next = () => {
        setCurrent((current + 1) % recommendations.length);
    };

    const recommendation = recommendations[current];

    return (
        <section className="recommendations">
            <div className="recommendation-card">
                <div className="quote-mark">“</div>
                <p className="textPrimary">
                    {recommendation.text}
                </p>

                <div className="recommendation-author">
                    <div className="author-info">
                        <h3 className="textPrimary">{recommendation.name}</h3>
                        <p className="textPrimary">{recommendation.relationship} at {recommendation.company}</p>
                    </div>
                </div>
            </div>

            <div className="carousel-controls">
                <button
                    className="carousel-arrow"
                    onClick={previous}
                    aria-label="Previous recommendation"
                >
                    <img className={'icon'} src={chevron_left} alt={"Previous recommendation"}/>
                </button>

                <div className="carousel-dots">
                    {recommendations.map((item, index) => (
                        <button
                            key={item.name}
                            className={`carousel-dot ${
                                index === current ? "active" : ""
                            }`}
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to recommendation ${index + 1}`}
                            aria-current={
                                index === current ? "true" : undefined
                            }
                        />
                    ))}
                </div>

                <button
                    className="carousel-arrow"
                    onClick={next}
                    aria-label="Next recommendation"
                >
                    <img className={'icon'} src={chevron_right} alt={"Next recommendation"}/>
                </button>
            </div>

            {/*<p className="carousel-counter">
            {String(current + 1).padStart(2, "0")} /{" "}
                {String(recommendations.length).padStart(2, "0")}
            </p>*/}
        </section>
    );
}