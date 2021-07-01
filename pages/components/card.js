import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion';

// this component taken from https://codepen.io/eyupucmaz/pen/oNbeXOb
export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <a href={this.props.link} style={{textDecoration: "none", color: "black"}} target="_blank">
      <motion.div className={styles.card} whileHover={{
        position: 'relative',
        zIndex: 1,
        background: 'white',
        scale: 1.1,
        transition: {
          duration: .2
        }
      }}>
          <div className={styles.cardHeader}>
              <img src={this.props.image} alt="example_image" />
          </div>
          <div className={styles.cardBody}>
              <span style={{backgroundColor: this.props.color}}className={styles.tag}>{this.props.tag}</span>
                  <h4>
                  {this.props.info}
                  </h4>
                  <a style={{color: this.props.color}}href={this.props.link}>{this.props.link}</a>
                  <p>
                  {this.props.description}
                  </p>
                  <div className={styles.user}>
                      <img src={this.props.favicon} alt="favi" />
                      <div className={styles.userInfo}>
                          <h5>{this.props.date_started}</h5>
                          <small>{this.props.hoster}</small>
                      </div>
                  </div>
          </div>
      </motion.div>
      </a>
    )
  }
}
