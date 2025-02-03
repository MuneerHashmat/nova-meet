"use client";

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setIsMikeCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("usecall must be used within StreamCall component");
  }

  const handleOnClick = () => {
    call.join();
    setIsSetupComplete(true);
  };
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col justify-center items-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] h-[50vh] md:h-[60vh] lg:h-[70vh] text-center mt-4">
        <VideoPreview />
      </div>
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMikeCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
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
