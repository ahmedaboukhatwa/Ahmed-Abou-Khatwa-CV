import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import countries_image from "../../images/am-furniture.png";
import ertugrul_image from "../../images/ertugrul.jpg";
import furniture_image from "../../images/am-furniture.png";
import quran_image from "../../images/quran Sound player.png";
import quiz_image from "../../images/Quiz App.jpg";
import github_image from "../../images/github users search.jpg";
import styles from '../../styles/portfolio/portfolio.module.scss';

export default function Portfolio() {
  const  projects_list = [
    {
      name: "Rest Countries Api",
      img: countries_image,
      demo_link:"https://a-mohammed2001.github.io/REST_Countries_Search_API/",
      github_link:"https://github.com/a-mohammed2001/REST_Countries_Search_API",
    },
    {
      name: "Ertugrul New Version Clone (React.js)",
      img: ertugrul_image,
      demo_link:"https://a-mohammed2001.github.io/Ertugrul_New_Version_Clone_React_Js/",
      github_link:"https://github.com/a-mohammed2001/Ertugrul_New_Version_Clone_React_Js",
    },
    {
      name: "Am furniture",
      img: furniture_image,
      demo_link:"https://a-mohammed2001.github.io/Am_Furniture/",
      github_link:"https://github.com/a-mohammed2001/Am_Furniture",
    },
    {
      name: "Quran Sound player",
      img: quran_image,
      demo_link:"https://a-mohammed2001.github.io/quran_Sound_player/",
      github_link:"https://github.com/a-mohammed2001/quran_Sound_player",
    },
    {
      name: "Quiz App",
      img:quiz_image,
      demo_link:"https://a-mohammed2001.github.io/Quiz_App/",
      github_link:"https://github.com/a-mohammed2001/Quiz_App",
    },
    {
      name: "Github Users search",
      img: github_image,
      demo_link:"https://a-mohammed2001.github.io/GitHub-users-search-app/",
      github_link:"https://github.com/a-mohammed2001/GitHub-users-search-app",
    },
  ];
  const projects_map = projects_list
  .map((project,i) =>{
    return(
      <div key={i} className={styles.project}>
      <Link href={project.demo_link}>
      <a target="_blank">
        <header className={styles.project_header}>
          <Image src={project.img} width={1100} height={800} />
        </header>
        <div className={styles.project_name}><h3>{project.name}</h3></div>
      </a>
      </Link>
    </div>
    )
  });
    return (
      <div className={styles.portfolio}>
      <h2>Projects</h2>
      <div className={styles.projects}>  
      {projects_map}
      </div>
    </div>
    
    )
}
