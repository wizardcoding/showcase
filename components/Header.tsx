import { Button } from "@/components/ui/button";
import { Slash } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
  
const Header = () => {
  return (
    <header className="py-2">
        <div className="
            mx-10 
            sm:mx-auto 
            max-w-6xl 
            px-4 flex 
            items-center 
            justify-between 
            border 
            border-zinc-600 
            p-3 
            rounded-full"
        >
            <section>
                <span className="
                    text-xl 
                    text-white 
                    cursor-pointer 
                    font-bold 
                    ml-2">
                    {`Francisco `} 
                    <span className="text-slate-400 font-bold">
                        {`Huizar`}
                    </span>
                </span>
            </section>
            <section className="hidden sm:flex flex-row space-x-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-white font-semibold">About</BreadcrumbPage>
                    </BreadcrumbItem>
                    <Slash />
                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-slate-400 hover:text-white cursor-pointer" href="/">Skills</BreadcrumbLink>
                    </BreadcrumbItem>
                    <Slash />
                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-slate-400 hover:text-white cursor-pointer" href="/">Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            </section>
            <section className="flex space-x-3 items-center">
                <Button className="
                    cursor-pointer
                    hidden 
                    md:inline-block 
                    text-white 
                    bg-blue-500 
                    px-4 
                    py-2 
                    rounded-full 
                    hover:bg-blue-600">
                    Linkedin
                </Button>
                <Button className="
                    border 
                    cursor-pointer 
                    border-gray-500 
                    px-4 
                    py-2 
                    text-white 
                    rounded-full">
                    Github
                </Button>
            </section>
        </div>
    </header>
  )
}

export default Header