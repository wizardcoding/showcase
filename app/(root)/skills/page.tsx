import skills from '@/constants/skills';
import { Cursor } from "react-simple-typewriter";
import TypeWriter from "@/components/ui/TypeWriter";
import SkillCard from '@/components/SkillCard';
import Competencies from '@/components/Competencies';
import { countSkills, countLanguages } from '@/lib/utils'
import GridProjects from '@/components/GridProjects';



const Skills = () => {
  const skillInfo: Array<skillCondensation> = countSkills(skills);
  // const languagesInfo: Array<skillCondensation> = countLanguages(skills);
  
  return (
    <div className="xl:w-full flex flex-col items-start md:w-10/12 mt-0 md:mt-10">
      
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
        <Competencies dataList={skillInfo} />
        {/* <Competencies dataList={languagesInfo} /> */}
        <div className='flex 
            items-start 
            justify-between w-full'>
          <GridProjects/>
        </div>
    </div>
  )
}

export default Skills