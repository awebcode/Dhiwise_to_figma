import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";
import DashboardMainDarkModeMediumdatabox from "components/DashboardMainDarkModeMediumdatabox";
import DashboardMainDarkModePromobox from "components/DashboardMainDarkModePromobox";
import DashboardMainDarkModeTopmenu from "components/DashboardMainDarkModeTopmenu";
import DashboardMainDarkModeXlargedatabox from "components/DashboardMainDarkModeXlargedatabox";
import DashboardMainDarkModeXxsmalldatabox from "components/DashboardMainDarkModeXxsmalldatabox";
import DashboardMainDarkModeXxsmalldatabox1 from "components/DashboardMainDarkModeXxsmalldatabox1";
import DashboardMainDarkModeXxsmalldatabox2 from "components/DashboardMainDarkModeXxsmalldatabox2";

import { CloseSVG } from "../../assets/images";

const DashboardMainDarkModePage: React.FC = () => {
  const [searchfieldvalue, setSearchfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[200px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-black-900 flex flex-col h-[72px] md:h-auto items-center justify-center p-6 sm:px-5 w-[200px]">
              <Img
                className="h-[22px] md:h-auto object-cover w-[84px] sm:w-full"
                src="images/img_yourlogo.png"
                alt="frame"
              />
            </div>
            <Img
              className="h-[330px] md:h-auto mb-[543px] object-cover w-[200px]"
              src="images/img_menudark.png"
              alt="menudark"
            />
          </Sidebar>
          <div className="flex flex-1 flex-col gap-12 items-center justify-start md:px-5 w-full">
            <DashboardMainDarkModeTopmenu className="bg-gray-900 flex sm:flex-col flex-row md:gap-10 h-[72px] md:h-auto items-center justify-between max-w-[1240px] md:px-10 px-12 sm:px-5 py-9 w-full" />
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1144px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-full">
                <DashboardMainDarkModePromobox className="bg-black-900_01 flex flex-1 md:flex-col flex-row md:gap-5 h-full items-start justify-center p-3 rounded-lg w-full" />
                <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-[15px] h-[225px] md:h-auto items-start justify-start p-6 sm:px-5 rounded-lg w-[400px] sm:w-full">
                  <Text
                    className="text-base text-gray-200 w-full"
                    size="txtMuliSemiBold16Gray200"
                  >
                    Chart Title
                  </Text>
                  <Img
                    className="h-[140px] w-[352px]"
                    src="images/img_tinybarchart_red_a100.svg"
                    alt="tinybarchart"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <DashboardMainDarkModeXxsmalldatabox className="bg-black-900_01 flex flex-1 flex-row gap-2 items-center justify-center p-6 sm:px-5 rounded-lg w-full" />
                <DashboardMainDarkModeXxsmalldatabox1 className="bg-black-900_01 flex flex-1 flex-row gap-2 items-center justify-center p-6 sm:px-5 rounded-lg w-full" />
                <DashboardMainDarkModeXxsmalldatabox2 className="bg-black-900_01 flex sm:flex-1 flex-row gap-2 items-center justify-center p-6 sm:px-5 rounded-lg w-[400px] sm:w-full" />
              </List>
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-full">
                <DashboardMainDarkModeXlargedatabox className="bg-black-900_01 flex flex-1 flex-col gap-5 h-[358px] md:h-auto items-center justify-start p-6 sm:px-5 rounded-lg w-full" />
                <DashboardMainDarkModeMediumdatabox className="bg-black-900_01 flex sm:flex-1 flex-col gap-3 h-[358px] md:h-auto items-center justify-start p-6 sm:px-5 rounded-lg w-[400px] sm:w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMainDarkModePage;
