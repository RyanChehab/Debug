import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/user";

const MemberIcon = () => {
  const { name, color } = useContext(MyContext);

  return (
    <div className={`member-icon ${color}`}>
      <p>{name[0].toUpperCase()}</p>
    </div>
  );
};

export default MemberIcon;
