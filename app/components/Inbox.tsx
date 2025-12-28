import { useLayoutEffect, useState } from "react"
import { useGetFriendRequest } from "~/query/friends/friend-query";
import { getUserDataToLocalStorage } from "~/utils/local-storage.utils";
import FriendRequestCard from "./FriendRequestCard";


const Inbox = () => {
  const [usrId, setUserId] = useState<string>("");
  useLayoutEffect(()=> {
    const userData = getUserDataToLocalStorage();
    if(userData){
      setUserId(userData.id)
    }
  },[])

  const { data } = useGetFriendRequest(usrId);

  return (
    <div className="w-full h-full p-[20px] flex flex-col">
      <div>
        <p className="text-white font-bold text-[16px]">Friend Request</p>
      </div>
      <div className="flex flex-col gap-[20px] pt-[10px]">
        {
          !data ? <p className="text-gray-400 text-center text-[12px]">It's Quite for now</p> : data.map((f, i) => <FriendRequestCard key={i} id={f.id} username={f.username} />)
        }
      </div>
    </div>
  )
}

export default Inbox