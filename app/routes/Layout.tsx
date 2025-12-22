import { Outlet } from "react-router"
import NavBar from "~/components/NavBar"
import SideBar from "~/components/SideBar"

const Layout = () => {
  return (
    <div className="grid grid-cols-12 bg-black-100">
      <div className="col-span-2 h-screen">
        <SideBar />
      </div>
      <div className="col-span-10 flex flex-col h-screen">
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout