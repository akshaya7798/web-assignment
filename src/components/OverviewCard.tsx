import { OverviewDataType } from "@/app/data";
import { cn } from "@/utils/cn";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
export default function OverviewCard(props: OverviewDataType) {
  return (
    <div
      className={cn(
        " flex h-[130px] w-[260px] flex-col  justify-between gap-2 overflow-hidden  rounded  bg-light-grayish-blue-card-bg p-8  py-4 dark:bg-dark-desaturated-blue-card-bg  ",
      )}
    >
      <section className="flex justify-between gap-2 ">
        <p className=" font-semibold text-dark-grayish-blue-text">
          {props.type}
        </p>
        <div className="text-3xl">{props.icon}</div>
      </section>

      <section className="flex justify-between gap-2 ">
        <p className="text-3xl font-bold text-very-dark-blue-bg dark:text-white">
          {props.count}
        </p>
        <p
          className={cn(
            "flex items-center justify-center gap-1 text-sm font-semibold ",
            props.percentage >= 0 ? "text-lime-green" : "text-bright-red",
          )}  
        >
          <AiFillCaretDown
            className={cn("transition-all", {
              "rotate-180 ": props.percentage >= 0,
            })}
          />
          <span>{Math.abs(props.percentage)}%</span>
        </p>
      </section>
    </div>
  );
}