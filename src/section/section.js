import '../App.css';
import {Title} from "../title/title";

export function Section({title, children}) {
  return (
    <div className="container">
      <Title title={title}/>
      {children}
    </div>
  );
}