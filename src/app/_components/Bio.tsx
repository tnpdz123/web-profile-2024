import React from "react";
import Card from "./common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBrain, faUsers } from "@fortawesome/free-solid-svg-icons";

const Bio = () => {
  return (
    <Card title="Bio">
      <div className="flex items-center">
       
        <div>
          <p className="mb-4">
            An information technology engineer passionate about IoT with over 5 years of experience in developing and designing IoT systems applicable in various industries,
            from smart homes to city infrastructure management.
          </p>
          <p className="mb-4">
            Interested in integrating AI and data analytics with IoT to create intelligent and sustainable solutions.
          </p>
          <p className="mb-4">
            Enjoys researching and experimenting with new technologies and believes that the interconnection of devices will continuously improve our way of life.
          </p>
          <p>
            Ready to collaborate and share knowledge within the IoT community both locally and internationally.
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <FontAwesomeIcon icon={faBrain} className="text-blue-500 text-2xl mx-2" />
        <FontAwesomeIcon icon={faUsers} className="text-blue-500 text-2xl mx-2" />
      </div>
    </Card>
  );
};

export default Bio;
