import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  imageCenter: {
    justify: "center",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Album() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [count, setCount] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function loadIMAG() {
    console.log("test");
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=8YDVgVuKzVl3dx2IYvRmBjidFPtF3bANvzwHZs2s"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setCount(result.url);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        wigth="100%"
        display="flex"
        position="relative"
        align-items="center"
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="ROVER" {...a11yProps(0)} />
            <Tab label="CAMERA" {...a11yProps(1)} />
            <Tab label="SOL" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </Container>

      <TabPanel value={value} index={0}>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" onClick={loadIMAG}>
                Curiosity
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Opportunity
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Spirit
              </Button>
            </Grid>
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Front
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Rear
              </Button>
            </Grid>
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography component="h3" variant="h3" color="wiht" align="center">
          Mars day
        </Typography>
      </TabPanel>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="initial"
              gutterBottom="true"
            >
              NASA Api
            </Typography>
          </Container>
          <Typography component="h3" variant="h3" color="wiht" align="center">
            <div className={classes.imageCenter}>
              <Button
                variant="contained"
                color="primary"
                onClick={loadIMAG}
                justify="center"
              >
                GET image from NASA Api
              </Button>
            </div>
          </Typography>
        </div>
        <div className={classes.imageCenter}>
          <img src={count} alt="" width="100%"></img>
          <div className={classes.root}>
            <Pagination count={5} color="primary" justify="center" />
          </div>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
      </footer>
    </React.Fragment>
  );
}
