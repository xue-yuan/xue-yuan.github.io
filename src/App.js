import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import { amber } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCube, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";
import db from "./db.json";

function IconConv(i) {
  switch (i) {
    case "github":
      return faGithub;
    case "instagram":
      return faInstagram;
    case "linkedin":
      return faLinkedin;
    case "spotify":
      return faSpotify;
    case "medium":
      return faMediumM;
    case "blog":
      return faCube;
    default:
      return;
  }
}

const LINKS = db.link.map((e, index) => {
  return (
    <Grid item>
      <Button
        variant="outlined"
        key={index}
        color="primary"
        sx={{ width: "100%", justifyContent: "flex-center", p: 0 }}
      >
        <Link
          href={e.link}
          underline="none"
          target="_blank"
          sx={{ width: "100%", p: 1 }}
        >
          <FontAwesomeIcon icon={IconConv(e.icon)} size="xl" />
          <Typography sx={{ textTransform: "none" }}>{e.name}</Typography>
        </Link>
      </Button>
    </Grid>
  );
});

const PROJECTS = db.projects.map((e, index) => {
  return (
    <Grid item key={index}>
      <Typography variant="h5">{e.name}</Typography>
      <Typography sx={{ fontSize: 13 }} color="text.secondary" noWrap={true}>
        {e.description}
      </Typography>
      <Link href={e.link} underline="none" target="_blank">
        <Typography sx={{ textTransform: "none" }}>Link</Typography>
      </Link>
    </Grid>
  );
});

const ARCHIVES = db.archives.map((e, index) => {
  return (
    <Grid item key={index}>
      <Typography variant="h5">{e.name}</Typography>
      <Link href={e.link} underline="none" target="_blank">
        <Typography sx={{ textTransform: "none" }}>Link</Typography>
      </Link>
    </Grid>
  );
});

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
  };
}

function RandomEmoji() {
  const e = [
    "🫐",
    "🧇",
    "💻",
    "⛄️",
    "🌴",
    "🍉",
    "🍓",
    "🍕",
    "🐳",
    "🦐",
    "🍣",
    "🎁",
  ];
  return e[Math.floor(Math.random() * e.length)];
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: amber[800],
        main: amber[800],
        dark: amber[800],
      },
    },
    typography: {
      fontFamily: ["Roboto Mono"].join(","),
    },
  });

  React.useEffect(() => {
    document.title = "Denon " + RandomEmoji();
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container sx={{ pt: { xs: 4, md: 10 } }}>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            sx={{ p: 2 }}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ pt: { xs: 3, md: 5 } }}
              >
                <Grid item>
                  <Avatar
                    src={process.env.PUBLIC_URL + "/avatar.png"}
                    sx={{ width: 144, height: 144 }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ pt: 1 }}
                    color="text.secondary"
                    variant="h5"
                  >
                    Ares
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 13 }} color="text.secondary">
                    Software Engineer
                  </Typography>
                </Grid>
                <Divider sx={{ width: 100, my: 1 }} />
                <Typography sx={{ textTransform: "none", pl: 1 }}>
                  "I code, therefore I am."
                </Typography>
                <Grid
                  container
                  direction="column"
                  alignItems="left"
                  justifyContent="left"
                >
                  <Grid item>
                    <Button variant="text" href="mailto:denon@xueyuan.dev">
                      <FontAwesomeIcon icon={faEnvelope} size="lg" fixedWidth />
                      <Typography sx={{ textTransform: "none", pl: 1 }}>
                        denon[at]xueyuan.dev
                      </Typography>
                    </Button>
                  </Grid>
                  {/* <Grid item>
                    <Button variant="text" href={process.env.PUBLIC_URL + '/CV.pdf'}>
                      <FontAwesomeIcon icon={faBookmark} size="lg" fixedWidth />
                      <Typography sx={{ textTransform: 'none', pl: 1 }}>Resume</Typography>
                    </Button>
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider", maxWidth: 500 }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                >
                  <Tab
                    label="⚡️ Link"
                    {...a11yProps(0)}
                    sx={{
                      textTransform: "none",
                    }}
                  />
                  <Tab
                    label="📦 Project"
                    {...a11yProps(1)}
                    sx={{
                      textTransform: "none",
                    }}
                  />
                  <Tab
                    label="📚 Archive"
                    {...a11yProps(2)}
                    sx={{
                      textTransform: "none",
                    }}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Grid
                  container
                  spacing={2}
                  direction="column"
                  justifyContent="center"
                >
                  {LINKS}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid
                  container
                  spacing={2}
                  direction="column"
                  justifyContent="center"
                >
                  {PROJECTS}
                </Grid>
                <Link
                  href="https://github.com/xue-yuan"
                  underline="none"
                  target="_blank"
                >
                  <Typography
                    sx={{
                      textTransform: "none",
                      fontSize: 18,
                      py: 1,
                      my: 2,
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                      textAlign: "center",
                    }}
                    color="black"
                  >
                    See More 🎉
                  </Typography>
                </Link>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid
                  container
                  spacing={2}
                  direction="column"
                  justifyContent="center"
                >
                  {ARCHIVES}
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
