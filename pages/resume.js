import Navbar from './components/navbar.js'
import styles from '../styles/Home.module.css'

export default function resume() {
  return(
    <div>
    <Navbar color="black"/>
    <div style={{display: "flex", justifyContent: "center"}}>
    <div className={styles.aboutdiv} style={{display: "flex", flexDirection: "column"}}>
    <div className={styles.projectstitle} style={{justifyContent: "start", marginTop: "25px"}}>
    Work Experience
    </div>
        <div className={styles.blockparagraph}>
        Software/web development Intern - <a href="https://thinkanalytics.com/" rel="noreferrer" target="_blank">ThinkAnalytics</a>
        </div>
        <div className={styles.blockparagraph}>
         Web development Intern - <a href="https://423creative.com/" rel="noreferrer" target="_blank">423Creative</a>
        </div>
        <div className={styles.projectstitle} style={{justifyContent: "start", marginTop: "40px"}}>
        Relevant Coursework
        </div>
        <div className={styles.blockparagraph}>
        Introduction to Databases
        </div>
        <div className={styles.blockparagraph}>
        Introduction to Computer Systems
        </div>
        <div className={styles.blockparagraph}>
        Introduction to Computer Security
        </div>
        <div className={styles.blockparagraph}>
        Introduction to Software Development
        </div>
        <div className={styles.blockparagraph}>
        Foundations of Computer Networks
        </div>
        <div className={styles.blockparagraph}>
        Discrete Mathematics
        </div>
        <div className={styles.blockparagraph}>
        Theory of Algorithms
        </div>
        <div className={styles.projectstitle} style={{justifyContent: "start",marginTop: "40px"}}>
        Languages/Tools
        </div>
        <div className={styles.blockparagraph}>
        Javascript & ReactJS, NextJS
        </div>
        <div className={styles.blockparagraph}>
        Python
        </div>
        <div className={styles.blockparagraph}>
        HTML, CSS
        </div>
        <div className={styles.blockparagraph}>
        SQL
        </div>
        <div className={styles.blockparagraph}>
        Git
        </div>
        <div className={styles.blockparagraph}>
        C
        </div>
        <div className={styles.blockparagraph} style={{color:"white"}}>
        You found me!
        </div>
        <div className={styles.blockparagraph} style={{color:"white"}}>
        Go look elsewhere now.
        </div>
        <div className={styles.blockparagraph} style={{alignSelf: "center"}}>
        View full resume <a href="https://docs.google.com/document/d/e/2PACX-1vQ4AkMTdPwyFnxXqaW57iHPYpfCesVC1H-97YeaXDyaMn71hXxXcbG4xzFNdU0rgI6ShvYcDtx8FyFb/pub">here</a>.
        </div>
        <div className={styles.blockparagraph} style={{color:"white"}}>
        No, seriously
        </div>
        <div className={styles.blockparagraph} style={{color:"white"}}>
        Just give up.
        </div>
    </div>
    </div>
    <style global jsx>{`
      a {
        text-decoration: none;
        color: #af4ff0;
      }
      a:hover {
        color: orange;
      }
    `}
    </style>
    </div>
  )
}
