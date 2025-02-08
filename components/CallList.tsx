// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MeetingCard from "./MeetingCard";
import Loader from "./Loader";

type category = "ended" | "upcoming" | "recordings";

const CallList = ({ type }: { type: category }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const router = useRouter();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;

      case "recordings":
        return recordings;

      case "upcoming":
        return upcomingCalls;

      default:
        return [];
    }
  };
  if (isLoading) return <Loader />;

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";

      case "recordings":
        return "No Recordings";

      case "upcoming":
        return "No Upcoming Calls";

      default:
        return "";
    }
  };

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={meeting.id}
            icon={
              type === "ended"
                ? "/icons/previous.svg"
                : type == "upcoming"
                ? "/icons/upcoming.svg"
                : "/icons/recordings.svg"
            }
            title={meeting.state.custom.description || "No description"}
            date={
              meeting.state.startsAt?.toLocaleString() ||
              meeting.start_time.toLocaleString()
            }
            isPreviousMeeting={type === "ended"}
            buttonIcon1={type === "recordings" ? "/icons/play.svg" : undefined}
            buttonText={type === "recordings" ? "Play" : "Start"}
            handleClick={
              type === "recordings"
                ? () => router.push(`${meeting.url}`)
                : () => router.push(`/meeting/${meeting.id}`)
            }
            link={
              type === "recordings"
                ? meeting.url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meeting.id}`
            }
          />
        ))
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
