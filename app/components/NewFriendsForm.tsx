import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"


const NewFriendsForm = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <form action="" className="w-full">
        <div className="w-full flex items-center justify-center gap-[10px] py-[10px]">
          <Input placeholder="Search username" className="bg-white" />
          <Button className="text-[12px]"><Search size={16} /></Button>
        </div>
      </form>
      <Separator orientation="horizontal" />
      <div className="flex flex-col gap-[10px]">
        <div className="p-[10px]">
          <p className="text-[12px] font-bold text-gray-500">People</p>
        </div>
        <div></div>
      </div>

    </div>
  )
}

export default NewFriendsForm