import type { LucideProps } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  descri: string;
}

const PartyCard = ({ label, icon: Icon, descri }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full bg-black-100 flex items-center justify-start gap-[10px] rounded-[15px] p-[16px] cursor-pointer">
          <div className="bg-white rounded-[10px] p-[20px]">
            <Icon size={20} color="black" />
          </div> 
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-[16px] text-white">{ label }</p>
            <p className="text-[8px] text-white text-start">{ descri }</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <form action="" className="flex flex-col gap-[10px]">
          <DialogHeader>
            <DialogTitle>create { label }</DialogTitle>
            <DialogDescription>
              { descri }
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Room Name</Label>
              <Input id="name-1" name="roomName"/>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default PartyCard