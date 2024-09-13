import skills from '@/constants/skills';
import { Separator } from "@/components/ui/separator"

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
    <>
        {cards}
    </>
  )
}

export default Skills