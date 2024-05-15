import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "./ModeToggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Cable, DoorClosed, User } from "lucide-react"
import { MenuNav } from "./MenuNav"
export default function NavBar() {
    return (
        <div className=" flex justify-between p-6 border-b-2">
            <img src="/img/utfpr.jpg" className="size-[7%] lg:size [10%]"/>
           
           <MenuNav/>

            <div className="flex space-x-4">
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>

                        <Avatar>
                            <AvatarImage src="data:image/jpeg;base64,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" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem >
                            <User /><label>Usuário</label>

                        </DropdownMenuItem>
                        <DropdownMenuItem >
                            <DoorClosed /><label>Sair</label>
                        </DropdownMenuItem>
                        <DropdownMenuItem >

                            <Cable/> <label>Conexões</label>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>

    )

}