import SideList from "./SideList"
import UserCard from "./UserCard"
import { sideLink } from "~/static/link"

const SideBar = () => {
  return (
    <div className="h-screen bg-black-300 border-r-gray-400 border-r-[0.25px] flex flex-col">
      <div className="w-full p-[10px]">
        <UserCard />
      </div>
      <div className="w-full p-[10px] flex flex-col gap-[10px] border-b-gray-400 border-b-[0.25px]">
        {
          sideLink.map((l, i) => (
            <SideList icon={l.icon} label={l.label} link={l.link} key={i} />
          ))
        }
      </div>
      <div className="w-full p-[10px]">
        <p className="text-[12px] text-gray-400">Direct messages</p>
      </div>
    </div>
  )
}

export default SideBar