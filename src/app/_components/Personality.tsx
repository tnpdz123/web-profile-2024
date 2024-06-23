import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">authority figure (ENFJ-A)</p>
        <p className="pb-2">
        authority figure (ENFJ-A)

        The protagonist is an inspiring optimist. Ready to do what you feel is right.
        </p>
        <div className="flex gap-1">
          <Badge>PROTAGONIST</Badge>
          <Badge> RIGHTEOUSNESS</Badge>
          <Badge>PARTICIPATE</Badge>
          <Badge>NAVIGATE</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
