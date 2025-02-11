"use client";

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Video, VideoOff, Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicToggledOn, setIsMikeToggledOn] = useState(false);
  const [isCamToggledOn, setIsCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("usecall must be used within StreamCall component");
  }

  const handleOnClick = () => {
    call.join();
    setIsSetupComplete(true);
  };
  useEffect(() => {
    if (isMicToggledOn) {
      call?.microphone.enable();
    } else {
      call?.microphone.disable();
    }
  }, [isMicToggledOn, call?.microphone]);

  useEffect(() => {
    if (isCamToggledOn) {
      call?.camera.enable();
    } else {
      call?.camera.disable();
    }
  }, [isCamToggledOn, call?.camera]);

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>

      <VideoPreview className="w-[90vw] sm:w-auto" />

      <div className="flex h-16 items-center justify-center gap-3">
        <button
          onClick={() => setIsMikeToggledOn((prev) => !prev)}
          className={cn(
            "cursor-pointer rounded-2xl te bg-[#19232d] px-4 py-2",
            !isMicToggledOn && "bg-red-500"
          )}
        >
          {isMicToggledOn ? <Mic /> : <MicOff />}
        </button>
        <button
          onClick={() => setIsCamToggledOn((prev) => !prev)}
          className={cn(
            "cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2",
            !isCamToggledOn && "bg-red-500"
          )}
        >
          {isCamToggledOn ? <Video /> : <VideoOff />}
        </button>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-600 px-4 py-2.5"
        onClick={handleOnClick}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
