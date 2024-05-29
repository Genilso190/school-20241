//comentado essa parte 

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export default function NewStudent() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button >Cadastrar Estudante</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Cadastrar Estudante</DialogTitle>
//           <DialogDescription>
//            Incluia os dados do estudante e clique em SALVAR.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input
//               id="name"
//               defaultValue="Genilso Carraro"
//               className="col-span-3"
//             />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Email
//             </Label>
//             <Input
//               id="username"
//               defaultValue="@Email"
//               className="col-span-3"
//             />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="submit">Salvar</Button>
//           <DialogClose asChild>
//             <Button type="button" variant="secondary">
//               Fechar
//             </Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }
