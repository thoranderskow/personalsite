import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Navbar from './components/navbar.js'
import { motion } from 'framer-motion';

var imgs = ["/IMG_2348.JPG", "/IMG_4600.jpeg", "/IMG_8748.jpeg", "/IMG_8549.jpeg"]
var locations = ["Glasgow, UK", "Malibu, US", "Breckenridge, US", "Seattle, US"]
var counter = 0

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: "",
      opacity: 1,
      location: "",
      key: 0
    };
  }
  componentDidMount() {
    let key = Math.floor(Math.random()*imgs.length);
    this.setState({img_url: imgs[key],
    opacity: 1,
    location: locations[key],
    key: key});
  }
  render() {
    const changeBackground = () => {
      var k = this.state.key;
      if (k == imgs.length-1) {
        k = -1;
      }
      this.setState({img_url: imgs[k+1],
      location: locations[k+1],
      key: k+1});
    }
    return (
      <div>
      <Navbar color="white" outline="true"/>
      <div className={styles.location}>
      <div style={{width: "120px"}}>
      {this.state.location}
      </div>
      <button className={styles.btn} onClick={changeBackground}/>
      Click to change
      </div>
      <style global jsx>{`
        body {
          background-image: url(${this.state.img_url});
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          height: 90vh;
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
