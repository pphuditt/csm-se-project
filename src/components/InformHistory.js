import * as React from "react";
import NavBar from "./NavBar";
import "../css/InformHistory.css";
import { Card, CardActionArea, CardContent, createTheme, Grid, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function InformHistory() {

    const csmId = "CSM-25651100001"
    const problemTopic = "น้ำมีตะกอน, น้ำรั่ว, ผนังร้าว"
    const appointmentDate = "01/11/2022"


    const navigate = useNavigate();

    const theme = createTheme({
        typography: {
            fontFamily: "Sarabun",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="page">
                <NavBar />

                <Grid container
                spacing={2}
                >
                    <Grid container
                    direction="row"
                    marginBottom={3}
                    marginTop={8}
                    >
                        <Grid item xs={12} lg={12}
                        display="flex"
                        justifyContent="center"
                        sx = {{ fontSize: 20 }}
                        >
                            ประวัติการแจ้งปัญหา
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} lg={12}
                        display="flex"
                        justifyContent="center"
                        // sx = {{ fontSize: 20 }}
                        >
                            <Card sx={{
                                width: "80%",
                                height: "auto",
                                bgcolor: "#F3F4F6",
                            }}>
                                <CardActionArea
                                onClick={() => navigate("")}
                                sx={{
                                    fontFamily: "Sarabun",
                                    fontSize: 16,
                                }}
                                >
                                    <CardContent sx={{
                                        paddingTop: 4,
                                        paddingLeft: 10,
                                        paddingBottom: 4,
                                    }}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} lg={2} >
                                                รหัสแจ้งซ่อม&nbsp;
                                            </Grid>
                                            <Grid item xs={12} lg={10} >
                                                {csmId}
                                            </Grid>

                                            <Grid item xs={12} lg={2} >
                                                ปัญหาเรื่อง&nbsp;
                                            </Grid>
                                            <Grid item xs={12} lg={10} >
                                                {problemTopic}
                                            </Grid>

                                            <Grid item xs={12} lg={2} >
                                                วันที่นัด&nbsp;
                                            </Grid>
                                            <Grid item xs={12} lg={10} >
                                                {appointmentDate}
                                            </Grid>
                                        </Grid>

                                        <Grid container
                                        paddingRight={4}
                                        >
                                            <Grid item xs={12} lg={12}
                                            display="flex"
                                            justifyContent="flex-end"
                                            >
                                                <u>กดเพื่อดูเพิ่มเติม..</u>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default InformHistory;