import * as React from "react";
import NavBar from "./NavBar";
import "../css/StatusAll.css";
import { Card, CardActionArea, CardContent, createTheme, Grid, ThemeProvider, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircleIcon from '@mui/icons-material/Circle';

function StatusAll() {

    const theme = createTheme({
        typography: {
            fontFamily: "Sarabun",
          },
          palette: {
              custom: {
                  main: "#555555"
              },
          },
    });

    const navigate = useNavigate();

    const csmId = "CSM-25651100001"
    const problemTopic = "น้ำมีตะกอน, น้ำรั่ว, ผนังร้าว"
    const appointmentDate = "01/11/2022"

    // const borderColor = (inputStatus) =>{
    //     if (inputStatus === "กำลังดำเนินการซ่อม") return "#EB6B97"
    //     else if (inputStatus === "กำลังดำเนินการส่งเรื่อง") return "#FFC72C"
    //     else if (inputStatus === "ดำเนินการซ่อมสำเร็จ") return "#45B5A9"
    // }
    
    // const status = (inputStatus) => {
    //     if (inputStatus === "กำลังดำเนินการซ่อม") return "กำลังดำเนินการซ่อม"
    //     else if (inputStatus === "กำลังดำเนินการส่งเรื่อง") return "กำลังดำเนินการส่งเรื่อง"
    //     else if (inputStatus === "ดำเนินการซ่อมสำเร็จ") return "ดำเนินการซ่อมสำเร็จ"
    // }

    return(
        <ThemeProvider theme={theme}>
            <div className="page">
                <NavBar />

                <Grid container spacing={2}>
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
                            ติดตามสถานะ
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
                                borderRadius: 4,
                                border: 2,
                                borderLeft: 16,
                                borderColor: "#45B5A9" // changes depend on status
                            }}>
                                <CardActionArea
                                onClick={() => navigate("/status-description")}
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
                                        marginTop={2}
                                        paddingRight={4}
                                        >
                                            <Grid item xs={12} lg={10}
                                            display="flex"
                                            color="#45B5A9" // changes depend on status
                                            >
                                                <CircleIcon fontSize="small" /> 
                                                &nbsp;ดำเนินการซ่อมสำเร็จ
                                            </Grid>

                                            <Grid item xs={12} lg={2}
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

export default StatusAll;