
import { Button } from "@/components/ui/button"
import { MenuSheet } from "./componets/MenuSheet"

export default function Admin () {
    return (
        <div>

            <h1 className="text-center">Bem vindo a Area Administrativa</h1>
            <Button>Salvar</Button>
            <Button variant="destructive">Excluir</Button>
            <Button variant="secondary">Novo</Button>

            <MenuSheet />

        </div>
    )
}