import skills from '@/constants/skills';
import { Separator } from "@/components/ui/separator"
import { Cursor } from "react-simple-typewriter";
import TypeWriter from "@/components/ui/TypeWriter";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const Skills = () => {
    const cards = skills.map((data) => (
        <Card key={Math.random()} className='max-w-[350px] bg-slate-800 text-white'>
            <CardHeader>
                <CardTitle>{data.skill}</CardTitle>
                <CardDescription className='text-slate-300'>{data.description}</CardDescription>
            </CardHeader>
            <CardContent className='overflow-y-auto'>
                <h3 className='text-slate-300 mb-2 text-2xl font-semibold'>Projects:</h3>
                {data.projects.map(project => (
                    <>
                        <Separator />
                        <p className='my-1' key={Math.random()}><span>{project}</span></p>
                    </>
                ))}
            </CardContent>
        </Card>
    ));

  return (
    <div className="w-full flex flex-col items-start md:w-2/4 mt-0 md:mt-20">
        <h1 className="
            mb-10
            text-3xl
            lg:text-5xl
            font-semibold">
          <span className="mr-3 text-slate-300">
            <TypeWriter words={["Skills I Crafted","And projects I worked over the time."]}/>
            <Cursor
              cursorBlinking={true}
              cursorStyle={"/"}
              cursorColor="#2563EB"/>
          </span>
        </h1>
        {cards}
    </div>
    
  )
}

export default Skills