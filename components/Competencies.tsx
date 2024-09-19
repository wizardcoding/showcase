"use client";
import SkillInfo from './ui/SkillInfo';

function Competencies(props: Icompetencies) {
  const { dataList } =props;
  
  return (
    <div className="grid 2xl:grid-cols-10 xl:grid-cols-9 lg:grid-rows-2 lg:grid-cols-6 sm:grid-rows-2 sm:grid-cols-3 gap-3 gap-x-6">
      { dataList.length > 0 && dataList.map((data: skillCondensation) => {
          const name: string = Object.keys(data).pop()! || '';
          const progressValue: number = parseInt('' + Object.values(data).pop()!) || 0;
          return <SkillInfo key={Math.random()} name={name} progressValue={progressValue}/>
        })}
    </div>
  )
}

export default Competencies