import provisoir from "~/assets/domoina.JPG"


const UserCard = () => {

  return (
    <div className="w-full flex items-center justify-start gap-[10px] p-[10px] bg-black-100 rounded-[5px] cursor-pointer">
      <img src={provisoir} alt="provisoir" className="w-[30px] h-[30px] rounded-[10px] object-cover" />
      <div className="flex flex-col">
        <p className="text-white font-black text-[12px]">Username</p>
        <p className="text-gray-400 text-[8px]">exemple@gmail.com</p>
      </div>
    </div>
  )
}

export default UserCard