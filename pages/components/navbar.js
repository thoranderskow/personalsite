import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion';

export default class extends React.Component {
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
              <Link href='https://github.com/thoranderskow'><a target="_blank"><img src="/github.png"/></a></Link>
              <Link href='https://www.linkedin.com/in/thorence-anderskow-60a560176/'><a target="_blank"><img src="/linkedin.png"/></a></Link>
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
        img {
          height: 25px;
          width: 25px;
        }
        `}
      </style>
      </div>
    )
  }
}
