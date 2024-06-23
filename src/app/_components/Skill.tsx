import {
  faJava,
  faJs,
  faPython,
  faBootstrap,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase , faC , faBolt }from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";

type Props = {};

const Skill = (props: Props) => {
  return (
    <Card title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10" />
          <p>Python</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} className="h-10" />
          <p>Java</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10" />
          <p>JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faBootstrap} className="h-10" />
          <p>bootstrap</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faHtml5} className="h-10" />
          <p>Html5</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faC} className="h-10" />
          <p>C++</p>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
