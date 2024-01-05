import React from "react";

import { Img, Text } from "components";

type DashboardMainDarkModePromoboxProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "welcometext" | "descriptiontext"
> &
  Partial<{ welcometext: string; descriptiontext: string }>;

const DashboardMainDarkModePromobox: React.FC<
  DashboardMainDarkModePromoboxProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-[15px] h-full items-start justify-start p-6 sm:px-5 w-full">
          <Text
            className="text-gray-300 text-lg w-full"
            size="txtMuliBold18Gray300"
          >
            {props?.welcometext}
          </Text>
          <Text
            className="leading-[22.00px] max-w-[300px] md:max-w-full text-blue_gray-100 text-xs"
            size="txtMuliRegular12Bluegray100"
          >
            {props?.descriptiontext}
          </Text>
        </div>
        <Img
          className="flex-1 md:h-auto h-full object-cover w-full"
          src="images/img_rightcolumnimg_201x348.png"
          alt="rightcolumnimg"
        />
      </div>
    </>
  );
};

DashboardMainDarkModePromobox.defaultProps = {
  welcometext: "Welcome to your dashboard!",
  descriptiontext:
    "Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!",
};

export default DashboardMainDarkModePromobox;
