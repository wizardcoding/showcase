import { MapPinIcon, MailIcon } from "lucide-react"
const Contact = () => {
  return (
    <div>
      <h3 className="tracking-[20px] text-center uppercase text-slate-500 text-2xl">
        Contact
      </h3>
      <div>
        <div>
          <MailIcon className="h-8 w-8 animate-pulse" />
          <p>wizardcodingmachine@gmail.com</p>
        </div>
        <div>
          <MapPinIcon className="h-8 w-8 animate-pulse" />
          <p>Tokyo, Japan</p>
        </div>
      </div>
    </div>
  )
}

export default Contact