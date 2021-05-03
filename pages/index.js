import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import styled from 'styled-components'

const H1 = styled.h1`
  color: white
`
const P = styled.p`
  color: white;
  text-align: center;
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <H1> THE SURGEON </H1>
        <Navbar />
        <p> Automotive Maintenance simplified </p>
      </Layout>
	  </div>
  )
}
