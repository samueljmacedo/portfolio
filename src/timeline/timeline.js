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
  const { date, title, description, image } = event;

  return (
    <div className="timeline-item">
      <div className="timeline-dot-container">
        <div className="timeline-dot" />
        <span className="timeline-date contentText">{date}</span>
      </div>

      <div className={`timeline-content ${image ? 'has-image' : ''}`}>
        {/*{image && (
          <div className="timeline-image">
            <img src={image} alt={imageAlt || title} loading="lazy" />
          </div>
        )}*/}
        <div className="timeline-text">
          <h3 className="textPrimary contentSubTitle">{title}</h3>
          <p className="textPrimary contentText">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;