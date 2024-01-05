import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img } from "components";
import DashboardLoginLoginformcomp from "components/DashboardLoginLoginformcomp";

const DashboardLoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col sm:gap-10 md:gap-10 gap-[219px] items-center justify-start mx-auto p-[45px] md:px-10 sm:px-5 w-full">
        <Sidebar className="!sticky !w-[120px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
          <Img
            className="h-[22px] md:h-auto mx-auto my-[13px] object-cover w-[84px]"
            src="images/img_yourlogo.png"
            alt="yourlogo"
          />
        </Sidebar>
        <DashboardLoginLoginformcomp className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 h-80 md:h-auto items-center justify-center mb-[267px] pb-2 pt-6 md:px-5 px-6 rounded-lg w-[600px] md:w-full" />
      </div>
    </>
  );
};

export default DashboardLoginPage;
