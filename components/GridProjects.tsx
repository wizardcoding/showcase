"use client";
import SkillCard from '@/components/SkillCard';
import { useAppSelector } from '@/lib/hooks';


const GridProjects = () => {
  const { projects } = useAppSelector(state=>state.projects);

  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-rows-2 lg:grid-cols-2 sm:grid-rows-2 sm:grid-cols-2 gap-4">
    {projects.map((data) => (
        <SkillCard key={Math.random()} {...data}/>
    ))}
    </div>
  )
}

export default GridProjects