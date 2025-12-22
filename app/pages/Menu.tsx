import PartyCard from "~/components/PartyCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { newGame } from "~/static/party"

const Menu = () => {
  return (
    <div className="grid grid-cols-4 p-[20px]">
      <div className="col-span-3">

      </div>
      <div className="flex flex-col gap-[10px] text-white">
        <Tabs defaultValue="account" className="bg-black-300 rounded-[10px]">
          <TabsList className="w-full border-b border-b-gray-400/75 flex items-center justify-center p-[10px] text-[12px] bg-black-300 rounded-t-[10px]">
            <TabsTrigger value="account" className="data-[state=active]:bg-black-100 text-white cursor-pointer">Create</TabsTrigger>
            <TabsTrigger value="password" className="data-[state=active]:bg-black-100 text-white cursor-pointer">Join</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="w-full p-[10px] flex flex-col gap-[10px]">
              {
                newGame.map((item, index) => (
                  <PartyCard key={index} label={item.label} icon={item.icon} descri={item.descri} />
                ))
              }
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="w-full p-[10px] flex flex-col gap-[10px]">
              
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Menu