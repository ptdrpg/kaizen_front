import { useLayoutEffect, useState } from 'react'
import { useConfirmFriendRequest, useDeclineFriendRequest, useSendFriendRequest } from '~/query/friends/friend-query';
import { getUserDataToLocalStorage } from '~/utils/local-storage.utils';

type Props = {
  id: string;
  username: string;
  isAdding: boolean;
  status?: string;
}

const FriendRequestCard = ({ username, id, isAdding, status }: Props) => {

  const [usrId, setUsrId] = useState<string>("");
  const [buttonLabel, setButtonLabel] = useState<string>("");

  useLayoutEffect(()=> {
    const usrData = getUserDataToLocalStorage();
    if(usrData){
      setUsrId(usrData.id)
    }
  },[])

  const { mutate: confirmRequest } = useConfirmFriendRequest(id, usrId);
  const { mutate: sendFriendRequest } = useSendFriendRequest();
  const { mutate: declineRequest } = useDeclineFriendRequest(usrId);

  const handleConfirmRequest = () => {
    if (!isAdding) {
      confirmRequest();
    } else {
      sendFriendRequest({
        receiver_id: id,
        sender_id: usrId,
      })
      setButtonLabel("Pending")
    }
  }

  const handleDeclineRequest = () => {
    declineRequest(id)
  }

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-[10px] cursor-pointer">
        <div className={`w-[30px] h-[30px] ${!isAdding ? "bg-white" : "bg-amber-400"} rounded-[5px] text-black flex items-center justify-center`}>
          <p className="text-[20px] font-bold">{username.split("")[0].toUpperCase()}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[12px] font-bold">{username}</p>
          {!isAdding && <p className="text-[8px]">Now</p>}
        </div>
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <button className={` text-white px-[10px] py-[5px] rounded-[5px] text-[12px] ${buttonLabel != "Pending" ? "cursor-pointer bg-emerald-300": "bg-gray-400"}`} onClick={handleConfirmRequest}>{ isAdding ? status == "accepted"? "Friends" : "Invite" : buttonLabel == "Pending" ? "Pending" : "Accept" }</button>
        {
          !isAdding && (
            <button className="bg-red-400 text-white px-[10px] py-[5px] rounded-[5px] text-[12px] cursor-pointer" onClick={handleDeclineRequest}>Decline</button>
          )
        }
      </div>
    </div>
  )
}

export default FriendRequestCard