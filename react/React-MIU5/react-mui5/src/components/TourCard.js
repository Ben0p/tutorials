import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { VisibilityOutlined } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2'
          },
          style: {
            fontSize: 11
          }
        },
        {
          props: {
            variant: 'body3'
          },
          style: {
            fontSize: 9
          }
        }
      ]
    }
  }
})

const TourCard = ({wednesday}) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src={wednesday.image}
            alt=''
            className='img'
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {wednesday.name}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <VisibilityOutlined sx={{ width: 12.5 }} />
              <Typography
                variant='body2'
                component='p'
                marginLeft={0.5}
              >
                {wednesday.views} Views
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 3
              }}
            >
              <Rating value={wednesday.rating} size="small" readOnly />
              <Typography
                variant='body2'
                component='p'
                marginLeft={0.5}
              >
                {wednesday.rating}/5
              </Typography>
              <Typography
                variant='body3'
                component='p'
                marginLeft={1.5}
              >
                ({wednesday.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='h6'
                component='h3'
                marginTop={0}
              >
                From {wednesday.price} SHIB
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard