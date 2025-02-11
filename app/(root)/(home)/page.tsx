import LiveClock from "@/components/LiveClock";
import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  return (
    <section className="flex size-full xl:h-[80vh] flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 py-8 md:p-11">
          <LiveClock />
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
