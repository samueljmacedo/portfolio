import '../App.css';
import {Section} from "../section/section";
import Timeline from "../timeline/timeline";
import './content.css';
import FadeInSection from "../section/fadeInSection";
import LanguageProfiency from "../progressBar/languageProficiency";
import {Tags} from "../tags/tags";
import {SAMPLE} from "../data/info";
import open_in_new from "../images/open_in_new.svg";

export function Content() {
  return (
    <section className="background1 content">
      <FadeInSection>
        <Section title={"About"}>
          {SAMPLE.personal.summary.map((text, index)=> (
            <p className={"textPrimary contentText"} key={index}>
              {text}
            </p>
            ))
          }
        </Section>
      </FadeInSection>
      <FadeInSection>
        <Timeline />
      </FadeInSection>
      <FadeInSection>
        <Section title={"Skills"}>
          <Tags />
        </Section>
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
            href={SAMPLE.personal.linkedin}
            target="_blank"
            className={"textPrimary contentText linkText externalLink"}
            rel="noreferrer"
          >
            LINKEDIN
            <img className={'icon'} src={open_in_new} alt={"date"}/>
          </a>
          <a
            href={SAMPLE.personal.github}
            target="_blank"
            className={"textPrimary contentText linkText externalLink"}
            rel="noreferrer"
          >
            GITHUB
            <img className={'icon'} src={open_in_new} alt={"date"}/>
          </a>
        </div>
      </div>
    </section>
  );
}