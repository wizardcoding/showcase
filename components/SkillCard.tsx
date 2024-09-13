"use client";
import { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
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
    <Card className=' mim-w-[400px] bg-slate-800 border-slate-600 text-white'>
            <CardHeader>
                <CardTitle className='mb-2 justify-between flex text-slate-300'>
                  <span className='text-xl'>{project}</span>
                  <PlusCircleIcon 
                    onClick={() => setViewMore(!viewMore)} 
                    className={`cursor-pointer hover:text-blue-600 ${viewMore && 'text-blue-600'}`}/>  
                </CardTitle>
                <CardDescription className='text-slate-400'>{description}</CardDescription>
            </CardHeader>
            {viewMore ? (<CardContent>
                <h3 className='text-slate-300 mb-2 text-lg font-semibold'>Responsibilities:</h3>
                <ScrollArea className="h-36 w-full rounded p-3">
                  {responsibilities.map(task => (
                      <div key={Math.random()} className='my-1 border-y border-slate-800 hover:border-blue-600'>
                          <div className='my-1 text-slate-400' key={Math.random()}><span className='ml-1'>{task}</span></div>
                      </div>
                  ))}
                </ScrollArea>
            </CardContent>) : (<CardContent>
                <h3 className='text-slate-300 mb-2 text-lg font-semibold'>Technologies:</h3>
                <ScrollArea className="h-36 w-full rounded p-3">
                  {techs.map(tech => (
                      <div key={Math.random()} className='my-1 border-y border-slate-800 hover:border-slate-300'>
                          <div className='my-1 text-slate-400' key={Math.random()}><span className='ml-1'>{tech}</span></div>
                      </div>
                  ))}
                </ScrollArea>
            </CardContent>)}
        </Card>
  )
}

export default SkillCard