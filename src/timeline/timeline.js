import '../App.css';
import './timeline.css'
import {Title} from "../title/title";
import {Button} from "../button/button";
import {useState} from "react";
import {SAMPLE} from "../data/info";
import calendar from '../images/calendar.svg';
import location from '../images/location.svg';
import school from '../images/school.svg';
import business from '../images/business.svg';
import trophy from '../images/trophy.svg';

function Timeline() {
  const [type, setType] = useState('experience');

  const handleProfessional = () => {
    setType('experience');
  }

  const handleAcademic = () => {
    setType('education');
  }

  const handleOthers = () => {
    setType('other');
  }

  return (
    <div className={"container"}>
      <Title title={"Carreer"} />
      <div className="buttons">
        <Button
          title={'Professional'}
          active={type === 'experience'}
          onClick={handleProfessional}
          icon={business}
        />
        <Button
          title={'Academic'}
          active={type === 'education'}
          onClick={handleAcademic}
          icon={school}
        />
        <Button
          title={'Others'}
          active={type === 'other'}
          onClick={handleOthers}
          icon={trophy}
        />
      </div>
      <div className="timeline-container">
        {SAMPLE[type]
          .map((event, index) => (
          <TimelineItem key={index} type={type} event={event} />
        ))}
      </div>
    </div>
  );
}

const TimelineItem = ({event, type}) => {
  const {company, role, start, end, bullets, institution, degree, description, title, link} = event;
  const date = end ? `${start} - ${end}` : `${start}`
  return (
    <div className="timeline-item">
      <div className="timeline-dot-container">
        <div className="timeline-dot"/>
      </div>

      {type === 'experience' &&
        <div className={`timeline-content`}>
          <div className="timeline-text">
            <div>
              <h3 className="textPrimary contentSubTitle" style={{ paddingBottom: "8px" }}>{role}</h3>
              <div className={'content-date'}>
                <img className={"icon-calendar"} src={location} alt={"location"}/>
                <h3 className="textPrimary contentDescription">{company}</h3>
              </div>
              <div className={'content-date'}>
                <img className={"icon-calendar"} src={calendar} alt={"date"}/>
                <h3 className={"textPrimary contentDescription"}>{date}</h3>
              </div>
            </div>
            {bullets &&
              <div className="timeline-list">
              <ul>
                  {bullets.map(item =>
                    <li><p className="textPrimary contentText">{item}</p></li>
                  )}
                </ul>
              </div>
            }
          </div>
        </div>}

      {type === 'education' &&
        <div className={`timeline-content`}>
          <div className="timeline-text">
            <div>
              <h3 className="textPrimary contentSubTitle" style={{ paddingBottom: "8px" }}>{degree}</h3>
              <div className={'content-date'}>
                <img className={"icon-calendar"} src={location} alt={"location"}/>
                <h3 className="textPrimary contentDescription">{institution}</h3>
              </div>
              <div className={'content-date'}>
                <img className={"icon-calendar"} src={calendar} alt={"date"}/>
                <h3 className={"textPrimary contentDescription"}>{date}</h3>
              </div>
            </div>
            {description && <p className="textPrimary contentText">{description}</p>}
          </div>
        </div>}

      {type === 'other' &&
        <div className={`timeline-content`}>
          <div className="timeline-text">
            <div>
              <h3 className="textPrimary contentSubTitle" style={{ paddingBottom: "8px" }}>{title}</h3>
              <div className={'content-date'}>
                <img className={"icon-calendar"} src={calendar} alt={"date"}/>
                <h3 className={"textPrimary contentDescription"}>{date}</h3>
              </div>
            </div>
            {bullets &&
              <div className="timeline-list">
                <ul>
                  {bullets.map(item =>
                    <li><p className="textPrimary contentText">{item}</p></li>
                  )}
                </ul>
              </div>
            }
            {description && <p className="textPrimary contentText">{description}</p>}
            {link && (
              <a href={link} className="timeline-link" target="_blank" rel="noopener noreferrer">
                Learn more →
              </a>
            )}
          </div>
        </div>}
    </div>
  );
};

export default Timeline;