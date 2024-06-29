import hscimg from '../assets/orglogos/hsc.png'
import tangleimg from '../assets/orglogos/tangle.jpeg'
import sigbedimg from '../assets/orglogos/sigbed.png'
import acmimg from "../assets/orglogos/acm.jpeg"
import tictactoeImg from '../assets/projectss/tictactoe.png'
import sigbedImg from '../assets/projectss/sigbed.png'
import mailflowImg from '../assets/projectss/mailflow.png'
import portfolioImg from '../assets/projectss/portfolio.png'

import JavaLogo from '../assets/skillLogos/LanguagesLogos/java.svg'
import JsLogo from '../assets/skillLogos/LanguagesLogos/js.svg'
import SqlLogo from '../assets/skillLogos/LanguagesLogos/sql.svg'
import TsLogo from '../assets/skillLogos/LanguagesLogos/ts.svg'
import ExpressLogo from '../assets/skillLogos/FrameworksLogos/express.png'
import ReactLogo from '../assets/skillLogos/FrameworksLogos/react.svg'
import NextLogo from '../assets/skillLogos/FrameworksLogos/next.svg'
import SpringLogo from '../assets/skillLogos/FrameworksLogos/spring.svg'
import MySqlLogo from '../assets/skillLogos/DBLogos/mysql.svg'
import PostGreSQLLogo from '../assets/skillLogos/DBLogos/postgres.svg'
import MongodbLogo from '../assets/skillLogos/DBLogos/mongodb.svg'
import FirebaseLogo from '../assets/skillLogos/DBLogos/firebase.svg'
import DockerLogo from "../assets/skillLogos/CI/dockerLogo.svg"
import GitLogo from "../assets/skillLogos/CI/gitLogo.svg"
import GithubLogo from "../assets/skillLogos/CI/githubLogo.svg"
import FigmaLogo from "../assets/skillLogos/UILogos/figmaLogo.svg"
import TailwindLogo from "../assets/skillLogos/UILogos/tailwindLogo.svg"
import ThreeLogo from "../assets/skillLogos/UILogos/threejsLogo.svg"








export const Languages= [`Java`, "TypeScript", "JavaScript", "SQL"];
export const LanguagesLogos = [JavaLogo,TsLogo,JsLogo,SqlLogo];
export const Frameworks= ["Next.js", "React.js", "Express.js", "Spring Boot"];
export const FrameworksLogos=[NextLogo,ReactLogo,ExpressLogo,SpringLogo];
export const Database= ["MongoDB", "MySQL", "PostGreSQL","Firebase"];
export const DatabaseLogos=[MongodbLogo,MySqlLogo,PostGreSQLLogo,FirebaseLogo];
export const CICD= ["Git", "Github", "Docker"];
export const CICDLogos=[GitLogo,GithubLogo,DockerLogo];
export const UI=["Figma", "Tailwind", "3js"];
export const UILogos=[FigmaLogo,TailwindLogo,ThreeLogo];

export const Experience= {
    "Hughes Systique Corporation (HSC)": {
        "logo":hscimg,
        "Role":"Software Engineer Intern",
        "Type":"Internship",
        "StartDate":"Jan 2024",
        "EndDate":"Present",
        "Location": "Gurgaon",
        "Technologies":["Core Java","Spring Framework","Spring Boot","React.js","MySQL"]
    },
    "Tangle": {
        "logo":tangleimg,
        "Role":"SDE Intern",
        "Type":"Internship",
        "StartDate":"Oct 2022",
        "EndDate":"May 2023",
        "Location": "Remote",
        "Technologies":["React.js","Tailwind CSS","Node.js","Express.js","MongoDB"]
    },
}

export const VolExperience= {
    "MUJ ACM SIGBED Student Chapter": {
        "logo":sigbedimg,
        "Role":"Vice Chairperson",
        "Type":"Volunteer",
        "StartDate":"Sept 2022",
        "EndDate":"April 2023",
        "Location": "Jaipur",
        "Desc":"ACM SIGBED is a focal point within the Association for Computing Machinery (ACM) for all aspects of embedded computing systems and cyber-physical systems, including both software and hardware. I Organised the biggest IOT events of Jaipur at Manipal University, like Sigfest and Autobots, witnessing a massive participation of 800+ individual participants while managing a working team of 60+ members of MUJ SIGBED Student Chapter"
    },
    "ACM COMPUTE": {
        "logo":acmimg,
        "Role":"Student Lead",
        "Type":"Volunteer",
        "StartDate":"Nov 2022",
        "EndDate":"Dec 2022",
        "Location": "Jaipur",
        "Desc":"COMPUTE is ACM India’s national flagship conference on Computer Science Education. COMPUTE 2022 was hosted by Manipal University Jaipur, with the participation of 70+ esteemed faculties and researchers from all parts of the country, and witnessed esteemed speakers like Mr. Sriram Rajamani (Managing Director of Microsoft Research India), Mr. Andrew Thangaraj (Prof. IIT Madras), Mr. Brett Becker (Vice-Chair of SIGCSE) and many more. I was responsible for directing the development of all the media content for the event"
    },
}

export const ProjectInfo ={
    "Portfolio Website":{
        'Desc':'My portfolio website, a dynamic and interactive showcase of my professional journey, skills, and projects. Built using React, React Router DOM, Tailwind CSS, Vite, Three.js, and React Three Fiber, this website also features rich interactions with 3D models. The integration of Three.js allows for immersive 3D model interactions, adding a unique visual depth and interactivity that enhances the overall user experience.',
        'GithubLink':'https://github.com/Mrityunjay20/portfolio',
        'websiteLink':'https://mjxsh.vercel.app/',
        'imglink':portfolioImg
    },
    "MailFlow":{
        'Desc':'MailFlow is an AI tool designed for managing emails, built with Google PaLM, Google Cloud Platform, MongoDB, and express.js. It generates and paraphrases professional emails from minimal input, saves them, and can send or schedule emails directly through Gmail. (work in progress)',
        'GithubLink':'https://github.com/Mrityunjay20/mailflow-frontend',
        'websiteLink':'#',
        'imglink':mailflowImg
    },
    "MUJ ACM SIGBED":{
        'Desc':'SIGBED (Special Interest Group on Embedded Systems) is a global organization that focuses on research and development in embedded systems. This website serves as a platform to showcase the activities, events, and achievements of the SIGBED MUJ Student Chapter. It is built using NEXT.js, supabase, tailwind and Material-Tailwind. This website also won National ACM website Award 2023',
        'GithubLink':'https://github.com/Mrityunjay20/sigbed',
        'websiteLink':'https://mujsigbed.acm.org/',
        'imglink':sigbedImg
    },
    "TicTacToe":{
        'Desc':'This is a simple Tic Tac Toe game built using React, leveraging React states to manage the game state and user interactions. The project provides a classic Tic Tac Toe experience where two players take turns to make their moves and the game declares a winner or ends in a draw.',
        'GithubLink':'https://github.com/Mrityunjay20/TicTacToe',
        'websiteLink':'https://mjx-tictactoe.vercel.app/',
        'imglink':tictactoeImg
    },
    

}
