import { UserData } from "@/app/data";
import { cn } from "@/utils/cn";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";


export function FollowersCard(props: UserData) {
  const todayFollwers =
    (props.socialMediaName == "youtube"
      ? props.todaySubscribers
      : props.todayFollowers) || 0;
  const follwers = props.followers || props.subscribers;
  return (
    <div
      className={cn(
        " relative flex h-[230px] w-[260px] flex-col  justify-around overflow-hidden  rounded bg-light-grayish-blue-card-bg dark:bg-dark-desaturated-blue-card-bg  ",
      )}
    >
      {/* top bar */}
      <div
        style={{ background: props.color }}
        className="absolute left-0 top-0 h-1 w-full   "
      />

      {/* icon and userName */}
      <section className="flex w-full items-center justify-center gap-2 ">
        {/* <AiFillFacebook className="text-3xl text-facebook-blue" /> */}
        <div style={{ color: props.color }} className=" text-3xl ">
          {props.icon}
        </div>
        <p className=" font-semibold text-dark-grayish-blue-text">
          {props.username}
        </p>
      </section>

      {/* follwers */}
      <section className="flex flex-col items-center ">
        {/* number */}
        <p className="text-6xl font-bold text-very-dark-blue-bg dark:text-white">
          {follwers}
          {/* 1987 */}
        </p>
        <p className=" text-xs tracking-[5px] text-dark-grayish-blue-text dark:text-desaturated-blue-text ">
          {props.todaySubscribers ? "SUBSCRIBERS" : "FOLLOWERS"}{" "}
        </p>
      </section>

      {/* today data */}
      <section
        className={cn(
          "flex text-sm items-center justify-center gap-1 font-semibold ",
          todayFollwers >= 0 ? "text-lime-green" : "text-bright-red",
        )}
      >
        <AiFillCaretDown
          className={cn("transition-all", {
            "rotate-180 ": todayFollwers >= 0,
          })}
        />
        <span>{Math.abs(todayFollwers)}</span> <span>Today</span>
      </section>
    </div>
  );
}