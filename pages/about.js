import styles from '../styles/Home.module.css'
import Navbar from './components/navbar.js'

var desc1 = "Hi, and welcome to my website! My name is Thor Anderskow, and I am a graduate from the University of Chicago (class of '21) who majored in Computer Science."
var desc2_1 = "In the summer of 2018, I interned at "
var desc2_2 = ", where I created a web app to look up movies and tv shows and have their posters analyzed by the Google Vision API."
var desc2_3 = "I have worked mostly in software engineering and web development. I love playing with different and new technologies, so I am always open to learning more!"
var desc3 = "My hobbies include bouldering, surfing, snowboarding, lifting, and, of course, creating websites like this one. If you would like to see some of my websites, check out the 'projects' tab."
var desc4 = "If you would like to contact me, email me at "
var bgimg = "/IMG_8668.jpg"

export default function about(){
  return(
    <div>
        <Navbar color="black"/>
        <div style={{marginTop: "40px"}}>
        <div style={{display: "flex", flexDirection: "row"}}>
            <div className={styles.aboutdiv} style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                <div className="image" style={{maxWidth: "60%", height: "69%", borderRadius: "2%"}}/>
            </div>
          <div style={{display: "flex", flexDirection: "column"}}>
              <div className={styles.projectstitle} style={{justifyContent: "start"}}>
              About me
              </div>
            <div className={styles.aboutdiv} style={{display: "flex", flexDirection: "column"}}>
                <div className={styles.blockparagraph}>
                {desc1}
                </div>
                <div className={styles.blockparagraph}>
                {desc2_1}<a href="https://thinkanalytics.com/" rel="noreferrer" target="_blank">ThinkAnalytics</a>{desc2_2}
                </div>
                <div className={styles.blockparagraph}>
                {desc2_3}
                </div>
                <div className={styles.blockparagraph}>
                {desc3}
                </div>
                <div className={styles.blockparagraph}>
                {desc4} <div style={{fontWeight: "bold",color: "#af4ff0"}}>tanderskow@gmail.com.</div>
                </div>
            </div>
          </div>
          </div>
        <style global jsx>{`
          .image {
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.8);
            background-image: url(${bgimg});
            height: 70%;
            width: 100%;
            background-position: center center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
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
    </div>
  );
}
