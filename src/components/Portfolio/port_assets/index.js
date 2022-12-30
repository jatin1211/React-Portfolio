import sB from "../../../assets/project_screenshots/IMG1.png";
import bH from "../../../assets/project_screenshots/IMG2.JPG";
//import rP from '../../../assets/project_screenshots/IMG3.JPG';
import wD from "../../../assets/project_screenshots/IMG3.JPG";
import pS from '../../../assets/project_screenshots/IMG6.JPG';
import eT from "../../../assets/project_screenshots/IMG4.png";
import Ts from "../../../assets/project_screenshots/IMG5.JPG";
import sT from "../../../assets/project_screenshots/Starship.JPG";
import Icons from "../../../assets/icons";
const githubUrl = "https://jatin1211.github.io/";
const githubRepo = "https://github.com/jatin1211/";
const icon = Icons();

const works = [
  {
    name: "A-Night-In",
    repo: `${githubRepo}A-Night-In/`,
    url: `${githubUrl}A-Night-In/`,
    screenshot: sB,
    tech: [
      { name: "HTML", variant: "light", bg: "", icon: icon.htmlIcon },
      { name: "CSS", variant: "", bg: "rebeccaPurple", icon: icon.cssIcon },
      { name: "JavaScript", variant: "dark", bg: "", icon: icon.jsIcon },
    ],
    description:
      "Rainy evening? Car broke down? This application has your home entertainment needs covered.",
  },

  {
    name: "Team Profile Generator",
    repo: `${githubRepo}Team-Profile-Generator`,
    screenshot: bH,
    tech: [
      { name: "NodeJS", variant: "", bg: "lightGreen", icon: icon.nodeIcon },
      { name: "JavaScript", variant: "dark", bg: "", icon: icon.jsIcon },
      { name: "HTML", variant: "light", bg: "", icon: icon.htmlIcon },
      { name: "CSS", variant: "", bg: "rebeccaPurple", icon: icon.cssIcon },
      { name: "Inquirer", variant: "dark", icon: icon.inquirerIcon },
    ],
    description:
      "Used to generate a team of employees including manager, engineers and interns.",
  },
  {
    name: "Employee Tracker",
    repo: `${githubRepo}employee-tracker`,
    screenshot: wD,
    tech: [
      { name: "NodeJS", variant: "", bg: "lightGreen", icon: icon.nodeIcon },
      { name: "MySQL", variant: "secondary", icon: icon.mysqlIcon },
      { name: "Inquirer", variant: "dark", icon: icon.inquirerIcon },
    ],
    description:
      "Employee Tracker is a simple CLI for managing your MySQL Employee's database. Uses Node.js, MySQL/Sequelize, and the inquirer.js package",
  },
  {
    name: "Tech Blog",
    repo: `${githubRepo}Tech-blog`,
    url: `https://arcane-gorge-43584.herokuapp.com/`,
    screenshot: pS,
    tech: [
      { name: "NodeJS", variant: "", bg: "lightGreen", icon: icon.nodeIcon },
      { name: "MySQL", variant: "secondary", icon: icon.mysqlIcon },
      { name: "Express-Hbs", variant: "light", bg: "", icon: icon.handleIcon },

    ],
    description:
      "A professional Blog platform to read/create/edit/delete blogs and to comment on other creator's blogs!",
  },
  {
    name: "Habitual Habits",
    repo: `https://github.com/jatin1211/Habitual-Habits`,
    url: `https://github.com/jatin1211/Habitual-Habits`,
    screenshot: eT,
    tech: [
      { name: "Express-Hbs", variant: "light", bg: "", icon: icon.handleIcon },
      { name: "Bootstrap", variant: "", bg: "purple", icon: icon.bootStrap },
      { name: "JavaScript", variant: "dark", bg: "", icon: icon.jsIcon },
      { name: "Sequelize", variant: "light", bg: "", icon: icon.sqlIze },
      { name: "CSS", variant: "", bg: "rebeccaPurple", icon: icon.cssIcon },
    ],
    description:
      "A professional habit tracking site that allows logged in users to add, edit, comment on, and delete blogs and workouts.",
  },

  {
    name: "Starship",
    repo: `https://github.com/FOR-TIMI/Starship`,
    url: `https://still-cliffs-68409.herokuapp.com/dashboard/app`,
    screenshot: sT,
    tech: [
      { name: "JavaScript", variant: "dark", bg: "", icon: icon.jsIcon },
      { name: "HTML", variant: "light", bg: "", icon: icon.htmlIcon },
      { name: "CSS", variant: "", bg: "rebeccaPurple", icon: icon.cssIcon },
    ],
    description:
      "Starship is your home for stocks dashboard via connected socials",
  },
];
export default works;
