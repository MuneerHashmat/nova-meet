import LiveClock from "@/components/LiveClock";
import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  return (
    <section className="flex size-full xl:overflow-y-hidden flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 py-8 md:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-1 md:py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30pm
          </h2>

          <LiveClock />
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
