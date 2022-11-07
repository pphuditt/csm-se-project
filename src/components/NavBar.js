import "../css/NavBar.css"
// import { ReactComponent as YourSvg } from '../statics/images/Untitled-1.svg';
// import { ReactComponent as UserSvg } from '../statics/user.svg';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, createTheme, ThemeProvider, Grid, Stack, Typography } from "@mui/material";

function NavBar() {

    const theme = createTheme(
        {
            typography: {
                fontFamily: "Sarabun",
            },
            palette: {
                custom: {
                    main: "#FFFFFF",
                }
            }
    }
    );

    const navigate = useNavigate();

    const userId = "GM001";


    return (
        <ThemeProvider theme={theme}>
            <div className="navbar">
                <Grid container>
                    <Grid item xs={12} lg={12}
                    marginTop={1}
                    marginRight={2}
                    display="flex"
                    justifyContent="flex-end"
                    fontSize={14}
                    color="#FFFFFF"
                    >
                        รหัสผู้ใช้งาน&nbsp;{userId}
                    </Grid>
                    <Grid item xs={12} lg={12}
                    marginRight={1}
                    display="flex"
                    justifyContent="flex-end"
                    fontSize={14}
                    color="#FFFFFF"
                    >
                        <Button 
                        variant="text"
                        color="custom"
                        onClick={() => navigate("/signin")}
                        >
                            <u>ออกจากระบบ</u>
                        </Button>
                    </Grid>
                </Grid>
            {/* <div className="user-button">
                <div className="user-icon">
                    <UserSvg />
                </div>
            </div> */}
        </div>
        </ThemeProvider>
    );
}

export default NavBar;