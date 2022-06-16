import React from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  useTheme,
  Divider,
} from "@mui/material";
import { backgroundStyle, cardStyle } from "./styles";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { TabPanelProps } from "./types";

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={backgroundStyle}>
      <Box sx={{ padding: "4rem 5rem 0 0" }}>
        <Card sx={cardStyle}>
          <CardContent>
            <Box sx={{ padding: "2rem 5rem", color: "#5C5C5C" }}>
              <Typography variant="h5" fontWeight={700}>
                comfy decor
              </Typography>
              <Typography variant="h6" fontWeight={500}>
                the furniture store
              </Typography>
              <Divider sx={{ margin: "1rem 0" }} />
              <Typography
                variant="body1"
                sx={{ margin: "1rem" }}
                fontWeight={700}
              >
                Adminstrator Panel
              </Typography>
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  label="Login"
                  {...a11yProps(0)}
                  sx={{ margin: "0 0 0 auto" }}
                />
                <Tab
                  label="Register"
                  {...a11yProps(1)}
                  sx={{ margin: "0 auto 0 0" }}
                />
              </Tabs>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0}>
                  <LoginForm />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <RegisterForm />
                </TabPanel>
              </SwipeableViews>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
