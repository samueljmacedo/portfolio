import '../App.css';
import './main.css';
import main_picture from '../images/main_picture.jpg';
import keyboard_double_arrow_down from '../images/keyboard_double_arrow_down.svg';

export function Main() {
  return (
    <section className="background2 main">
      <header>
        <h1
          className={"textSecondary headerText fadeIn-text textCenter"}
        >
          Samuel Macedo
        </h1>
      </header>
      <img className="picture" src={main_picture} alt="logo"/>
      <div className={"info fadeIn-text2"}>
        <h2 className={"textSecondary subHeaderText textCenter"}>Software Engineer</h2>
        <h5 className={"textSecondary contentText textCenter"}>samueljmacedo@outlook.com</h5>
        <div className={"links textCenter"}>
          <a
            href={"https://www.linkedin.com/in/samuel-jmacedo/"}
            target="_blank"
            className={"textSecondary contentText"}
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href={"https://github.com/samueljmacedo"}
            target="_blank"
            className={"textSecondary contentText"}
            rel="noreferrer"
          >
            GITHUB
          </a>
        </div>
      </div>
      <img className={"icon"} src={keyboard_double_arrow_down} alt={"continue"}/>
    </section>
  );
}