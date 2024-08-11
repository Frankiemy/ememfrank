import MyImage from './assets/images/me.jpeg';
import uImage from './assets/images/u.jpg';
import lImage from './assets/images/logo.jpg';
import landImage from './assets/images/land.jpg';
import "./header/style.css";

const logotext = "Frank Emem";
const meta = {
    title: "Emem Frank",
    description: "I’m Emem Frank data scientist _ Full stack developer, I'm a Free",
};

const introdata = {
    title: "Hello! I’m Emem Frank",
    animated: {
        first: "I love coding 💻",
        second: "I build robust backends 🔧",
        third: "I contribute to open-source projects 🌍",
    },
    description: "Welcome to My World.",
    your_img_url: MyImage,
};

// Inline CSS
const introImageStyle = {
    width: '10%', // Make the image responsive
    maxWidth: '50px', // Set a maximum width for the image
    height: 'auto', // Maintain aspect ratio
    borderRadius: '50%', // Optional: make the image circular
    objectFit: 'cover', // Ensure the image covers the entire container without distortion
    margin: '0 auto', // Center the image if it's inside a flexbox or text-align:center container
    display: 'block', // Center the image with margin auto
};

<img src={introdata.your_img_url} alt="Emem Frank" style={introImageStyle} />

const dataabout = {
    title: "Abit about my self",
    img: MyImage,
    aboutme: "As a dedicated and skilled Software Developer, I'm seeking opportunities to leverage my expertise in coding such as Flutter, Python, PHP, React.js, GoLand, Typescript to contribute effectively to innovate software projects. With solid eductional background from All Nations University College, koforidua Ghana, coupled with hands-on experience, I'm poised to deliver high quality solution and drive technology adavancements",
    
};

const education = [
    {
    title: "Kings & Queens Primary Nursety School.",
    city: "Uyo",
    state: "Akwa Ibom State",
    country: "Nigeria",
    year: "2002 - 2007",
},
{
    title: "Bright Stars Model Secodary.",
    city: "Uyo",
    state: "Akwa Ibom State",
    country: "Nigeria",
    year: "2007 - 20011",
},
{
    title: "All Nations University, College",
    city: "Koforidua",
    state: "Estern Region",
    country: "Ghana",
    year: "2011 - 2015",
},
{
    title: "Royal Arts Academy",
    city: "Uyo",
    state: "Akwa Ibom State",
    country: "Nigeria",
    year: "2020 - 2021",
},
];




const worktimeline = [{
        jobtitle: "Computer Instructor",
        where: "Women United For Economic Empowerment",
        date: "2022",
    },
    {
        jobtitle: "Program Manager / Coordinator ",
        where: "Women Initiative For Self Actulization",
        date: "2022",
    },
    {
        jobtitle: "Best In Cinematographer / Directing",
        where: "Royal Art Academy ",
        date: "2021",
    },
    {
        jobtitle: "Software Developer / IT Administrator",
        where: "St. Atanauos Hospital",
        date: "2023",
    },
    {
        jobtitle: "Freelancing",
        where: "Upwork, Fiverr",
        date: "Present",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "PHP",
        value: 100,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 97,
    },
    {
        name: "Jquery",
        value: 85,
    },
    {
        name: "Flutter",
        value: 95,
    },
    {
        name: "Java",
        value: 90,
    },
    {
        name: "Kotlin",
        value: 80,
    },
    {
        name: "Adobe Photoshop",
        value: 99,
    },
    {
        name: "Adobe Illustrator",
        value: 98,
    },
    {
        name: "InDesign",
        value: 99,
    },
];

const services = [{
        title: "Design",
        description: "Crafting intuitive and engaging user experiences, I specialize in designing interfaces that are not only visually appealing but also enhance user interaction and satisfaction.",
    },
    {
        title: "Mobile Apps Development",
        description: "Designing and developing mobile applications with a focus on user experience, performance, and cross-platform compatibility, delivering seamless solutions for both iOS and Android platforms.",
    },
    {
        title: "Music Management and Distribution",
        description: "I manage and distribute music via all music paltform staring from Apple music, Sportify, Dezzier, Aduiomack e.t.c.",
    },
    {
        title: "Graphics, Logo and Motion Design",
        description: "With my adverse knowledge with Adobe Suite, I'm able to design, edit, modify and vectorizle with all the software.",
    },
    {
        title: "Filmmaking",
        description: "With my background of filmmaking from the Royal Arts Academy, i'm able to direct, edit, shoot, act and script movie scripts.",
    },
    {
        title: "Software Development",
        description: "Creating reliable and scalable software solutions, focusing on best practices in coding, testing, and deployment to deliver high-quality products.",
    },
];

const dataportfolio = [{
        img: uImage,
        description: "UI/UX: PayYou Payment System For a Transfer Service In Ghana",
        link: "#",
    },
    {
        img: lImage,
        description: "Logo: Gravity Logo",
        link: "#",
    },
    {
        img: MyImage,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "1",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "2",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "3",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "4",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "5",
        link: "#",
    },
    {
        img: lImage,
        description: "6",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "7",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "8",
        link: "#",
    },
    {
        img: landImage,
        description: "OTRLUS: Landing Page",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "ceo.franktech@gmail.com",
    YOUR_FONE: "+234 (0)903-037-1605",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Frankiemy",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    education,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};