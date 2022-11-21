import * as React from "react";
import NavBar from "./NavBar";
import "../css/InformHistory.css";
import { Card, CardActionArea, CardContent, createTheme, Grid, ThemeProvider, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function InformHistory() {

    // const csmId = "CSM-25651100001"
    // const problemTopic = "น้ำมีตะกอน, น้ำรั่ว, ผนังร้าว"
    // const appointmentDate = "01/11/2022"

    const [csmId, setCsmId] = React.useState('')
    const [problemTopic, setProblemTopic] = React.useState('')
    const [appointmentDate, setAppointmentDate] = React.useState('')

    const navigate = useNavigate();

    const theme = createTheme({
        typography: {
            fontFamily: "Sarabun",
        },
        palette: {
            custom: {
                main: "#555555",
            }
        },
    });

    // const getCsmData = () => {
    //     axios.get('http://localhost:5164/csmproblem')
    //     .then((response) => {
            
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }

    // React.useEffect(()=>{
    //     getCsmData()
    //   },[])

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
                            sx={{ fontSize: 20 }}
                        >
                            ประวัติการแจ้งปัญหา
                        </Grid>
                    </Grid>
                    <div>

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
                                        onClick={() => navigate("/inform-history-description")}
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
                    </div>

                    <Grid container marginTop={4}>
                        <Grid item xs={12} lg={12}
                            marginRight={19.5}
                        >
                            <Stack
                                spacing={2}
                                direction="row"
                                justifyContent="flex-end"
                            >
                                <Button
                                    variant="outlined"
                                    color="custom"
                                    onClick={() => navigate("/home")}
                                    size="large"
                                >
                                    กลับ
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default InformHistory;