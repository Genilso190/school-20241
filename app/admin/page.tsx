
import { Button } from "@/components/ui/button"
import { MenuSheet } from "./componets/MenuSheet"

export default function () {
    return (
        <div>

            <h1 className="">Bem vindo a Area Administrativa</h1>
            <Button>Salvar</Button>
            <Button variant="destructive">Excluir</Button>
            <Button variant="secondary">Novo</Button>

          <MenuSheet/>

        </div>
    )
}