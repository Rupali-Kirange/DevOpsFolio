/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rupali Kirange",
  title: "Hi all, I'm Rupali",
  subTitle: emoji(
    "Cloud Technology Lead with 7+ years of DevOps and AWS expertise 🚀 Specialized in cloud migrations, Kubernetes, Terraform, Infrastructure as Code, and CI/CD automation. Passionate about transforming infrastructure and leading teams to deliver excellence."
  ),
  profileImage: require("./assets/images/profile.jpg"), // Update this with your file name / path
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/rupali-kirange/",
  gmail: "rupalikirange@devopscloudautomation.in",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED DEVOPS ENGINEER SPECIALIZING IN CLOUD MIGRATIONS AND INFRASTRUCTURE AUTOMATION",
  skills: [
    emoji(
      "⚡ Design and implement scalable AWS cloud infrastructure using Terraform and IaC practices"
    ),
    emoji("⚡ Orchestrate containerized applications with Docker, Kubernetes, and Helm across multiple environments"),
    emoji(
      "⚡ Automate CI/CD pipelines using Jenkins, GitHub Actions, and Codefresh for seamless deployments"
    ),
    emoji(
      "⚡ Lead cloud migration initiatives and architect infrastructure for optimal performance and security"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Helm",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Shell Scripting",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-chart-bar"
    } 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "2014 - 2018",
      desc: "JSPM's Rajarshi Shahu College of Engineering, Pune, Maharashtra, India",
      descBullets: [
        "Grade: 80.5%",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AWS Cloud Services", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Kubernetes & Container Orchestration",
      progressPercentage: "90%"
    },
    {
      Stack: "Infrastructure as Code (Terraform)",
      progressPercentage: "90%"
    },
    {
      Stack: "CI/CD Pipelines",
      progressPercentage: "85%"
    },
    {
      Stack: "Scripting (Shell, Python)",
      progressPercentage: "80%"
    },
    {
      Stack: "Monitoring & Observability (Grafana)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technology Lead – Cloud Professional (Client: VISA)",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.jpg"),
      clientlogo: require("./assets/images/visa.png"),
      date: "October 2025 – Present",
      desc: "Driving multi-phase AWS modernization with IaC, Kubernetes, and cost governance for VISA core platforms.",
      descBullets: [
        "Architected repeatable Terraform pipeline for multitenant AWS infra with 30% deployment acceleration",
        "Built EKS + Helm-based microservices delivery and GitHub Actions CI/CD with 99.9% reliability",
        "Implemented security baseline with IAM least privilege, ECS policies, and auditor-ready monitoring"
      ]
    },
    {
      role: "AWS DevOps Engineer (Client: ANZ)",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.jpg"),
      clientlogo: require("./assets/images/anz.png"),
      date: "April 2025 – September 2025",
      desc: "Executed ANZ cloud migration from third-party IaaS to AWS with full pipeline automation and observability.",
      descBullets: [
        "Standardized Terraform modules for VPC, RDS, EKS and reduced environment spin-up time by 70%",
        "Implemented GitOps CI/CD and auto-rollbacks in Codefresh for secure, zero-downtime deployments",
        "Established Prometheus/Grafana observability, enabling 24/7 SLO tracking and alerting"
      ]
    },
    {
      role: "AWS DevOps Engineer – API Migration (Client: Danske Bank)",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.jpg"),
      clientlogo: require("./assets/images/danske.png"),
      date: "February 2024 – February 2025",
      desc: "Delivered Danske Bank API migration with end-to-end automated provisioning, testing and release cycles.",
      descBullets: [
        "Implemented Terraform IaC and automated environment promotion (dev->qa->prod) with pipeline gating",
        "Built AWS CodePipeline / EKS infrastructure for API services with 99.95% SLA",
        "Integrated hybrid network connectivity with Transit Gateway, leveraging security controls"
      ]
    },
    {
      role: "Migration Lead – JIRA Cloud Transition (Client: Avis Budget Group)",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/Tata_Consultancy_Services_old_logo.svg.png"),
      clientlogo: require("./assets/images/avis.png"),
      date: "August 2021 – November 2024",
      desc: "Led JIRA migration to Atlassian Cloud with automation, policy governance, and secure operations.",
      descBullets: [
        "Architected migration strategy and executed infrastructure automation using Terraform and Jenkins",
        "Maintained zero critical downtime during phased rollout across sandbox, pre-prod, and prod",
        "Implemented CI/CD and AWS-based data pipelines for backup, audit, and rollback in S3/Lambda"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional Certifications, Awards, and Recognition for Excellence in Cloud and DevOps",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner Certification",
      subtitle:
        "Industry-recognized certification validating expertise in AWS cloud services and best practices.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "AWS Certification",
      footerLink: [
        {
          name: "View Certification",
          url: ""
        }
      ]
    },
    {
      title: "Infosys Certified AWS Solution Architect Associate",
      subtitle:
        "Advanced certification demonstrating proficiency in AWS architecture design and implementation.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "AWS Solution Architect",
      footerLink: [
        {
          name: "View Certification",
          url: ""
        }
      ]
    },
    {
      title: "Terraform – Infrastructure as Code Associate",
      subtitle: "Certified in IaC best practices using Terraform for infrastructure provisioning and management.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Terraform Certification",
      footerLink: [
        {
          name: "View Certification",
          url: ""
        }
      ]
    },
    {
      title: "Inspiring Leader Award",
      subtitle: "Honored for leadership, initiative, and motivating team performance throughout key project phases.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Leadership Award",
      footerLink: [
        {
          name: "Award",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a cloud project or DevOps opportunity? My Inbox is open for all.",
  number: "+91 9356675807",
  email_address: "rupalikirange@devopscloudautomation.in"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
