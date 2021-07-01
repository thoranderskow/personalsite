import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion';

var git = "/github.png"
var link = "/linkedin.png"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: ""
    }
  }
  componentDidMount() {
    if (this.props.outline == "true") {
      this.setState({shadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
    });
  }
}
  render () {
    return(
      <div className={styles.navbar}>
          <div className={styles.title}>
            <Link href='./'><a>Thor Anderskow</a></Link>
          </div>
          <div className={styles.container}>
              <Link href='./about'><a>About</a></Link>
              <Link href='./proj'><a>Projects</a></Link>
              <Link href='./resume'><a>Resume</a></Link>
              <Link href='https://github.com/thoranderskow'><a rel="noreferrer" target="_blank"><div className="gitspan"/></a></Link>
              <Link href='https://www.linkedin.com/in/thorence-anderskow-60a560176/'><a rel="noreferrer" target="_blank"><div className="linkspan"/></a></Link>
          </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: ${this.props.color};
          text-shadow: ${this.state.shadow};
        }
        a:hover {
          color: #de9547;

        }
        .gitspan {
          height: 25px;
          width: 25px;
          background-image: url(${git});
          background-position: center center;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .linkspan {
          height: 25px;
          width: 25px;
          background-image: url(${link});
          background-position: center center;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        `}
      </style>
      </div>
    )
  }
}
