"use client";
import { useState } from 'react';
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { PlusCircleIcon } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  declare interface IskillCardProps {
    project: string;
    description: string;
    responsibilities: string[];
    techs: string[];
  }

const SkillCard = (props: IskillCardProps) => {
  const {
    project = '',
    description = '',
    responsibilities = [],
    techs = []
  } = props;
  
  const [viewMore, setViewMore] = useState(false);

  return (
    <Card className='max-w-[400px] mim-w-[300px] bg-slate-800 text-white mx-10'>
            <CardHeader>
                <CardTitle className='mb-2 justify-between flex'>
                  {`${project} `}
                  <PlusCircleIcon 
                    onClick={() => setViewMore(!viewMore)} 
                    className={`cursor-pointer hover:text-blue-600 ${viewMore && 'text-blue-600'}`}/>  
                </CardTitle>
                <CardDescription className='text-slate-300'>{description}</CardDescription>
            </CardHeader>
            {viewMore ? (<CardContent>
                <h3 className='text-slate-300 mb-2 text-2xl font-semibold'>Responsibilities:</h3>
                <ScrollArea className="h-36 w-full rounded p-3">
                  {responsibilities.map(task => (
                      <div key={Math.random()}>
                          <p className='my-1' key={Math.random()}><span>{task}</span></p>
                          <Separator />
                      </div>
                  ))}
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </CardContent>) : (<CardContent>
                <h3 className='text-slate-300 mb-2 text-2xl font-semibold'>Technologies:</h3>
                <ScrollArea className="h-36 w-full rounded p-3">
                  {techs.map(tech => (
                      <div key={Math.random()}>
                          <p className='my-1' key={Math.random()}><span>{tech}</span></p>
                          <Separator />
                      </div>
                  ))}
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </CardContent>)}
        </Card>
  )
}

export default SkillCard