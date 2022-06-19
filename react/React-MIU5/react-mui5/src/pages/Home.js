import TourCard from '../components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import YearsOfWednesday from "../data.json"
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div className='App'>
      <Container sx={{
        marginY: 5
      }}>
        {YearsOfWednesday.map((year, index) => (
          <>
            <Typography
              variant='h4'
              component='h2'
              marginTop={5}
              marginBottom={3}
              key={index}
            >
              {year.name}
            </Typography>
            <Grid container spacing={5}>
                {year.wednesdays.map((wednesday, index) => (
                  <TourCard wednesday={wednesday} key={index} />
                ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  )
}

export default Home