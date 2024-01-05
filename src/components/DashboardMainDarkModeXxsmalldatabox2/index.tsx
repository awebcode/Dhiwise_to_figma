import React from "react";

import { Img, Text } from "components";

type DashboardMainDarkModeXxsmalldatabox2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "price" | "p2643" | "p110sinceyesterdone"
> &
  Partial<{ price: string; p2643: string; p110sinceyesterdone: string }>;

const DashboardMainDarkModeXxsmalldatabox2: React.FC<
  DashboardMainDarkModeXxsmalldatabox2Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[18px] h-[98px] md:h-auto items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start">
            <Text
              className="text-gray-200 text-xs"
              size="txtMuliSemiBold12Gray200"
            >
              {props?.price}
            </Text>
            <Text
              className="mt-[3px] text-2xl md:text-[22px] text-gray-200 sm:text-xl"
              size="txtMuliBold24Gray200"
            >
              {props?.p2643}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-[152px]">
            <Img
              className="h-3.5 w-3.5"
              src="images/img_arrowright_teal_a400.svg"
              alt="arrowright"
            />
            <Text
              className="text-gray-200 text-xs w-auto"
              size="txtMuliRegular12Gray200"
            >
              {props?.p110sinceyesterdone}
            </Text>
          </div>
        </div>
        <Img
          className="h-[98px] w-[140px]"
          src="images/img_tinylinechart_teal_500.svg"
          alt="tinylinechart"
        />
      </div>
    </>
  );
};

DashboardMainDarkModeXxsmalldatabox2.defaultProps = {
  price: "CHART TITLE",
  p2643: "2,643",
  p110sinceyesterdone: "1.10% Since yesterday",
};

export default DashboardMainDarkModeXxsmalldatabox2;
