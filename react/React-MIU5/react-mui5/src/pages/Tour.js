import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper"
import BasicModal from "../components/Model";


const Tour = () => {
  return (
    <Container sx={{ width: 700 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Is it Wednesday my dude?
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://pbs.twimg.com/media/FTmFRkIXoAEkoww?format=jpg&name=small"
          alt=""
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          Wednesday may not be daily, however Wednesday is eternal.
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis bibendum tristique. Donec semper lacus arcu, quis dictum tortor tincidunt et. Donec consectetur ultricies mi et dignissim. Fusce a malesuada tellus. Maecenas nec tempus nulla. In pellentesque eu nulla eget.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions.
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour