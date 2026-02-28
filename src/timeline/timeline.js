import '../App.css';
import './timeline.css'
import {Title} from "../title/title";
import {Button} from "../button/button";
import {useState} from "react";

function Timeline({ events }) {
  const [type, setType] = useState(1);

  const handleProfessional = () => {
    setType(1);
  }

  const handleAcademic = () => {
    setType(2);
  }

  const handleOthers = () => {
    setType(3);
  }

  return (
    <div className={"container"}>
      <Title title={"Carreer"} />
      <div className="buttons">
        <Button
          title={'Professional'}
          active={type === 1}
          onClick={handleProfessional}
        />
        <Button
          title={'Academic'}
          active={type === 2}
          onClick={handleAcademic}
        />
        <Button
          title={'Others'}
          active={type === 3}
          onClick={handleOthers}
        />
      </div>
      <div className="timeline-container">
        {events
          .filter(event => event.type === type)
          .map((event, index) => (
          <TimelineItem key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

const TimelineItem = ({ event }) => {
  const { date, title, subtitle, description, image, note, activities } = event;

  return (
    <div className="timeline-item">
      <div className="timeline-dot-container">
        <span className="timeline-date contentText">{date}</span>
        <div className="timeline-dot" />
      </div>

      <div className={`timeline-content ${image ? 'has-image' : ''}`}>
        {/*{image && (
          <div className="timeline-image">
            <img src={image} alt={imageAlt || title} loading="lazy" />
          </div>
        )}*/}
        <div className="timeline-text">
          <div>
            <h3 className="textPrimary contentSubTitle">{title}</h3>
            {subtitle &&
              <h3 className="textPrimary contentDescription">
                {subtitle}
              </h3>}
            <h3 className={"textPrimary contentDescription dateDisplay"}>{date}</h3>
          </div>
          {activities &&
            <div className="timeline-list">
                <ul>
                  {activities.map(item =>
                    <li><p className="textPrimary contentText">{item}</p></li>
                  )}
                </ul>
            </div>
          }
          {description && <p className="textPrimary contentText">{description}</p>}
          {note && <p className="textPrimary contentText"><b>Key achievement: </b>{note}</p>}
        </div>
      </div>
    </div>
  );
};

export default Timeline;