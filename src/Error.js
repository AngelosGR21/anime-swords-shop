import { Container, Typography, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import image from "./utils/errorImage.png";

import useStyles from "./styles/errorPageStyles";

const Error = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        className={classes.errorPageContainer}
        component="section"
      >
        <img
          src={image}
          alt="demon slayer"
          className={classes.errorPageImage}
        ></img>
        <Box className={classes.errorPageBox}>
          <Typography className={classes.errorPageHeader}>
            Oops, page not found
          </Typography>
          <Link to="/" className={classes.errorPageLink}>
            <Button className={classes.errorPageButton}>Go Back</Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Error;
