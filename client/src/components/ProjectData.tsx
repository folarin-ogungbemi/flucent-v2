
interface IProjectData {
    id:number;
    name:string;
    image: string;
    description: string;
    github:string;
    url:string;
    technology: Array<string>;
}

export const projectData:Array<IProjectData> = [
    {
        id:1, 
        name:"Gosip Bookstore",
        description: "Gosip Bookstore demonstrates the functionalities of an E-commerce website specifically with a B2C(Business to Customer) relationship.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1687755600/gosip_bookstore_pxwy9g.jpg",
        github:"https://github.com/folarin-ogungbemi/Gosip-Bookstore",
        url:"https://flo-gosip.herokuapp.com/",
        technology:["HTML", "CSS", "Bootstrap", "Javascript", "Django", "Python", "postgreSQL", "Stripe", "Google Cloud", "Git", "Agile", "Heroku"]
    },
    {
        id:2,
        name:"Yabash",
        description: "Yabash is a restaurant application created majorly with the python Django functionality. The restaurant can take orders from a user and store the booking details in the user's booking records for later access.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1687755129/yabash_main-page_s6uc1l.png",
        github:"https://github.com/folarin-ogungbemi/Yabash-GmbH",
        url:"https://flo-yabash.herokuapp.com/",
        technology:["HTML", "CSS", "Bootstrap", "Javascript", "Google Cloud", "Python", "Django", "postgreSQL", "Git", "Agile", "Heroku"]
    },
    {
        id:3,
        name:"Kologram",
        description: "Kologram is a simple project tracker built with Python in connection with google sheets API to keep track of users' interested financial projects and store user data in google sheets.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1687756266/kologram_igpn3n.png",
        github:"https://github.com/folarin-ogungbemi/kologram",
        url:"https://flo-kologram.herokuapp.com/",
        technology:["Python", "Google Cloud", "Heroku", 'Git']
    },
    {
        id:4,
        name:"Twain Land",
        description: "Twain-land introduces the famous concentration game that both young and old enjoy playing. However, twain-land takes a little tweak by tending towards incorporating a flash card for learning about different countries in the world and pairing them with their corresponding flag colours.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1687756266/twaingame_mockup_nzpx1n.png",
        github:"https://github.com/folarin-ogungbemi/twain-land",
        url:"https://folarin-ogungbemi.github.io/twain-land/",
        technology:["HTML", "CSS", "Javascript", 'Git']
    }
]

export const groupProjectData:Array<IProjectData> = [
    {
        id:1,
        name:"EmpowerEd",
        description: "EmpowerEd is an educational platform developed with the aim to provide education resources to underprivileged children. The application has a range of features to make learning interactive, accessible and engaging for students while also allowing students to connect with mentors, and providing the avenue for parents to communicate conveniently with teachers.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1687755759/EmpowerEd_i4kyiw.jpg",
        github:"https://github.com/folarin-ogungbemi/EmpowerEd-v1-Hackthon",
        url:"https://team4-empowered.herokuapp.com/",
        technology:["HTML", "CSS", "Bootstrap", "Javascript", "Django", "Python", "postgreSQL", "Typescript", "React", "Google Cloud", "Git", "Agile", "Heroku"]
    },
]