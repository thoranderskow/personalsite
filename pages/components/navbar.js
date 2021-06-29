import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion';

export default class extends React.Component {
  render () {
    return(
      <motion.div layoutId="moveHeader" className={styles.navbar}>
          <div className={styles.title}>
            <Link href='./'><a>Thor Anderskow</a></Link>
          </div>
          <div className={styles.container}>
              <Link href='./proj'><a>Personal Projects</a></Link>
              <div>YO</div>
              <div>YO</div>
          </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: white;
        }
        `}
      </style>
      </motion.div>
    )
  }
}
