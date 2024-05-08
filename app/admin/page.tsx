import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function () {
    return (
        <div>

        <h1 className="">Bem vindo a Area Administrativa</h1>
        <Button>Salvar</Button>
        <Button variant="destructive">Excluir</Button>
        <Button variant="secundary">Novo</Button>
        <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
</Avatar>


        </div>
    )
}