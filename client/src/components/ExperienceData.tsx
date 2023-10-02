interface IExperienceData{
    id:number;
    startDate: string;
    endDate: string;
    position: string;
    company: string;
    role: string;
    url:string;
    content:string
    technology:Array<string>
}

export const ExperienceData:Array<IExperienceData> = [
    {
        id:1,
        startDate:'09/2023',
        endDate:'present',
        position:'Teaching',
        company:'ReDi',
        role: 'Teacher',
        url:'https://www.redi-school.org/redi-school-berlin',
        content:'Assisted student in learning how to use computer ....',
        technology:['elementary computer science']
    },
    {
        id:2,
        startDate:'02/2023',
        endDate:'present',
        position:'Fullstack Development',
        company:'FlucentDev',
        role: 'Fullstack Developer',
        url:'https://folarin-ogungbemi.herokuapp.com/',
        content:'Designing and developing software applications',
        technology:["React", "Typescript", "Tailwind", "Javascript", "E-Commerce", "Python", "Django", "DRF", "JWT", "postgreSQL", "Git", "Agile", "Heroku"]
    },
    {
        id:3,
        startDate:'05/2023',
        endDate:'08/2023',
        position:'Community Lead',
        company:'Code Institute',
        role: 'Javascript Channel Lead',
        url:'https://codeinstitute.net/',
        content:'Assisted student in querying their programs ....',
        technology:['javascript', 'html', 'css', 'slack', 'github']
    },
]