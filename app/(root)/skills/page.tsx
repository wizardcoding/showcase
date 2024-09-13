import skills from '@/constants/skills';
import { Cursor } from "react-simple-typewriter";
import TypeWriter from "@/components/ui/TypeWriter";
import SkillCard from '@/components/SkillCard';

const Skills = () => {

  return (
    <div className="xl:w-full flex flex-col items-start md:w-10/12 mt-0 md:mt-20">
        <h1 className="
            mb-10
            text-3xl
            lg:text-5xl
            font-semibold">
          <span className="mr-3 text-slate-300">
            <TypeWriter words={["Skills I Crafted", "projects I worked", "technologies I used before", "and currently."]}/>
            <Cursor
              cursorBlinking={true}
              cursorStyle={"/"}
              cursorColor="#2563EB"/>
          </span>
        </h1>
        <div className='flex 
            items-start 
            justify-between w-full'>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-rows-2 lg:grid-cols-2 sm:grid-rows-2 sm:grid-cols-2 gap-4">
            { skills.map((data) => (
              <SkillCard key={Math.random()} {...data}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Skills