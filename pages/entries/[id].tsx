import { GetServerSideProps } from 'next';
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, Grid, RadioGroup, TextField } from '@mui/material';
import { SaveAltTwoTone } from '@mui/icons-material';
import { isValidObjectId } from 'mongoose';
import { Layout } from '@/components';

const EntryPage = () => {
  return (
    <Layout title='Item' >
      <Grid container justifyContent='center' sx={{ marginTop: 2 }} >
        <Grid item xs={12} sm={ 8 } md={ 6 } >
          <Card>
            <CardHeader title="Entrada" subheader="Holaaa" />

            <CardContent >
              <TextField 
                fullWidth
                placeholder='Titulo'
                autoFocus
                multiline
                label='Titulo'
              />

              <FormControl>
                <RadioGroup>

                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              
              <Button
                startIcon={<SaveAltTwoTone />}
                variant='contained'
                fullWidth
              >
                Guardar
              </Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  if (isValidObjectId(id)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      id,
    }
  }
}

export default EntryPage;