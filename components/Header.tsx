"use client";
import { Button } from "@/components/ui/button";
import { Slash } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'
  
const Header = () => {
    const pathName = usePathname();
  return (
    <header className="py-2 px-1 hidden sm:block">
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
            <section >
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
                        {pathName === '/' ? <BreadcrumbPage className="text-white font-semibold">About</BreadcrumbPage>
                            : <BreadcrumbLink className="text-slate-400 hover:text-white cursor-pointer" href="/">About</BreadcrumbLink>}
                    </BreadcrumbItem>
                    <Slash />
                    <BreadcrumbItem>
                        {pathName === '/skills' ? <BreadcrumbPage className="text-white font-semibold">Skills</BreadcrumbPage>
                            : <BreadcrumbLink className="text-slate-400 hover:text-white cursor-pointer" href="/skills">Skills</BreadcrumbLink>}
                    </BreadcrumbItem>
                    <Slash />
                    <BreadcrumbItem>
                        {pathName === '/contact' ? <BreadcrumbPage className="text-white font-semibold">Contact</BreadcrumbPage>
                            : <BreadcrumbLink className="text-slate-400 hover:text-white cursor-pointer" href="/contact">Contact</BreadcrumbLink>}
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            </section>
            <section className="flex space-x-3 items-center">
                <a target="_blank" href="https://www.linkedin.com/in/francisco-huizar-9a6420aa/">
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
                </a>
                <a target="_blank" href="https://github.com/wizardcoding">
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
                </a>
            </section>
        </div>
    </header>
  )
}

export default Header