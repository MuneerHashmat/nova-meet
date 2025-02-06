"use client"

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


const EndCallButton = () => {
    const call=useCall();
    const router=useRouter();

    const {useLocalParticipant}=useCallStateHooks();
    const localParticipant=useLocalParticipant();

    const isMeetingOwner=localParticipant && call?.state.createdBy && localParticipant.userId=== call.state.createdBy.id;

    const handleOnClick=async ()=>{
        await call?.endCall();
        router.push("/");
    }

    if(!isMeetingOwner) return null;
  return (
    <Button 
    className="bg-red-500"
    onClick={handleOnClick}>
        End Call
    </Button>
  )
}

export default EndCallButton