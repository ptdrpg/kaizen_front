import { LogOut, Power } from "lucide-react";
import { useLocation } from "react-router"

const NavBar = () => {
  const locate = useLocation();
  return (
    <div className="w-full pt-[10px] pb-[10px] pl-[20px] pr-[20px] flex items-center justify-between">
      <p className="font-black text-[16px] text-white">{ locate.pathname === "/" ? "Menu" : locate.pathname === "/settings" ? "Settings" : "Community" }</p>
      <div className="flex items-center gap-[10px] cursor-pointer">
        <p className="text-white text-[12px]">Logout</p>
        <Power size={16} color="white" />
      </div>
    </div>
  )
}

export default NavBar