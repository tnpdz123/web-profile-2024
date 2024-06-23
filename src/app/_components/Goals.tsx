import React from "react";
import Card from "./common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode, faMoneyBillAlt, faComments, faUtensils } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <FontAwesomeIcon icon={faGlobe} className="text-blue-500 mr-2" />
            Travel around the world
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} className="text-purple-500 mr-2" />
            Learn a new coding skill
          </li>
          <li>
            <FontAwesomeIcon icon={faMoneyBillAlt} className="text-green-500 mr-2" />
            Have a lot of money saved
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} className="text-yellow-500 mr-2" />
            Improve communication skills
          </li>
          <li>
            <FontAwesomeIcon icon={faUtensils} className="text-red-500 mr-2" />
            Eat everything (except pork)
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
