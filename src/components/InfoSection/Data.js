export const aboutMe = {
    id: 'about', // for navigation bar
    lightBg: true, // background can be light or dark -> true or false
    lightText: false, // should be opposite of background
    darkText: true, // text of desciption, should be opposite of lightText

    topline: 'About Me', // section, or time and location for experience
    align_left: true, // can be true or false for aligning the title and topline at the left, depends on imgStart
    headline: "I choose to embrace life’s opportunities and grow from life’s challenges.", //
    description: "I am passionate about design, biotechnology, and machine learning. I want to create a better tomorrow by working to improve the lives of others.", // job title
    // description1: "One of my goals is to travel to 50 countries. I want to meet people all over the world and expand my worldview.",


    imgStart: false, // true -> img on right, false -> img on left
    img: "./../images/img-ll.jpg", // image source // img-squash2.jpg

    alt: 'Post', // alt text if image doesnt work

    buttonLabel: 'LinkedIn', // words on the button
    buttonLink: 'https://linkedin.com/in/raziqkassam' // what href or external link the button will take you to
}

export const experience_XSENSOR = {
    id: 'experience', // for navigation
    lightBg: true, // background color
    lightText: false, // color of 
    lightTextDesc: false,
    darkText: true,

    align_left: false, // alignment of title and topline
    title: 'Work Experience', // type of experience
    topline: "Jan - Apr 20201 | XSENSOR Technology", // time and location

    headline: 'Machine Learning Intern', // job title and bullet points:
    description1: '',
    description2: '',
    description4: '',
    
    imgStart: true, // true -> img on right, false -> img on left
    img: "./../images/img-.jng", // image location
    alt: 'XSENSOR', // alternate text instead of image

    buttonLabel: '', // words on the button
    buttonLink: '' // what href or external link the button will take you to
}

export const experience_BCI = {
    id: 'experience', // for navigation
    lightBg: true, // background color
    lightText: false, // color of 
    lightTextDesc: false,
    darkText: true,

    align_left: false, // alignment of title and topline
    title: 'Work Experience', // type of experience
    topline: "May - Aug 2020 | Alberta Children's Hospital", // time and location

    headline: 'Brain Computer Interface Research Student', // job title and bullet points:
    description1: 'Developed and prototyped a project that assists kids with neurological disabilities to paint without physical control.',
    description2: 'Utilized Python to analyze real-time EEG data and Node.js for controlling a robot to move based on extracted features.',
    description4: 'Presented the project outcome at 2 symposiums and received an award for the best 3-minute thesis presentation.',
    
    imgStart: true, // true -> img on right, false -> img on left
    img: "./../images/img-bci3.jpg", // image location
    alt: 'BCI', // alternate text instead of image

    buttonLabel: 'Github', // words on the button
    buttonLink: 'https://github.com/raziqkassam/sphero', // what href or external link the button will take you to

    logo1: "fab fa-python",
    logo2: "fab fa-node",
    logo3: "fab fa-python"
}

export const experience_UWSquash = {
    id: 'experience',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,

    title: 'Leadership Experience',
    align_left: true,
    topline: "since Sept 2019 | waterloo Squash team", // "University of waterloo varsity squash team",
    headline: 'Varsity Player and Social Media Ambassador',
    description1: 'Commitment of multiple hours a week for team practice, fitness sessions, tournaments and squash committee meetings.',
    description2: 'Produce and edit multiple forms of media for the team’s various social media platforms.',
    description3: 'Increased social media engagement by 125%, engaging the team and sponsors during the pandemic.',
    
    imgStart: false,
    img: "./../images/img-squash.jpg", // squash->playing, squash2->intros
    alt: 'Squash',
    dark: false,
    darkText: false,
    primary: true,

    buttonLabel: 'Team Instagram Page',
    buttonLink: 'https://instagram.com/wloosquash'
}

export const experience_Lumiere = {
    id: 'experience', // for navigation
    lightBg: true, // background color
    lightText: false, // color of 
    lightTextDesc: false,
    darkText: true,

    align_left: false, // alignment of title and topline
    title: 'Leadership Experience', // type of experience
    topline: "Sep 2017 - May 2018 | Junior Achievement", // time and location

    headline: 'Vice President of Production, Lumiére', // job title and bullet points:
    description1: 'Led production operations within a student run company that incorporated circuits and LED lights into ordinary greeting cards.',
    description2: 'Investigated production methods, designed prototypes and selected an option that optimized resources and reduced cost.',
    description3: 'Developed and implemented efficient strategies for operations through leading production meetings.',
    // description4: 'Applied consumer feedback and adjusted product for future sales.',
    
    imgStart: true, // true -> img on right, false -> img on left
    img: "./../images/img-lumiere.jpg", // image location
    alt: 'Lumiere', // alternate text instead of image

}

export const experience_BioTEC = {
    id: 'experience',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    darkText: true,

    title: 'Leadership Experience',
    align_left: false,
    topline: "Since Jan 2021 | BioTEC Conference", // 
    headline: 'Web Platform Lead',
    description1: 'Website Stuff for the Biotechnology and Bioengineering Conference',
    description2: 'Github',
    description3: "Conference Website",
    
    imgStart: true,
    img: "./../images/img-biotec.jpg", 
    alt: 'BioTEC',

    buttonLabel: 'BioTEC Website',
    buttonLink: 'https://www.uwbiotec.ca'
}

export const experience_GE = {
    id: 'experience',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,

    title: 'Volunteer Experience',
    align_left: true,
    topline: "July - Aug 2018 | Hyderabad, India", // "University of waterloo varsity squash team",
    headline: 'Global Encounters Volunteer',
    description1: 'Participated in a service-learning trip with 60 students across 17 countries; focused on service, leadership and culture.',
    description2: 'Volunteered over 50 hours at a local government school, and increased productivity by leading debriefs for our service team.',
    description3: "Educated local students about the importance of personal hygiene through interactive presentations.",
    
    imgStart: false,
    img: "./../images/img-ge.jpg", 
    alt: 'GE',
    dark: false,
    darkText: false,
    primary: true,
}

export const project_Joymouse = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,

    title: 'Project',
    align_left: false,
    topline: "Joymouse | BME 161 Design Project",
    headline: 'Joystick Controlled Cursor for Individuals with Hand Tremors',
    description1: 'Created a functioning prototype that mechanically filters out unwanted cursor movement from hand tremors.',
    description2: 'Implemented Arduino coding for clicking and cursor movement on a computer.',
    // description3: 'Quantified the success of the device with 84% satisfaction of device comfortability', 
    description4: 'Effectively stabilized cursor movement and decreased average acceleration by 266%.',
    
    imgStart: true,
    img: "./../images/img-joymouse copy.png",
    alt: 'Joymouse',
    dark: true,
    darkText: true,
    primary: true,

    buttonLabel: 'Github',
    buttonLink: 'https://github.com/raziqkassam/joymouse'
}

