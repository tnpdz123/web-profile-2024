import React from "react";
import Card from "./common/Card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Card title="Portfolio">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/tnpdz123/my-app-wucamp-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              my-app-wucamp-2024
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tnpdz123/web-profile-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              web-profile-2024 - Personal Website
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Portfolio;
