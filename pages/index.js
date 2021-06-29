import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Navbar from './components/navbar.js'
import { motion } from 'framer-motion';

var imgs = ["/IMG_2348.JPG", "/IMG_2495.JPG"]
var counter = 0

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: "/IMG_2348.JPG"
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      if (counter == imgs.length) {
        counter = 0
      }
      this.setState({ img_url: imgs[counter]})
      counter += 0 //change later OBVIOUSLY
    }, 5000);
  }
  render() {
    return (
      <div>
      <Navbar />
      <motion.div layoutId="loc" className={styles.location}>
      Glasgow, UK
      </motion.div>
      <style global jsx>{`
        body {
             background-image: url(${this.state.img_url});
             background-position: center center;
             background-repeat: no-repeat;
             background-attachment: fixed;
             background-size: cover;
             width: 100vw;
             height: 100vh;
           }
           `}
      </style>
      </div>
    )
  }
}

export default function Home() {
  return (
        <Landing />
  )
}
