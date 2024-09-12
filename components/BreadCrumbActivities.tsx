import { Slash } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"

const BreadCrumbActivities = () => {
    const linkStyle = 'text-blue-400 hover:text-white cursor-pointer';
  return (
    <div className="text-blue-400 font-normal mt-4">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-white font-semibold">Coding</BreadcrumbPage>
                </BreadcrumbItem>
                <Slash />
                <BreadcrumbItem>
                    <BreadcrumbLink className={linkStyle} href="/">Learning</BreadcrumbLink>
                </BreadcrumbItem>
                <Slash />
                <BreadcrumbItem>
                    <BreadcrumbLink className={linkStyle} href="/">LifeStyle</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </div>
  );
}

export default BreadCrumbActivities