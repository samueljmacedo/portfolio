import '../App.css';
import './main.css';
import main_picture from '../images/main_picture.png';
import keyboard_double_arrow_down from '../images/keyboard_double_arrow_down.svg';
import {SAMPLE} from "../data/info";
import open_in_new from "../images/open_in_new_secondary.svg";

export function Main() {
  return (
    <section className="background2 main">
      <header>
        <h1
          className={"textSecondary headerText fadeIn-text textCenter"}
        >
          {SAMPLE.personal.name}
        </h1>
      </header>
      <img className="picture fadeIn-text" src={main_picture} alt="logo"/>
      <div className={"info fadeIn-text2"}>
        <h2 className={"textSecondary subHeaderText textCenter"}>{SAMPLE.personal.title}</h2>
        <h5 className={"textSecondary contentText textCenter"}>{SAMPLE.personal.email}</h5>
        <div className={"links textCenter"}>
          <a
            href={SAMPLE.personal.linkedin}
            target="_blank"
            className={"textSecondary contentText linkText externalLink"}
            rel="noreferrer"
          >
            LINKEDIN
            <img className={'icon'} src={open_in_new} alt={"date"}/>
          </a>
          <a
            href={SAMPLE.personal.github}
            target="_blank"
            className={"textSecondary contentText linkText externalLink"}
            rel="noreferrer"
          >
            GITHUB
            <img className={'icon'} src={open_in_new} alt={"date"}/>
          </a>
        </div>
        <img className={"icon-mobile"} src={keyboard_double_arrow_down} alt={"continue"}/>
      </div>
    </section>
  );
}