"use client";
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { useAppDispatch, useAppStore } from '@/lib/hooks';
import {filterAdded, filterRemoved} from '@/lib/features/filterSlice';
import { projectData } from '@/lib/features/projectsSlice';

const SkillInfo = (props: IskillListInfo) => {
    const { name = '', progressValue = 0} = props;
    const [clicked, setClicked] = useState(false);
    const dispatch = useAppDispatch();
    const store = useAppStore();
const actionHandle = () => {
      const { filters } = store.getState();
      setClicked(!clicked)
      console.log('filters.filter: ', filters.filter)
        if(clicked) {
            dispatch(filterRemoved(name));
        } else {
            dispatch(filterAdded(name));
        }
        dispatch(projectData(filters.filter));
    }
    
    return (
        <div className='min-w-24 cursor-pointer' onClick={actionHandle}>
            <span className={`${ clicked ? 'text-blue-400' : 'text-slate-300'} font-semibold mb-2`}>{name} :</span>
            <Progress
                className='bg-slate-800  border border-slate-700 max-w-22' 
                indicatorColor='bg-blue-600' 
                value={progressValue * 9} />
        </div>
    )
}

export default SkillInfo