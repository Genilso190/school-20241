import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export default function NavBar(){
    return(
        <div className=" flex justify-between p-6 border-b-2">
            <h1>Logo</h1>
            <a href="/admin">Home</a>
            <a href="/admin/student">Navegar Estudante</a>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

        </div>

    )

}