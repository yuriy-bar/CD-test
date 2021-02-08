import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    align: "center",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
    alignItems: "center",
  },
  cardContent: {
    flexGrow: 1,
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
    alignItems: "center",
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

const cards = [1];

export default function Album() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            {/* <Typography
              component="h4"
              variant="h4"
              color="wiht"
              gutterBottom
              marginRight
            >
              NASA Api
            </Typography> */}
          </Tabs>
        </AppBar>
      </Container>

      <TabPanel value={value} index={0}>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
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
        <Typography
          component="h3"
          variant="h3"
          color="wiht"
          // gutterBottom
          align="center"
        >
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
        </div>
        <div className={classes.imageCenter}>
          <Grid container spacing={0}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
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
