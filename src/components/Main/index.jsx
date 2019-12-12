import React, { Fragment, useState, useEffect } from "react";
import { AppBar, Typography, Container, Grid } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/actions";
import FlightCard from "../FlightCard";
import DrawerForm from "../FormComp/index";
import flights from "../../assets/fd";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    color: "#fff"
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  main: {
    flexGrow: 1,
    paddingTop: theme.spacing(3)
  }
}));

const MainComp = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const allFlights = useSelector(state => state.allFlights);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            Flight Search Engine
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            <DrawerForm allFlights={allFlights} setMobileOpen={setMobileOpen} />
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            <DrawerForm allFlights={allFlights} setMobileOpen={setMobileOpen} />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.main}>
        <div className={classes.toolbar}>Hello people</div>
        <Container>
          <Grid container>
            {allFlights.length ? (
              allFlights.map(flight => (
                <FlightCard key={flight.id} flight={flight} />
              ))
            ) : (
              <Typography variant="h6">
                No Flights Available on Your Search
              </Typography>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

MainComp.propTypes = {};

export default MainComp;
