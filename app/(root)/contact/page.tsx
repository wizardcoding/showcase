import { MapPinIcon, MailIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";


const Contact = () => {
  const classInput = "border-slate-500 text-slate-500 px-6 py-4";
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:text-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="tracking-[20px] text-center uppercase text-slate-500 text-2xl">
        Contact
      </h3>
      <div className="space-y-5">
        <div className="text-slate-600 flex items-center space-x-5 justify-center">
          <MailIcon className="h-8 w-8 animate-pulse" />
          <p className="text-xl text-center">wizardcodingmachine@gmail.com</p>
        </div>
        <div className="text-slate-600 flex items-center space-x-5 justify-center">
          <MapPinIcon className="h-8 w-8 animate-pulse" />
          <p className="text-xl text-center">Tokyo, Japan</p>
        </div>
      </div>
      <form className="flex flex-col space-y-2 lg:w-80 sm:w-full mx-auto">
        <div className="space-y-2">
          <Input className={classInput} placeholder="Name" type="text"/>
          <Input className={classInput} placeholder="Email" type="email"/>
        </div>
        <Input className={classInput} placeholder="Subject" type="text"/>
        <Textarea className={classInput} placeholder="Message"/>
        <Button className="bg-blue-500 px-4 py-3 rounded-sm text-slate-300" type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Contact