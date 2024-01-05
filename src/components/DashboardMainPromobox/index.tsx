import React from "react";

import { Img, Text } from "components";

type DashboardMainPromoboxProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "welcometext" | "descriptiontext"
> &
  Partial<{ welcometext: string; descriptiontext: string }>;

const DashboardMainPromobox: React.FC<DashboardMainPromoboxProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-[15px] h-full items-start justify-start p-6 sm:px-5 w-full">
          <Text className="text-black-900 text-lg w-full" size="txtMuliBold18">
            {props?.welcometext}
          </Text>
          <Text
            className="leading-[22.00px] max-w-[300px] md:max-w-full text-gray-800 text-xs"
            size="txtMuliRegular12"
          >
            {props?.descriptiontext}
          </Text>
        </div>
        <Img
          className="flex-1 md:h-auto h-full object-cover w-full"
          src="images/img_rightcolumnimg.png"
          alt="rightcolumnimg"
        />
      </div>
    </>
  );
};

DashboardMainPromobox.defaultProps = {
  welcometext: "Welcome to your dashboard!",
  descriptiontext:
    "Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!",
};

export default DashboardMainPromobox;
