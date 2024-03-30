import { Issues } from "@/components/project/issues";
import { ProjectHeader } from "@/components/project/project-header";
import { IDE } from "./ide";

const Project = () => {
  return (
    <div className="border border-white border-solid flex-1">
      <ProjectHeader />
      <div className="flex">
        <IDE />
        <Issues />
      </div>
    </div>
  );
};

export default Project;
