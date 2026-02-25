import '../App.css';
import {Section} from "../section/section";
import Timeline from "../timeline/timeline";
import './content.css';
import FadeInSection from "../section/fadeInSection";
import LanguageProfiency from "../progressBar/languageProficiency";
import {aboutDescription, careerEvents} from "../data/data";

export function Content() {
  return (
    <section className="background1 content">
      <FadeInSection>
        <Section title={"About"}>
          {aboutDescription.map((text, index)=> (
            <p className={"textPrimary contentText"} key={index}>
              {text}
            </p>
            ))
          }
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
        <Section title={"Language Proficiency"}>
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