import React from "react";

type DividerProps = {
  className?: string;
};

const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  return <hr className={`border-gray-400 ${className}`} />;
};

export default Divider;