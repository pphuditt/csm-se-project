import * as React from "react";
import {  CardActionArea, createTheme, Grid, ThemeProvider } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import NavBar from "./NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";
import {ReactComponent as StatusIcon} from "../statics/status-icon.svg";
import {ReactComponent as ProblemInformIcon} from "../statics/problem-inform-icon.svg"
import {ReactComponent as InformHistoryIcon} from "../statics/inform-history-icon.svg";

function HomePage() {
  
  const theme = createTheme({
    typography: {
      fontFamily: "Sarabun",
    },
  });

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <div className="page">
        <NavBar />
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginTop={8}
          marginBottom={10}
          // paddingLeft={30}
          // paddingRight={30}
        //   columns={{ xs: 2, md: 12 }}
        >
          <Grid item>
            <Card
              sx={{
                width: 250,
                height: 350,
                boxShadow: 2,
              }}
            >
              <CardActionArea 
                onClick={() => navigate("/status")}
                justifyContent="center"
                sx={{
                height: 350,
                fontFamily: "Sarabun",
                paddingTop: 5,
                fontSize: 20,
              }}
              >
                <CardContent 
                  sx={{
                  textAlign: "center",
                  padding: 0,
                  }}>
                  <StatusIcon />
                  <br />
                  <br />
                  ติดตามสถานะ
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
{/* -------------------------------------- */}

          <Grid item>
            <Card
              sx={{
                width: 250,
                height: 350,
                boxShadow: 2,
              }}
            >
              <CardActionArea 
                onClick={() => navigate("/problem-inform")}
                justifyContent="center"
                sx={{
                height: 350,
                fontFamily: "Sarabun",
                fontSize: 20,
              }}
              >
                <CardContent 
                  sx={{
                  textAlign: "center",
                  padding: 0,
                  }}>
                  <ProblemInformIcon />
                  <br />
                  <br />
                  แจ้งปัญหา
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
{/* ------------------------------------------------- */}

          <Grid item>
            <Card
              sx={{
                width: 250,
                height: 350,
                boxShadow: 2,
              }}
            >
              <CardActionArea 
                onClick={() => navigate("/inform-history")}
                justifyContent="center"
                sx={{
                height: 350,
                fontFamily: "Sarabun",
                fontSize: 20,
              }}
              >
                <CardContent 
                  sx={{
                  textAlign: "center",
                  padding: 0,
                  }}>
                  <InformHistoryIcon />
                  <br />
                  <br />
                  ประวัติการแจ้งปัญหา
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
