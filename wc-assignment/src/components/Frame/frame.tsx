/* eslint-disable @typescript-eslint/no-explicit-any */
import type {JSX} from "react";

interface Props {
  property1: "variant-2" | "variant-3" | "default";
  className: any;
  divClassName: any;
  text: string;
}

export const Frame = ({
  property1,
  className,
  divClassName,
  text = "Moo",
}: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid w-[896px] flex items-center gap-2.5 px-[425px] py-[27px] h-[78px] rounded-[10px] justify-center relative ${property1 === "variant-2" ? "bg-[linear-gradient(57deg,rgba(198,233,247,0.6)_0%,rgba(229,248,255,0.6)_100%)]" : (property1 === "variant-3") ? "bg-[linear-gradient(57deg,rgba(198,233,247,1)_0%,rgba(229,248,255,1)_100%)]" : "bg-[linear-gradient(57deg,rgba(198,233,247,0.1)_0%,rgba(229,248,255,0.1)_100%)]"} ${property1 === "variant-3" ? "border-[#95e4ff]" : "border-[#95e4ff80]"} ${property1 === "variant-2" ? "top-[118px]" : (property1 === "variant-3") ? "top-[216px]" : "top-5"} ${className}`}
    >
      <div
        className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[-0.31px] text-[22px] mr-[-0.50px] ml-[-0.50px] text-[#15313d] relative font-semibold text-center whitespace-nowrap leading-6 ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
