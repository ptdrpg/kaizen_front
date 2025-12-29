import { useLocation, useNavigate } from "react-router"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import NewFriendsForm from "./NewFriendsForm";


const ComNav = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-start gap-[20px] pl-[20px] pt-[10px] pb-[10px] border-b border-gray-400 border-t">
      <p className={`font-bold text-[12px] cursor-pointer p-[10px] ${locate.pathname.split("/")[2] === "people" ? "border-b border-white" : ""}`} onClick={() => navigate("/community/people")} >People</p>
      <p className={`font-bold text-[12px] cursor-pointer p-[10px] ${locate.pathname.split("/")[2] === "guild" ? "border-b border-white" : ""}`} onClick={() => navigate("/community/guild")}>Guild</p>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black font-bold text-[12px] cursor-pointer">Add Friend</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-100">
          <DialogTitle>Add friends</DialogTitle>
          <DialogDescription>
            Find new friends
          </DialogDescription>
        <NewFriendsForm />
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default ComNav