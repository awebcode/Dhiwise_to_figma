import React from "react";

import { Img, Text } from "components";

type DashboardMainXlargedataboxProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "charttitle" | "previewtext"
> &
  Partial<{ charttitle: string; previewtext: string }>;

const DashboardMainXlargedatabox: React.FC<DashboardMainXlargedataboxProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-black-900 w-full"
          size="txtMuliSemiBold16"
        >
          {props?.charttitle}
        </Text>
        <div className="md:h-[234px] h-[268px] relative w-[97%] md:w-full">
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
            className="absolute bg-cover bg-no-repeat md:h-[234px] h-[268px] inset-[0] justify-center m-auto pt-2.5 px-2.5 w-full"
            style={{ backgroundImage: "url('images/img_group1.svg')" }}
          >
            <Img
              className="absolute bottom-[0] h-[234px] left-[4%]"
              src="images/img_group.svg"
              alt="group"
            />
            <Img
              className="absolute bottom-[0] h-[167px] right-[4%]"
              src="images/img_group_teal_a400.svg"
              alt="group_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardMainXlargedatabox.defaultProps = {
  charttitle: "Chart Title",
  previewtext: "Preview in Anima",
};

export default DashboardMainXlargedatabox;
