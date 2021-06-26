export const experience_XSENSOR = {
    id: 'experience', 
    lightBg: true, 
    lightText: true,
    darkText: false,

    align_left: true, 
    title: 'Jan - Apr 2021', 
    topline: "XSENSOR Technology Corporation",

    headline: 'Machine Learning Intern', 
    description3: "Oversaw data collection, cleaning, post-processing and testing that improved a machine learning models prediction of a patient’s risk of pressure injury.", // Collected, cleaned and processed pressure imaging data to improve a joint detection machine learning model.",
    description2: "Led data cleaning outsourcing efforts, including vendor selection, negotiation of terms, design and delivery of training resources, and establishment of virtual workspace environments through AWS in order to efficiently upscale the process.", // "Efficiently managed the outsourcing of data cleaning by communicating with and developing training resources for international partners.",//"Executed Python code that created plots and extracted statistics for international client reports.",
    description1: "Integrated signal detection and filtering to help create a contactless system that used Python to detect a patient’s real-time heart rate with an accuracy above 94%.", // "Assisted with the upscaling and transfer of the data collection and pipeline to Amazon Web Services.",

    imgStart: false, // true -> img on right, false -> img on left
    img: "./../images/img-x.jpg", 
    alt: 'XSENSOR', 

    buttonLabel: '', 
    buttonLink: ''
}

export const experience_BCI = {
    id: 'experience', // for navigation
    lightBg: false, // background color
    lightText: true, // color of 
    lightTextDesc: false,
    darkText: false,

    align_left: false, // alignment of title and topline
    title: "May - Aug 2020", // type of experience
    topline: "Alberta Children's Hospital", // time and location

    headline: 'Brain Computer Interface Research Student', // job title and bullet points:
    description1: 'Developed and prototyped a project that assists kids with neurological disabilities to paint without physical control.',
    description2: 'Utilized Python to analyze real-time EEG data and Node.js for controlling a robot to move based on extracted features.',
    description4: 'Presented the project outcome at 2 symposiums and received an award for the best 3-minute thesis presentation.',
    
    imgStart: true, // true -> img on right, false -> img on left
    img: "./../images/img-bci3.jpg", // image location
    alt: 'BCI', // alternate text instead of image

    buttonLabel: 'Github', // words on the button
    buttonLink: 'https://github.com/raziqkassam/sphero', // what href or external link the button will take you to

    buttonLabel2: "Presentation",
    buttonLink2: "https://www.youtube.com/watch?v=D6xbxsmxb2w"
}

export const experience_BioTEC = {
    id: 'experience',
    lightBg: false,
    lightText: true,
    darkText: false,

    title: 'Jan 2021 - Present',
    align_left: true,
    topline: "BioTEC Conference", // 
    headline: 'Web Platform Lead',
    description1: 'Design and maintain the official website for the Biotechnology and Bioengineering Conference (BioTEC).',
    description2: 'Plan website layouts in Figma and apply creative design solutions to showcase the brand to over 800 monthly visitors.',
    description3: "Collaborate with 9 teams to produce, market and implement forms of content to over 850 global attendees.",
    
    imgStart: false,
    img: "./../images/img-biotec.jpg", 
    alt: 'BioTEC',

    buttonLabel: 'BioTEC Website',
    buttonLink: 'https://www.uwbiotec.ca'
}

export const experience_UWSquash = {
    id: 'experience',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    darkText: false,

    title: 'Sept 2019 - Present',
    align_left: false,
    topline: "waterloo Squash team", // "University of waterloo varsity squash team",
    headline: 'Varsity Player and Social Media Ambassador',
    description1: 'Commitment of multiple hours each week for team practice, fitness sessions, tournaments and squash committee meetings.',
    description2: 'Produce multiple forms of media for the team’s various social media platforms.',
    description3: 'Increased social media following by 135% by engaging the team and sponsors through the pandemic.',
    
    imgStart: true,
    img: "./../images/img-squash.jpg", // squash->playing, squash2->intros
    alt: 'Squash',

    buttonLabel: 'Team Instagram Page',
    buttonLink: 'https://instagram.com/wloosquash'
}

export const experience_GE = {
    id: 'experience',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    darkText: false,

    title: 'July - Aug 2018',
    align_left: false,
    topline: "Hyderabad, India", // "University of waterloo varsity squash team",
    headline: 'Global Encounters',
    description1: 'Participated in a service-learning trip with 60 students across 17 countries; focused on service, leadership and culture.',
    description2: 'Volunteered over 50 hours at a local government school, and increased productivity by leading debriefs for our service team.',
    description3: "Educated local students about the importance of personal hygiene through interactive presentations.",
    
    imgStart: false,
    img: "./../images/img-ge.jpg", 
    alt: 'GE',
}

export const project_Joymouse = {
    id: 'projects',
    lightBg: true,
    lightText: true,
    darkText: false,

    title: 'Sept - Dec 2019',
    align_left: true,
    topline: "BME 161 Design Project",
    headline: 'Joymouse: Joystick Controlled Cursor for Individuals with Hand Tremors',
    description1: 'Created a functioning prototype that mechanically filters out unwanted cursor movement from hand tremors.',
    description2: 'Utilized Arduino coding for clicking and cursor movement on a computer.',
    // description3: 'Quantified the success of the device with 84% satisfaction of device comfortability', 
    description4: 'Effectively stabilized cursor movement and decreased average acceleration by 266%.',
    
    imgStart: true,
    img: "./../images/img-joymouse copy.png",
    alt: 'Joymouse',

    buttonLabel: 'Github',
    buttonLink: 'https://github.com/raziqkassam/joymouse'
}

export const experience_Lumiere = {
    id: 'experience', // for navigation
    lightBg: false, // background color
    lightText: true, // color of 
    darkText: false,

    align_left: true, // alignment of title and topline
    title: 'Sep 2017 - May 2018', // type of experience
    topline: "Junior Achievement", // time and location

    headline: 'Lumiére: Incorporating Circuits and LED Lights into Ordinary Greeting Cards', // job title and bullet points:
    description1: 'Elected as Vice President of Production within a student run company.',
    description2: "Designed functional prototypes that optimized resources while minimizing costs and environmental waste.",
    description3: 'Led efforts to investigate production methods, develop operational strategies, and provide training to ensure an efficient assembly line process.',
    // description4: 'Developed operational strategies to optimize resources in a time efficent manner.',
    // description4: 'Applied consumer feedback and adjusted product for future sales.',
    
    imgStart: false, // true -> img on right, false -> img on left
    img: "./../images/img-lumiere.jpg", // image location
    alt: 'Lumiere', // alternate text instead of image

}

export const project_WebDev = {
    id: 'projects',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    darkText: false,
}