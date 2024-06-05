import { Button } from "@/components/ui/button";

import Listcourse from "./List";


export default function Course() {
    return (
        <div className="w-full flex flex-col justify-center mt-6">

            <div className=" flex justify-center mb-6">
                <a href="/admin/componets/course/new">
                <Button>Cadastrar curso</Button>
                </a>
            </div>
            <Listcourse />
        </div>

    )
}