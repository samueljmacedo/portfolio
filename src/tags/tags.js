import './tags.css';
import {tagsContent} from "../data/data";

export function Tags() {
  return (
    <div className="tag-list">
      {tagsContent.map((tag, i) => (
        <div className={"tag-item"} key={i}>
          <p className={"textPrimary contentText"}><strong>{tag}</strong></p>
        </div>
      ))}
    </div>
  )
}