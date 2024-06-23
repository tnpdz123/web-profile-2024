import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faUsers, faCompass } from "@fortawesome/free-solid-svg-icons";

const Personality = () => {
  return (
    <Card title="Personality">
      <div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faUser} className="text-blue-500 text-4xl mr-2" />
          <p className="text-lg">Authority Figure (ENFJ-A)</p>
        </div>
        <p className="pb-2">
          The protagonist is an inspiring optimist. Ready to do what you feel is right.
        </p>
        <div className="flex gap-2">
          <Badge>
            <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
            PROTAGONIST
          </Badge>
          <Badge>
            <FontAwesomeIcon icon={faCompass} className="text-green-500 mr-1" />
            RIGHTEOUSNESS
          </Badge>
          <Badge>
            <FontAwesomeIcon icon={faUsers} className="text-purple-500 mr-1" />
            PARTICIPATE
          </Badge>
          <Badge>
            <FontAwesomeIcon icon={faCompass} className="text-yellow-500 mr-1" />
            NAVIGATE
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
