import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import styled from 'styled-components'
import Link from 'next/link'

const H1 = styled.h1`

`
const P = styled.p`
  color: white;
  text-align: center;
  width: 100%;
`

const CTA = styled.p`
  
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.Home}>
          <H1 className={styles.title}> THE SURGEON </H1>
          <div style={{gridRow: 3}}>
            <CTA className={styles.cta}> Lorem ipsum whatever ipsum whatever ipsum whatever ipsum whatever ipsum whatever ipsum whatever ipsum whatever ipsum whatever ipsum whatever ipsum whatever </CTA>
            <Link href="" style={{width:100}}>
              <a className={styles.link}>Get A Quote</a>  
            </Link> 
          </div>
        </div>
      </Layout>
	  </div>
  )
}
