import React from "react";

import { Img, Text } from "components";

type DashboardMainDarkModeXlargedataboxProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "charttitle" | "previewtext"
> &
  Partial<{ charttitle: string; previewtext: string }>;

const DashboardMainDarkModeXlargedatabox: React.FC<
  DashboardMainDarkModeXlargedataboxProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-gray-200 w-full"
          size="txtMuliSemiBold16Gray200"
        >
          {props?.charttitle}
        </Text>
        <div className="md:h-[220px] h-[268px] pb-[3px] relative w-[97%] md:w-full">
          <div className="absolute flex flex-col h-[39px] md:h-auto inset-x-[0] items-center justify-start max-w-[646px] mx-auto p-3 top-[0] w-full">
            <div className="flex flex-col h-[27px] md:h-auto items-start justify-start w-full">
              <Text
                className="text-[10px] text-gray-800_01 w-full"
                size="txtMuliSemiBold10"
              >
                {props?.previewtext}
              </Text>
            </div>
          </div>
          <div
            className="absolute bg-cover bg-no-repeat md:h-[220px] h-[265px] inset-[0] justify-center m-auto pt-2.5 px-2.5 w-full"
            style={{ backgroundImage: "url('images/img_group2.svg')" }}
          >
            <Img
              className="absolute bottom-[0] h-[220px] left-[4%]"
              src="images/img_group.svg"
              alt="group"
            />
            <Img
              className="absolute bottom-[0] h-[212px] right-[4%]"
              src="images/img_group_red_a100.svg"
              alt="group_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardMainDarkModeXlargedatabox.defaultProps = {
  charttitle: "Chart Title",
  previewtext: "Preview in Anima",
};

export default DashboardMainDarkModeXlargedatabox;
