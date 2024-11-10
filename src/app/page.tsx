/** @format */
"use client";

import {FollowersCard  } from "@/components/Followers.card";
import Header from "@/components/Header";
import { OverviewData, data } from "./data";
import OverviewCard from "@/components/OverviewCard";
import { Container } from "@/components/Container";
import SocialMediaChart from "@/components/SocialMediaChart";
import StackedBarChart from "@/components/StackedBarChart";
export default function Home() {
  return (
    <div>
      {/* top background */}
      <Background />
      <main className=" mx-auto  min-h-screen w-full  max-w-7xl  px-4 pb-2 pt-8  md:px-8  ">
        <Header className="mb-10" />
        {/* follwers */}
        <Container>
          {data.map((d, i) => (
            <FollowersCard
              key={i}
              {...d}
              // icon={d.icon}
              // color={d.color}
              // username={d.username}
              // followers={d.followers}
              // subscribers={d.subscribers}
              // todaySubscribers={d.todaySubscribers}
              // todayFollowers={d.todayFollowers}
              // socialMediaName={d.socialMediaName}
            />
          ))}
        </Container>

        {/* Overview Today  */}
        
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <section className="flex-1">
          <h2 className="mb-8 text-center text-2xl font-semibold text-dark-grayish-blue-text dark:text-white sm:text-start">
            Social Media Insights
          </h2>
          <SocialMediaChart /> {/* Add the chart component here */}
        </section>
        <section className="flex-1">
          <h2 className="mb-8 text-center text-2xl font-semibold text-dark-grayish-blue-text dark:text-white sm:text-start ">
            Overview - Today
          </h2>
          <Container className="mb-4">
            <StackedBarChart data={OverviewData} />
          </Container>
        </section>
        </div>
        <section>
          <h2 className="mb-8 text-center text-2xl font-semibold text-dark-grayish-blue-text dark:text-white sm:text-start ">
            Overview - Today
          </h2>
          <Container className="mb-4">
            {OverviewData.map((d, i) => (
              <OverviewCard {...d} key={i} />
            ))}
          </Container>
        </section>
        
      </main>
    </div>
  );
}

function Background() {
  return (
    <div className="fixed left-0  top-0 -z-50  min-h-screen w-full  bg-white-bg dark:bg-very-dark-blue-bg ">
      <section className="h-[250px]  rounded-b-2xl   bg-very-pale-blue-top-bg-pattern dark:bg-very-dark-blue-top-bg-pattern " />
      <section className=" h-full" />
    </div>
  );
}