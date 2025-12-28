import { useLayoutEffect, useState } from 'react'
import { useConfirmFriendRequest } from '~/query/friends/friend-query';
import { getUserDataToLocalStorage } from '~/utils/local-storage.utils';

type Props = {
  id: string;
  username: string;
}

const FriendRequestCard = ({ username, id }: Props) => {

  const [usrId, setUsrId] = useState<string>("");

  useLayoutEffect(()=> {
    const usrData = getUserDataToLocalStorage();
    if(usrData){
      setUsrId(usrData.id)
    }
  },[])

  const { mutate: confirmRequest } = useConfirmFriendRequest(id, usrId);

  const handleConfirmRequest = () => {
    confirmRequest();
  }

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-[10px] cursor-pointer">
        <div className="w-[30px] h-[30px] bg-white rounded-[5px] text-black flex items-center justify-center">
          <p className="text-[20px] font-bold">{username.split("")[0].toUpperCase()}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[12px] font-bold">{username}</p>
          <p className="text-[8px]">Now</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <button className="bg-emerald-400 text-white px-[10px] py-[5px] rounded-[5px] text-[12px] cursor-pointer" onClick={handleConfirmRequest}>Accept</button>
        <button className="bg-red-400 text-white px-[10px] py-[5px] rounded-[5px] text-[12px] cursor-pointer">Decline</button>
      </div>
    </div>
  )
}

export default FriendRequestCard