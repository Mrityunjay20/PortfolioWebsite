import hscimg from '../assets/orglogos/hsc.png'
import tangleimg from '../assets/orglogos/tangle.jpeg'
import sigbedimg from '../assets/orglogos/sigbed.png'
import acmimg from "../assets/orglogos/acm.jpeg"

export const SkillSet = [
    {
        "Languages": ["Java", "TypeScript", "JavaScript", "SQL"],
        "Frameworks/Libraries": ["Next.js", "React.js", "Express.js", "Spring Boot"],
        "Database": ["MongoDB", "MySQL", "Firebase", "Supabase"],
        "CI/CD": ["Git", "Github", "Docker"]
    }
];

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
        "StartDate":"Oct 2023",
        "EndDate":"Dec 2023",
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
        "StartDate":"Nov 2022 ",
        "EndDate":"Dec 2022",
        "Location": "Jaipur",
        "Desc":"COMPUTE is ACM India’s national flagship conference on Computer Science Education. COMPUTE 2022 was hosted by Manipal University Jaipur, with the participation of 70+ esteemed faculties and researchers from all parts of the country, and witnessed esteemed speakers like Mr. Sriram Rajamani (Managing Director of Microsoft Research India), Mr. Andrew Thangaraj (Prof. IIT Madras), Mr. Brett Becker (Vice-Chair of SIGCSE) and many more. I was responsible for directing the development of all the media content for the event"
    },
}

export const ProjectInfo ={
    "MailFlow":{
        'Desc':'MailFlow is an AI tool designed for managing emails, built with Google PaLM, Google Cloud Platform, MongoDB, and node.js. It generates and paraphrases professional emails from minimal input, saves them, and can send or schedule emails directly through Gmail.',
        'GithubLink':'https://github.com/Mrityunjay20/mailflow-frontend',
        'websiteLink':'https://mailflowai-ten.vercel.app/'
    },
    "TicTacToe":{
        'Desc':'This is a simple Tic Tac Toe game built using React, leveraging React states to manage the game state and user interactions. The project provides a classic Tic Tac Toe experience where two players take turns to make their moves and the game declares a winner or ends in a draw.',
        'GithubLink':'https://github.com/Mrityunjay20/TicTacToe',
        'websiteLink':'https://mjx-tictactoe.vercel.app/'
    }

}
