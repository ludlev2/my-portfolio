/*

For CSS (Colours) editing, head to 'css/root.css'

Here you can edit the main values for your page, such as the name, job title, etc.
Ofcourse you may take full advantage of editing it yourself through the code if you wish.

*/

// Page Styling ------------------------------------------------------------------

export let pageStyling = {
    backgroundColor: "#1e1f26", // Main Page Background Color
    foregroundColor: "#2e3c4d", // Foreground Color
    primaryColor: "#f4eade", // Neon Color
    secondaryColor: "#f79b77", // Underglow Color
    textColor: "#ed8c72",
    subTextColor: "#D9DADD",
    font: "Consolas, Lucida Sans Typewriter, Lucida Console, Monaco, Bitstream Vera Sans Mono, monospace",
    particleEffect: true,
};

// Navigation --------------------------------------------------------------------

export let navigation = {
    navLogo: { // Navigation Logo
        enabled: true, // Do you want to use a Branding?
        isImage: false, // Do you want to use an Image? If not, alt text will be used
        imageURL: "/Users/ludanyilevente/my-portfolio/public/logo.png",
        logoWidth: "75px", // Size of your logo, adjustable without the CSS
        altText: "LL", // This will be used if it is not an Image (Will also be the alt text if it is an image)
        linkTo: "#",
    },

    leftNavigation: [ // Add items to the left side of the navigation Bar
        {
            //text: "_External",
            url: "#",
        },
    ],

    rightNavigation: [ // Add items to the right side of the navigation Bar
        {
            text: "About Me", // Text Value
            url: "#aboutme", // Anchor points or External URLS, you may have to edit the App.js to add Anchors
        },
        {
            text: "Publications/Projects",
            url: "#portfolio",
        },
        {
            text: "Education",
            url: "#experience",
        },
    /*    {
            text: "_Education",
            url: "#education",
        },
        {
            text: "Skills",
            url: "#skills",
        },*/
        {
            text: "Awards",
            url: "#awards",
        },
        {
            text: "Experience",
            url: "#work",
        },
        {
            text: "Contact",
            url: "#contact",
        },
        /*{
            text: "Achievements",
            url: "#achievement",
        },*/

    ],

    // Enable / Disable a Resume Button to allow a user to download your RESUME

    resumeBtn: {
        enabled: true, // Enable / Disable
        downloadIcon: true, // Show Icon
        text: "Résumé", // Text on Button
        url: "https://drive.google.com/uc?export=download&id=1fT5_3vAyuHXB0XUwzbheqZ7H8QJXlN8O", // Make sure to include https:// or http://. This is the download link to your stored Resume
    }
};

// Information ------------------------------------------------------------------------

export let information = {
    fullName: "Levente Ludányi", // Name in Profile Banner
    welcomeMsg: "Hi 🤚! I'm ", // Welcome subheading above Name
    aboutMe: "I'm double majoring in Mathematics and Computer Science! ", // Short Description
    companyName: "at École Polytechnique", // Your position @ a Company
    // Replace with the URL to your image (URL or Local Image)
    profilePhoto: "https://media-exp1.licdn.com/dms/image/C4E03AQFtyW6AFPSy-w/profile-displayphoto-shrink_800_800/0/1632919039929?e=1639008000&v=beta&t=ZaMEyOolzh2aKjE3He1NE7c_aNjnIFMP0_z5tvdUu6M",
};

// Socials ----------------------------------------------------------------------------

export let socials = {
    facebookURL: "https://www.facebook.com/ludanyi.lvnt/", // Facebook
    linkedinURL: "https://www.linkedin.com/in/levente-ludanyi-1475aa204/", // LinkedIn
    githubURL: "https://github.com/", // Github
};

// About Me ----------------------------------------------------------------------------

export let aboutMe = {
    description: "I'm a very curious guy with a huge interest in Theoretical/Mathematical Physics and Quantitative Finance. ",
  //quote: "\"The Best Preparation For Tommorow Is Doing Your Best Today.\"",
};

// Portfolio ---------------------------------------------------------------------------

export let portfolioCards = [
    {
        projectTitle: "Függvényegyenletek középiskolában - Ludányi Levente, Matos Zoltán",
        projectDesc: "A paper on the different types of functional equations and several methods to solve them. The paper emphasizes the importance and frequency of the functional equations through different disciplinces.",
        projectURL: "",
    },
   {
        projectTitle: "The Essence of Theoretical Physics by a High School Student - for the XXXV. National Scientific Student Conference",
        projectDesc: "A project on the importance and beauty of the mathematical discoveries in physics. An overview of the possible Theory of Everythings along with some concepts of their mathematical description.",
        projectURL: "",
    },
    /*{
        projectTitle: "Sentiment Analyst Algorithm (under development)",
        projectDesc: "An algorithm which collects data from social media and news portals then analyze the general sentiment, along with different quantitative factors.",
        projectURL: "",
    },*/

];

// Contact ---------------------------------------------------------------------------

export let contractsCards = [

    {
        projectTitle: "levente.ludanyi@polytechnique.edu",
        projectDesc: "",
        projectURL: "mailto:ludanyi.levente@gmail.com",

    },
];

// Experience -------------------------------------------------------------------------

export let experience = {
  subtitle : 'Education',

    experiences: [ // Preferably, sort by newest first
        {
            //companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/06/École_polytechnique_signature.svg", // Leave Blank for Template Logo
            companyLogo: process.env.PUBLIC_URL + '/ecole3.png',
            companyName: "École Polytechnique", // Company Name
            companyLocation: "Bachelor of Science", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Double Major in Mathematics and Computer Science",
                    type: "Full-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "September 2021", // Preferable format
                    endPeriod: "Present", // End result will look like "Apr 2020 - Present"
                    description: "",
                },
                /*
                {
                    role: "Intern",
                    type: "Internship", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Jan 2020", // Preferable format
                    endPeriod: "Apr 2020", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },*/
            ],
        },

        {
            companyLogo: process.env.PUBLIC_URL + '/milestone.png', // Leave Blank for Template Logo
            companyName: "Milestone Institute", // Company Name
            companyLocation: "Hungary, Budapest", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Modules: Frontiers in Physics, Advanced Physics and Engineering, Electromagnetism, Academic Writing",
                    type: "", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "June 2020", // Preferable format
                    endPeriod: "May 2021", // End result will look like "Apr 2020 - Present"
                    description: "An English speaking talent center",
                },
            ],
        },

        {
            companyLogo: process.env.PUBLIC_URL + '/images.png', // Leave Blank for Template Logo
            companyName: "High School of the University of Szeged", // Company Name
            companyLocation: "Hungary, Szeged", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Specialzied in Mathematics with Advanced Physics",
                    type: "Full-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "September 2017", // Preferable format
                    endPeriod: "June 2021", // End result will look like "Apr 2020 - Present"
                    description: "",
                },
            ],
        },
        {
            companyLogo: process.env.PUBLIC_URL + '/udemy.png', // Leave Blank for Template Logo
            companyName: "Complementary Education: Udemy", // Company Name
            companyLocation: "", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Quantitative Finance Algorithmic Trading in Python",
                },
                {
                    role: "Python for Finance: Investment Fundamentals Data Analytics",
                },  {
                    role: "Complete Investing Course (Stocks, ETFs, Index/Mutual Funds)",

                  },
            ],
        },
        {
            companyLogo: process.env.PUBLIC_URL + '/edx.jpeg', // Company Name
            companyLocation: "", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Mathematical Methods for Quantitative Finance",
                    type: "MIT MicroMasters",
                },

            ],
        },


    ]
};


/*

// Education -------------------------------------------------------------------------

export let education = {
    educations: [ // Preferably, sort by newest first
        {
            companyLogo: "", // Leave Blank for Template Logo
            companyName: "The New Company", // Company Name
            companyLocation: "Selangor, Malaysia", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Software Engineer",
                    type: "Full-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Apr 2020", // Preferable format
                    endPeriod: "Present", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
                {
                    role: "Intern",
                    type: "Internship", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Jan 2020", // Preferable format
                    endPeriod: "Apr 2020", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
            ],
        },
        {
            companyLogo: "", // Leave Blank for Template Logo
            companyName: "The Old Company", // Company Name
            companyLocation: "United Kingdom", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Junior Full-Stack Developer",
                    type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Dec 2019", // Preferable format
                    endPeriod: "Jan 2020", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
            ],
        },
    ]
};

*/
/*
export let achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",

      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",

      footerLink: [
        {
          name: "View Google Assistant Action",
          url: ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",

      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Skills -----------------------------------------------------------------------------

export let skills = {
    //Pie Chart Editing
    radius: 42, // of the circle
    lineWidth: 15, //The line Width of all segments
    paddingAngle: 5, // The distance between each segment
    //Labels
    labelPosition: 72, // Location of Label. Outer = 166
    fontSize: '2px', // Size of the Label
    //Pie Chart Data
    skillsData: [
        // Each Skill will have the title, value for the chart, color, experience (years, months) and a desscription on the task
        // Some examples are shown below
        { title: 'ReactJS', value: 45, color: '#28ACEA', experience: '3 years',
        description: 'Built multiple ReactJS based websites with integration of NodeJS and Redux'},
        { title: 'Java', value: 25, color: '#19CEEB', experience: '2 years',
        description: 'Worked on multiple Minecraft Plugins and Text-Based Adventure Survival CLI game'},
        { title: 'C++', value: 10, color: '#09EBEE', experience: '1 year',
        description: 'Sorting system of user class information'},
        { title: 'Others', value: 20, color: '#00FEEF', experience: '1 year',
        description: 'Experience with Game Development such as Unity (C#) having 2 published games on the Play Store.'},
    ],
}
*/
// Awards -----------------------------------------------------------------------------

export let awards = {
    //Pie Chart Editing
    radius: 0, // of the circle
    lineWidth: 15, //The line Width of all segments
    paddingAngle: 5, // The distance between each segment
    //Labels
    labelPosition: 72, // Location of Label. Outer = 166
    fontSize: '2px', // Size of the Label
    //Pie Chart Data
    awardsData_1: [
        // Each Skill will have the title, value for the chart, color, experience (years, months) and a desscription on the task
        // Some examples are shown below
        { title: 'Certificate of Merit from the Ministry of Human Capacities', value: 25, color: '#19CEEB', experience: '2021',
        description: 'Hungarian Ministry of Human Capacities'},
        { title: 'Stipendium Peregrinum', value: 10, color: '#09EBEE', experience: '2021',
        description: 'National Talent Support Council'},
        { title: '”Talentum 2021” Grand Prize – Discovered Scientific Talent of the Year', value: 45, color: '#28ACEA', experience: '2021',
        description: 'National Talent Support Council'},
        { title: 'Young Talent of Szeged', value: 10, color: '#09EBEE', experience: '2021',
        description: 'Local Government of the City of Szeged'},
        { title: 'Metropolis Award', value: 20, color: '#00FEEF', experience: '2020',
        description: 'Mathematical and Physical Journal for High Schools'},
        { title: 'Rotary Scholarship', value: 20, color: '#00FEEF', experience: '2020',
        description: 'Rotary Club'},
        { title: 'Scientist Scholarship', value: 20, color: '#00FEEF', experience: '2020',
        description: 'Messzehangzo Foundation'},
        { title: 'Hungary of Talents Award', value: 20, color: '#00FEEF', experience: '2019',
        description: 'National Talent Support Council'},
        { title: 'Huhn Andras Mathematics Award', value: 20, color: '#00FEEF', experience: '2019',
        description: 'High School of the University of Szeged'},
    ],
    awardsData: [
        // Each Skill will have the title, value for the chart, color, experience (years, months) and a desscription on the task
        // Some examples are shown below
        { title: 'International Olympiad on Astronomy and Astrophysics', value: 45, color: '#28ACEA', experience: '2020',
        description: 'Silver Medal'},
        { title: 'International Astronomy and Astrophysics Competition', value: 25, color: '#19CEEB', experience: '2020',
        description: 'Golden Medal'},
        { title: 'Szilard Leo National Atomic and Modern Physics Competition', value: 10, color: '#09EBEE', experience: '2021, 2019',
        description: '2nd place with special prize for the best solution of the hardest problem'},
        { title: 'Theoretical Physics Competition of the Mathematical and Physical Journal for High Schools', value: 10, color: '#09EBEE', experience: '2021, 2020',
        description: '2nd place'},
        { title: 'Szokefalvi-Nagy Mathematics Competition', value: 20, color: '#00FEEF', experience: '2019',
        description: '1st place'},
    ],
}


/*

Portfolio-Bootstrap-React by Joshua Daveston Ahimaz

My Portfolio:
https://JAhimaz.github.io

My Github:
https://Github.com/JAhimaz


*/

// Work -------------------------------------------------------------------------

export let work = {
  subtitle : 'Work',

    works: [ // Preferably, sort by newest first
      {
          companyLogo: process.env.PUBLIC_URL + '/future_hungary.jpeg', // Leave Blank for Template Logo
          companyName: "Future: Hungary", // Company Name
          companyLocation: "Cambridge, United Kingdom", // Location of Company
          roles: [ // Each company can have multiple Roles
              {
                  role: "Finance & Analytics Officer",
                  type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                  startPeriod: "2021", // Preferable format
                  endPeriod: "", // End result will look like "Apr 2020 - Present"
                  description: "I am responsible for overseeing and improving the business and financial model of the conference and managing the budget. I work with the External Relations team on composing sponsorship packages and product development. Also, I works on creating the financial model for expanding the business for other services. ",
              },
          ],
      },
        {
/*
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/06/École_polytechnique_signature.svg", // Leave Blank for Template Logo
            companyName: "École Polytechnique", // Company Name
            companyLocation: "Double Major in Mathematics and Physics", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Double Major in Mathematics and Physics",
                    type: "Full-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "September 2021", // Preferable format
                    endPeriod: "Present", // End result will look like "Apr 2020 - Present"
                    description: "",
                },
                /*
                {
                    role: "Intern",
                    type: "Internship", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Jan 2020", // Preferable format
                    endPeriod: "Apr 2020", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
            ],
        }, */




            companyLogo: process.env.PUBLIC_URL + '/images.png', // Leave Blank for Template Logo
            companyName: "High School of the University of Szeged", // Company Name
            companyLocation: " Hungary, Szeged", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Lecturer",
                    type: "Volunteer for holding extracurricular lectures", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "2020", // Preferable format
                    endPeriod: "2021", // End result will look like "Apr 2020 - Present"
                    description: "I was the first student in my high school who held extracurricular lectures in the afternoons. My goal was to show perplexing, tricky and beautiful problems/concepts to the students. I wanted to show that Physics is more than just mere substitution into formulas.",
                },
            ],
        },

  /*      {

            companyLogo: "", // Leave Blank for Template Logo
            companyName: "Work", // Company Name
            companyLocation: "", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Quantitative Finance Algorithmic Trading in Python",
                    type: "Complete Investing Course (Stocks, ETFs, Index/Mutual Funds)",
                },
            ],
        },*/
    ],
};
