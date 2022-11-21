import { Button, createTheme } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "../css/Success.css";
import { ThemeProvider, Grid } from "@mui/material";
import { ReactComponent as SuccessIcon } from "../statics/success-icon.svg";
import axios from "axios";

function InformSuccess() {

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

    // const csmCode = "CSM-25651100001";

    const [csmCode, setCsmCode] = React.useState('')

    const getCsmData = () => {
        axios.get('http://localhost:5164/csmproblem')
        .then((response) => {
            let tmp = response.data
            let n = tmp.length
            console.log(tmp[n-1])
            setCsmCode(tmp[n-1].csmId)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    React.useEffect(()=>{
        getCsmData()
      },[])

    return (
        <ThemeProvider theme={theme}>
            <div className="page">
                <NavBar />
                
                <Grid container>
                    <Grid item xs={12} lg={12}
                    display="flex"
                    justifyContent="center"
                    marginTop={16}
                    >
                        <SuccessIcon />
                    </Grid>

                    <Grid item xs={12} lg={12}
                    display="flex"
                    justifyContent="center"
                    fontSize={28}
                    >
                        แจ้งปัญหาสำเร็จ
                    </Grid>

                    <Grid item xs={12} lg={12}
                    display="flex"
                    justifyContent="center"
                    fontSize={28}>
                        รหัสแจ้งซ่อม&nbsp;{csmCode}
                    </Grid>

                    <Grid item xs={12} lg={12}
                    display="flex"
                    justifyContent="center"
                    marginTop={3}
                    >
                        <Button
                        variant="outlined"
                        color="custom"
                        onClick={() => navigate("/home")}
                        size="large"
                        >
                            กลับสู่หน้าหลัก
                        </Button>
                    </Grid>
                </Grid>
            </div>
            
        </ThemeProvider>
    );
}

export default InformSuccess;