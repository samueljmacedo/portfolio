import './tags.css';
import {SAMPLE} from "../data/info";

export function Tags() {
  return (
    <div className="tag-list">
      {SAMPLE.skills.map((tag, i) => (
        <div className={"tag-item"} key={i}>
          <p className={"textPrimary contentText"}><strong>{tag}</strong></p>
        </div>
      ))}
    </div>
  )
}