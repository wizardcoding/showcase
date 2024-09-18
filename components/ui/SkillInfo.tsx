import { Progress } from '@/components/ui/progress';

const SkillInfo = (props: IskillListInfo) => {
    const { name = '', progressValue = 0} = props;
    return (
        <div className='min-w-24' key={Math.random()}>
            <span className='text-slate-300 font-semibold mb-2'>{name} :</span>
            <Progress
                className='bg-slate-800  border border-slate-700 max-w-22' 
                indicatorColor='bg-blue-600' 
                value={progressValue * 9} />
        </div>
    )
}

export default SkillInfo