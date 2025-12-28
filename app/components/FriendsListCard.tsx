import { EllipsisVertical, MessageSquare } from "lucide-react";
import type { FriendsType } from "~/types/friends.type";

const FriendsListCard = ({ username, isOnline }: FriendsType) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-[10px] cursor-pointer">
        <div className="w-[30px] h-[30px] bg-white rounded-[5px] text-black flex items-center justify-center">
          <p className="text-[20px] font-bold">{username.split("")[0].toUpperCase()}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[12px] font-bold">{username}</p>
          <p className="text-[8px]">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="cursor-pointer">
          <MessageSquare size={16} color="white" />
        </div>
        <div className="cursor-pointer">
          <EllipsisVertical size={16} color="white" />
        </div>
      </div>
    </div>
  )
}

export default FriendsListCard