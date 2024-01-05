import React from "react";

import { Img } from "components";

type DashboardLoginLoginformcompProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "remembermeimage"
> &
  Partial<{ remembermeimage: string }>;

const DashboardLoginLoginformcomp: React.FC<
  DashboardLoginLoginformcompProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[273px] md:h-auto items-center justify-center w-[273px]">
          <Img
            className="h-[246px] md:h-auto object-cover w-[242px] sm:w-full"
            alt="loginformrememb"
            src={props?.remembermeimage}
          />
        </div>
        <Img
          className="h-[273px] w-full"
          src="images/img_illustrationlogin.svg"
          alt="illustrationlog"
        />
      </div>
    </>
  );
};

DashboardLoginLoginformcomp.defaultProps = {
  remembermeimage: "images/img_loginformrememberme.png",
};

export default DashboardLoginLoginformcomp;
