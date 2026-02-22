import '../App.css';
import './main.css';
import main_picture from '../images/main_picture.jpg';

export function Main() {
  return (
    <section className="background2 main">
      <header>
        <h1 className={"textSecondary headerText fadeIn-text"}>Samuel Macedo</h1>
      </header>
      <img className="picture" src={main_picture} alt="logo" />
      <div className={"info fadeIn-text"}>
        <h2 className={"textSecondary subHeaderText"}>Software Engineer</h2>
        <h5 className={"textSecondary contentText"}>samueljmacedo@outlook.com</h5>
        <div className={"links"}>
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
    </section>
  );
}