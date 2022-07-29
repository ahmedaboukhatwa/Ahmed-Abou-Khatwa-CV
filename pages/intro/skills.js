import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretRight  } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/intro/skills.module.scss";

export default function Skills() {
    const skills_list = [
    {
      name: "Html",
      inner_skills: ["Html5"],
    },
    {
      name: "Css",
      inner_skills: ["Css3", "Sass", "Bootstrap 4"],
    },
    {
      name: "JavaScript",
      inner_skills: ["Dom", "Bom", "Jquery" , "Es6"],
    },
    {
      name: "React.js",
      inner_skills: ["React Hooks","Redux Toolkit","Next.js"],
    },
    {
      name :"Node.js (beginner)",
      inner_skills: [],
    },
    {
      name :"MongoDB (beginner)",
      inner_skills: [],
    },
    {
      name: "Json",
      inner_skills: [],
    },
    {
      name: "Git",
      inner_skills: [],
    },
    ];
    const skills_map = skills_list
    .map(skill => {
      if (skill.inner_skills.length !== 0) {
        return (
        <li className={`${styles.skill} `} onClick={(e)=>{add_skill_active(e)}}>
        <span className={styles.span_skill_header}>
        <FontAwesomeIcon className={styles.icon} icon={faCaretRight}/>
          <h3>{skill.name}</h3>
        </span>           
          <ul>
          <li className={styles.inner_skills}>{skill.inner_skills.map((inner,i)=>{return <li key={i}>{inner}</li>})}</li>
          </ul>
        </li>
        )
      } else {
        return (
          <li className={`${styles.skill} `} onClick={(e)=>{add_skill_active(e)}}>
          <span className={styles.span_skill_header}>
            <h3>{skill.name}</h3>
          </span>           
          </li>
        )
      }
    })
    ;
  const add_skill_active = (e) => {
    if(e.target.classList.contains(`${styles.skill}`)){
      let skill = e.target;
      for (let i = 0; i < skill.parentElement.children.length; i++) {
        if (skill.parentElement.children[i] == skill) {
          continue;
        }
        skill.parentElement.children[i].classList.remove(`${styles.skill_active}`);
      }
      skill.classList.toggle(`${styles.skill_active}`);
    }
    else if (e.target.classList.contains(`${styles.span_skill_header}`)){
      let skill = e.target.parentElement;
      for (let i = 0; i < skill.parentElement.children.length; i++) {
        if (skill.parentElement.children[i] == skill) {
          continue;
        }
        skill.parentElement.children[i].classList.remove(`${styles.skill_active}`);
      }
      skill.classList.toggle(`${styles.skill_active}`);
    }
    else if (e.target.tagName === "H3" ||e.target.classList.contains(`${styles.icon}`)){
      let skill = e.target.parentElement.parentElement;
      for (let i = 0; i < skill.parentElement.children.length; i++) {
        if (skill.parentElement.children[i] == skill) {
          continue;
        }
        skill.parentElement.children[i].classList.remove(`${styles.skill_active}`);
      }
      skill.classList.toggle(`${styles.skill_active}`);
    }
  }
  return (
    <Fragment>
      <h2 className={styles.skills_title}>Skills</h2>
      <ul className={styles.ul_skills_lists}>
          {skills_map}
      </ul>
     
    </Fragment>
  );
}
