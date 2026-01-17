import Tabbed from "./comps/Tabbed";
import content from "./assets/content";

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}


console.log(content);

