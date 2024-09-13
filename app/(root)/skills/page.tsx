import skills from '@/constants/skills';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const Skills = () => {
    const cards = skills.map((data) => (
        <Card key={Math.random()}>
            <CardHeader>
                <CardTitle>{data.skill}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent>
                {data.projects.map(project => (
                    <p className='my-1' key={Math.random()}>{project}</p>
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