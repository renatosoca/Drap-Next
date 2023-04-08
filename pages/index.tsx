import { NextPage } from 'next';
import { Layout } from '@/components';
import { Card, CardHeader, Grid } from '@mui/material';
import { EntryList, NewEntry } from '@/components/ui';
import { useEntry } from '@/hooks';

const Home: NextPage = () => {

  const { entries } = useEntry();

  return (
    <Layout title='Home | Drag'>
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: 'calc(100vh - 100px)'}} >
            <CardHeader title='Pendiente' />

            <EntryList status='pending' />
            <NewEntry />
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: 'calc(100vh - 100px)'}} >
            <CardHeader title='En Progreso' />
            
            <EntryList status='in-progress' />
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: 'calc(100vh - 100px)'}} >
            <CardHeader title='Completadas' />
            
            <EntryList status='completed' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home;