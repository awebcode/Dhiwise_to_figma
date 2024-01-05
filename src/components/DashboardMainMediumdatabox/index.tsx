import React from "react";

import { Img, Text } from "components";

type DashboardMainMediumdataboxProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "charttitleTwo"
  | "p110sinceyesterdone"
  | "threehundred"
  | "threehundredOne"
  | "twohundred"
> &
  Partial<{
    charttitleTwo: string;
    p110sinceyesterdone: string;
    threehundred: string;
    threehundredOne: string;
    twohundred: string;
  }>;

const DashboardMainMediumdatabox: React.FC<DashboardMainMediumdataboxProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-5 items-center justify-between w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtMuliSemiBold16"
          >
            {props?.charttitleTwo}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Img
              className="h-3.5 w-3.5"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
            <Text
              className="text-black-900 text-right text-xs w-auto"
              size="txtMuliRegular12Black900"
            >
              {props?.p110sinceyesterdone}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-9 sm:px-5 w-[81%] md:w-full">
          <div className="h-[165px] md:h-[181px] mb-[29px] mt-1 relative w-[91%]">
            <Img
              className="absolute bottom-[0] h-[140px] right-[8%] w-[140px]"
              src="images/img_group_teal_a400_140x140.svg"
              alt="group_Two"
            />
            <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-full">
              <div className="md:h-[18px] h-[30px] md:ml-[0] ml-[132px] relative w-[30px]">
                <Img
                  className="absolute bottom-[0] h-[18px] left-[0]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <Text
                  className="absolute right-[0] text-red-A100 text-xs top-[0]"
                  size="txtInterRegular12"
                >
                  {props?.threehundred}
                </Text>
              </div>
              <div className="flex flex-row items-start justify-start mr-[151px] mt-[87px] w-[22%] md:w-full">
                <Text
                  className="text-right text-teal-A400 text-xs"
                  size="txtInterRegular12TealA400"
                >
                  {props?.threehundredOne}
                </Text>
                <Img
                  className="h-[7px] mt-1"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              </div>
              <div className="flex flex-row items-start justify-end md:ml-[0] ml-[155px] mt-[11px] w-1/5 md:w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_close.svg"
                  alt="close"
                />
                <Text
                  className="mt-0.5 text-deep_purple-400 text-xs"
                  size="txtInterRegular12Deeppurple400"
                >
                  {props?.twohundred}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardMainMediumdatabox.defaultProps = {
  charttitleTwo: "Chart Title",
  p110sinceyesterdone: "1.10% Since yesterday",
  threehundred: "300",
  threehundredOne: "300",
  twohundred: "200",
};

export default DashboardMainMediumdatabox;
