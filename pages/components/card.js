import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion';

// this component taken from https://codepen.io/eyupucmaz/pen/oNbeXOb
export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <a href={this.props.link} style={{textDecoration: "none", color: "black"}} rel="noreferrer" target="_blank">
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
              <div className="descimg"/>
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
                      <span className="descfavi" />
                      <div className={styles.userInfo}>
                          <h5>{this.props.date_started}</h5>
                          <small>{this.props.hoster}</small>
                      </div>
                  </div>
          </div>
      </motion.div>
      <style jsx>{`
        .descimg {
          background-image: url(${this.props.image});
          background-position: center center;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .descfavi {
          background-image: url(${this.props.favicon});
          background-position: center center;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        `}
      </style>
      </a>
    )
  }
}
