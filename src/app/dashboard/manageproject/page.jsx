import getProjects from "@/utils/getProjects";
import React from "react";
import SingleManageProject from "./singleproject/SingleManageProject";

const ManageProjectsPage = async () => {
  const projects = await getProjects();
  return (
    <div>
      <h4 className="text-xl font-bold text-center">
        Manage-project : {projects?.length}
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {projects?.map((item) => (
          <SingleManageProject key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ManageProjectsPage;
