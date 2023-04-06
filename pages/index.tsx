import { Typography } from '@mui/material';
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open Jira</title>
      </Head>
      <main>
        <Typography variant='h3' fontWeight={400} color='primary' >Hola</Typography>
      </main>
    </>
  )
}

export default Home;