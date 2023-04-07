import { NextPage } from 'next';
import { Layout } from '@/components';
import { Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Layout title='Open-Jira'>
      <Typography variant='h3' fontWeight={400} color='primary' >Hola</Typography>
    </Layout>
  )
}

export default Home;