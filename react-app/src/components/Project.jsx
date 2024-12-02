import MemberIcon from "./MemberIcon";
import { useContext } from "react";
import { MyContext } from "../context/user";

const Project = () => {

  const { name, description, members } = useContext(MyContext);

  return (
    <div className="project-card">
      <div>
        <h3>{name}</h3>
        <div>
          {members.map((m) => (
            <MemberIcon user={m} key={m.id} />
          ))}
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
