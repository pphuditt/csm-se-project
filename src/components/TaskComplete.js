import { Button, createTheme } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "../css/TaskComplete.css";
import { ThemeProvider, Grid } from "@mui/material";
import { ReactComponent as SuccessIcon } from "../statics/success-icon.svg";


function TaskComplete() {

    const theme = createTheme({
        typography: {
            fontFamily: "Sarabun",
          },
          palette: {
            custom: {
                main: "#555555"
            },
        },
    })

    const navigate = useNavigate();

    return(
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
                        ดำเนินการซ่อมสำเร็จ
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

export default TaskComplete;