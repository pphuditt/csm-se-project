import * as React from "react";
import NavBar from "./NavBar";
import "../css/InformHistoryDescription.css";
import { Card, CardContent, createTheme, Grid, ThemeProvider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function InformHistoryDescription() {

    const ownerName = "นชา ฤทธิมัต";
    const address = "217/215";
    const informerName = "ปริชญา ศิรินันท์อนุกูล";
    const phoneNo = "0891127738"
    const csmId = "CSM-25651100001";
    const topic1 = "น้ำมีตะกอน";
    const desc1 = "อยู่ดี ๆ ก็น้ำมีสีแปลก ๆ หลุดออกมาเหมือนมีตะกอนอยู่ค่ะ สีออกแนวส้ม ๆ ";
    const topic2 = "น้ำรั่ว";
    const desc2 = "เวลาปิดฝักบัวสนิทแล้วแต่เหมือนมีน้ำหยดเรื่อย ๆ ค่ะ";
    const topic3 = "ผนังร้าว แตก หรือมีรอยแยก";
    const desc3 = "บนผนังบริเวณห้องครัวมีรอยแตกยาวประมาณ 10 เซน";
    const topic4 = "กริ่งหน้าบ้านพัง";
    const desc4 = "กริ่งกดแล้วไม่มีเสียงออก";
    const date1 = "22/10/2021";
    const date2 = "23/10/2021";
    const date3 = "24/10/2021";

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
                            รายละเอียดประวัติการแจ้งปัญหา
                        </Grid>
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
                                        ปัญหาเรื่องที่1&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {topic1}
                                    </Grid>
                                    <Grid item xs={12} lg={2} >
                                        รายละเอียดปัญหา&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {desc1}
                                    </Grid>
                                    <Grid item xs={12} lg={12} >
                                        <hr />
                                    </Grid>

                                    <Grid item xs={12} lg={2} >
                                        ปัญหาเรื่องที2&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {topic2}
                                    </Grid>
                                    <Grid item xs={12} lg={2} >
                                        รายละเอียดปัญหา&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {desc2}
                                    </Grid>
                                    <Grid item xs={12} lg={12} >
                                        <hr />
                                    </Grid>

                                    <Grid item xs={12} lg={2} >
                                        ปัญหาเรื่องที3&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {topic3}
                                    </Grid>
                                    <Grid item xs={12} lg={2} >
                                        รายละเอียดปัญหา&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {desc3}
                                    </Grid>
                                    <Grid item xs={12} lg={12} >
                                        <hr />
                                    </Grid>

                                    <Grid item xs={12} lg={2} >
                                        ปัญหาเรื่องที4&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {topic4}
                                    </Grid>
                                    <Grid item xs={12} lg={2} >
                                        รายละเอียดปัญหา&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10} >
                                        {desc4}
                                    </Grid>


                                    <Grid item xs={12} lg={2} >
                                        วันที่สะดวก&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        {date1},&nbsp;{date2},&nbsp;{date3}
                                    </Grid>

                                    <Grid item xs={12} lg={2} >
                                        วันที่นัด&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        {date1}
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
                                color="custom"
                                onClick={() => navigate("/inform-history")}
                                size="large"
                                >
                                    กลับ
                                </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default InformHistoryDescription;