import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/Home.module.scss';
import Intro from './intro/intro';
import Portfolio from './portfolio/portfolio';

export default function Home() {
  return (   
    <Fragment>
        <Head>
        <title>Ahmed Abou Khatwa CV</title>
        </Head>
        <Intro />
        <Portfolio/>
    </Fragment>
  )
}
