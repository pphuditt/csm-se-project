import * as React from "react";
import NavBar from "./NavBar";
import "../css/StatusDescription.css";
import { Card, CardContent, createTheme, Grid, ThemeProvider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircleIcon from '@mui/icons-material/Circle';

function StatusDescription() {

    const theme = createTheme({
        typography: {
            fontFamily: "Sarabun",
          },
          palette: {
              custom: {
                  main: "#45B5A9",
                  contrastText: "#fff",
              },
              neutral: {
                main: "#555555",
              }
          },
    });

    const navigate = useNavigate();

    const csmId = "CSM-25651100001"
    const problemTopic = "น้ำมีตะกอน, น้ำรั่ว, ผนังร้าว"
    const appointmentDate = "01/11/2022"
    const ownerName = "นชา ฤทธิมัต";
    const address = "217/215";
    const informerName = "ปริชญา ศิรินันท์อนุกูล";
    const phoneNo = "0891127738"

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

                    <Grid container
                marginBottom={24}
                >
                    <Grid item xs={12} lg={12}
                    display="flex"
                    justifyContent="center"
                    >
                        <Card sx={{
                            width: "80%",
                            height: "auto",
                            bgcolor: "#F3F4F6",
                        }}>
                            <CardContent sx={{
                            paddingTop: 4,
                            paddingLeft: 10,
                            paddingBottom: 4,
                            }}>
                                <Grid container spacing={2}>
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
                                        ชื่อเจ้าของบ้าน&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {ownerName}
                                    </Grid>

                                    <Grid item xs={12} lg={2} >
                                        บ้านเลขที่&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {address}
                                    </Grid>

                                    <Grid item xs={12} lg={2} >
                                        ชื่อผู้แจ้งซ่อม&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {informerName}
                                    </Grid>

                                    <Grid item xs={12} lg={2} >
                                        เบอร์โทรศัพท์ติดต่อ&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {phoneNo}
                                    </Grid>

                                    <Grid item xs={12} lg={2} >
                                        วันที่นัด&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        {appointmentDate}
                                    </Grid>

                                    <Grid item xs={12} lg={12}
                                    display="flex"
                                    color="#45B5A9" // changes depend on status
                                    >
                                        <CircleIcon fontSize="small" /> 
                                        &nbsp;ดำเนินการซ่อมสำเร็จ
                                    </Grid>

                                    <Grid item xs={12} lg={12} 
                                    display="flex">
                                        <Button 
                                        variant="contained" 
                                        color="custom"
                                        size="large"
                                        disableElevation
                                        onClick={() => {navigate("/task-complete")}}
                                        >
                                            กดยืนยันได้รับการซ่อมสำเร็จ
                                        </Button>
                                    </Grid>



                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid container marginTop={4}>
                        <Grid item xs={12} lg={12}
                        display="flex"
                        justifyContent="flex-end"
                        marginRight={19.5}
                        >
                                <Button 
                                variant="outlined"
                                color="neutral"
                                onClick={() => navigate("/status")}
                                size="large"
                                >
                                    กลับ
                                </Button>
                        </Grid>
                    </Grid>

                </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default StatusDescription;