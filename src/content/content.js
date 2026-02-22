import '../App.css';
import {Section} from "../section/section";
import Timeline from "../timeline/timeline";
import './content.css';
import FadeInSection from "../section/fadeInSection";
import LanguageProfiency from "../progressBar/languageProficiency";

const careerEvents = [
  {
    date: '2021 - Present',
    title: 'Mid-Level Full-Stack Developer',
    description: 'Leading the frontend architecture for the company\'s flagship product. Implemented a component library used by 20+ developers and reduced bundle size by 40%.',
    image: '/images/techcorp-office.jpg',
    imageAlt: 'TechCorp office building',
    link: 'https://techcorp.com',
    type: 1,
  },
  {
    date: '2019 - 2021',
    title: 'Cybersecurity Analyst',
    description: 'Developed and maintained multiple React applications. Collaborated with designers to implement responsive, accessible interfaces. Mentored junior developers.',
    type: 1,
  },
  {
    date: '2018 - 2019',
    title: 'IT Intern',
    description: 'Developed and maintained multiple React applications. Collaborated with designers to implement responsive, accessible interfaces. Mentored junior developers.',
    type: 1,
  },
  {
    date: '2016 - 2018',
    title: 'Analytical Geometry Tutor',
    description: 'Mentored junior developers.',
    type: 1,
  },
  {
    date: '2021 - 2021',
    title: 'Major in Software Engineering',
    description: 'Pontifical Catholic University of Minas Gerais - PUC-MG',
    type: 2,
  },
  {
    date: '2015 - 2020',
    title: 'Bachelor of Science in Electronic and Telecommunications Engineering',
    description: 'Pontifical Catholic University of Minas Gerais - PUC-MG',
    type: 2,
  },
  {
    date: '2021',
    title: 'TOEFL iBT',
    description: 'Score: 102/120',
    type: 3,
  },
];

export function Content() {
  return (
    <section className="background1 content">
      <FadeInSection>
        <Section title={"About"}>
          <p className={"textPrimary contentText"}>
            Enthusiastic and team-oriented Java developer with 4 years of experience. In addition, I've also been
            working with the ReactJS and NestJS frameworks. I also have experience as a Tech Lead by facilitating sprint
            planning and mentoring junior developers to ensure best practices.
          </p>
          <p className={"textPrimary contentText"}>
            My overarching goal is to contribute meaningfully to cutting-edge projects while embracing new challenges
            with hopes of applying my skills and strengthen my knowledge. Skilled in using effective communication with
            a collaborative mindset to contribute and leverage the team. Furthermore, I bring self-taught skills and a
            didactic approach towards my colleagues.
          </p>
        </Section>
      </FadeInSection>
      <FadeInSection>
        <Timeline events={careerEvents}/>
      </FadeInSection>
      <FadeInSection>
        <Section title={"Expertise"}>
          <p className={"textPrimary contentText"}>
            <strong>Programming languages: </strong>
            Extended experience with Java, Javascript, TypeScript
          </p>
          <p className={"textPrimary contentText"}>
            <strong>Databases: </strong>
            Experience with SQL and MongoDB
          </p>
          <p className={"textPrimary contentText"}>
            <strong>Project Managing: </strong>
            Experience as a Tech Lead,
            Familiarity with both Monolithic and Microservices Architecture,
            Usage of Design Patterns, SOLID principles and clean code,
          </p>
        </Section>
      </FadeInSection>
      <FadeInSection>
        <Section title={"Proficiency"}>
          <LanguageProfiency />
        </Section>
      </FadeInSection>
      <div className={"footer"}>
        <p className={"textPrimary contentText"}>© 2026 Samuel Macedo</p>
        <div className={"links"}>
          <a
            href={"https://www.linkedin.com/in/samuel-jmacedo/"}
            target="_blank"
            className={"textPrimary contentText"}
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href={"https://github.com/samueljmacedo"}
            target="_blank"
            className={"textPrimary contentText"}
            rel="noreferrer"
          >
            GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}