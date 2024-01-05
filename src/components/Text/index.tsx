import React from "react";

const sizeClasses = {
  txtMuliSemiBold10: "font-mulish font-semibold",
  txtMuliBold24: "font-bold font-mulish",
  txtMuliSemiBold16Gray200: "font-mulish font-semibold",
  txtMuliRegular12Bluegray100: "font-mulish font-normal",
  txtMulishRomanMedium14: "font-medium font-mulish",
  txtMuliRegular12Black900: "font-mulish font-normal",
  txtMuliSemiBold16: "font-mulish font-semibold",
  txtInterRegular12Deeppurple400: "font-inter font-normal",
  txtMuliBold24Gray200: "font-bold font-mulish",
  txtMuliSemiBold12: "font-mulish font-semibold",
  txtMuliRegular12Gray200: "font-mulish font-normal",
  txtMuliBold18Gray300: "font-bold font-mulish",
  txtMulishRomanMedium14WhiteA700: "font-medium font-mulish",
  txtMuliRegular12: "font-mulish font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtMuliSemiBold12Gray200: "font-mulish font-semibold",
  txtInterRegular12TealA400: "font-inter font-normal",
  txtMuliBold18: "font-bold font-mulish",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
