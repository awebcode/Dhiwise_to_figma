import React from "react";

import { Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

type DashboardMainTopmenuProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "name"
> &
  Partial<{ name: string }>;

const DashboardMainTopmenu: React.FC<DashboardMainTopmenuProps> = (props) => {
  const [searchfieldvalue, setSearchfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className={props.className}>
        <Input
          name="searchfield"
          placeholder="Search"
          value={searchfieldvalue}
          onChange={(e) => setSearchfieldvalue(e)}
          className="font-mulish p-0 placeholder:text-black-900_7e sm:pr-5 text-black-900_7e text-left text-xs w-full"
          wrapClassName="bg-gray-200 flex pl-[18px] pr-[35px] py-[9px] rounded-[18px] sm:w-full"
          prefix={
            <Img
              className="mt-auto mb-px cursor-pointer h-4 mr-[9px]"
              src="images/img_search.svg"
              alt="search"
            />
          }
          suffix={
            <CloseSVG
              fillColor="#0000007e"
              className="cursor-pointer h-4 my-auto"
              onClick={() => setSearchfieldvalue("")}
              style={{
                visibility:
                  searchfieldvalue?.length <= 0 ? "hidden" : "visible",
              }}
              height={16}
              width={16}
              viewBox="0 0 16 16"
            />
          }
        ></Input>
        <div className="flex flex-row gap-[22px] items-center justify-end w-auto">
          <Img
            className="h-4 w-4"
            src="images/img_iconnotifications.svg"
            alt="iconnotificatio"
          />
          <Line className="bg-gray-200 h-10 w-px" />
          <Text
            className="text-blue_gray-900 text-right text-sm tracking-[0.20px] w-auto"
            size="txtMulishRomanMedium14"
          >
            {props?.name}
          </Text>
          <div className="flex flex-col h-10 items-center justify-start w-10">
            <Img
              className="h-10 md:h-auto object-cover w-10"
              src="images/img_avatarcircle.png"
              alt="avatarcircle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardMainTopmenu.defaultProps = { name: "Matt Appleyard" };

export default DashboardMainTopmenu;
