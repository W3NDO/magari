import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1> Hello World </h1>
      <Navbar />
      <p> Welcome to the surgeon </p>
	  </div>
  )
}
