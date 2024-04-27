import React from "react";

interface DocComponentsProps {
  topic?: string;
  content?: any;
  id?: string;
}

const DocComponents: React.FC<DocComponentsProps> = ({
  topic,
  content,
  id,
}) => {
  return (
    <div id={id} className="mb-8">
      <h4 className="text-lg md:text-2xl">{topic}</h4>
      <div className="text-sm mt-4  md:text-base text-justify">{content}</div>
    </div>
  );
};

export default DocComponents;
