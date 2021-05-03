import styled from 'styled-components';
import Link from 'next/link';
import styles from './navbar.module.css'//styling for the navbar div
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

function showMenu(){
}

function Nav(){
  return(
    <div className={styles.links}>
      <Link className={styles.link} href='/'><a>Home</a></Link>
      <Link className={styles.link} href='/projects'><a>Projects</a></Link>
      <Link className={styles.link} href='/services'><a>Services</a></Link>
      <Link className={styles.link} href='/contacts'><a>Contacts</a></Link>
    </div>
  )
}

export default function Navbar(){
    return(
      <div className={styles.container}>
            <button className={styles.burger} onClick={showMenu}> <FontAwesomeIcon icon={faCoffee}/></button>
            <Nav />
        </div>
    )
}
