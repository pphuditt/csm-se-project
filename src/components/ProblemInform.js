import { ThemeProvider, createTheme, Grid, Card, CardContent, TextField, Radio, FormControlLabel, MenuItem } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProblemInform.css";
import NavBar from "./NavBar";

function ProblemInform() {
    // function handleClick(event) {
    //     if (event.target.value === value) {
    //       setValue("");
    //     } else {
    //       setValue(event.target.value);
    //     }
    //   }

    const theme = createTheme({
        typography: {
          fontFamily: "Sarabun",
        },
      });

    const navigate = useNavigate();

    const addresses = [
        {
          value: '123',
          label: '123',
        },
        {
          value: '456',
          label: '456',
        },
        {
          value: '789',
          label: '789',
        },
        {
          value: '1011',
          label: '1011',
        },
      ];

      const [address, setAddress] = React.useState('');
      const handleChange = (event) => {
        setAddress(event.target.value);
      };

    const [cond, setCond] = React.useState("inform-by-owner");
    const handleClick = (event) => {
        if (event.target.value === cond) {
            setCond("");
          } else {
            setCond(event.target.value);
          }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="page">
                <NavBar />
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    // justifyContent="flex-start"
                    // alignItems="center"
                    marginTop={8}
                    marginBottom={3}
                    // paddingLeft={20}
                    fontSize={20}
                    // // paddingRight={30}
                    // //   columns={{ xs: 2, md: 12 }}
                >
                    <Grid item 
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    >
                        แจ้งปัญหา
                    </Grid>
                </Grid>

                <Grid 
                    container
                    // paddingLeft={20}
                    columnSpacing={2}
                    justifyContent="center"
                    direction="row"
                    // columns={{xs:16}}
                    >
                    <Grid item 
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    >
                        <Card sx={{
                            width: '80%',
                            height: "auto",
                            bgcolor: "#F3F4F6",
                            fontSize: 20,
                        }}
                        >
                            <CardContent sx={{
                                paddingTop: 4,
                                paddingLeft: 10,
                                spacing: 2,
                            }}>
                                ส่วนที่ 1 : กรอกข้อมูลส่วนตัว 
                                <br />
                                <Grid container>
                                    <Grid item xs={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        ชื่อเจ้าของบ้าน&nbsp;
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField
                                            margin="normal"
                                            id="house-owner-name"
                                            label="ชื่อเจ้าของบ้าน"
                                            disabled
                                            variant="filled"
                                            // value={}
                                        />
                                    </Grid>

                                    <Grid item xs={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        บ้านเลขที่&nbsp;
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div>
                                        <TextField
                                            margin="normal"
                                            id="address-number"
                                            label="บ้านเลขที่"
                                            select
                                            value={address}
                                            onChange={handleChange}
                                        >
                                            {addresses.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        </div>
                                        
                                    </Grid>

                                    <Grid item xs={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        ชื่อผู้แจ้งซ่อม&nbsp;
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            margin="normal"
                                            id="informer-name"
                                            label="ชื่อผู้แจ้งซ่อม"
                                            
                                            // value={}
                                            // onChange={}
                                        />
                                    </Grid>
                                    <Grid item xs={7} sx={{paddingTop: 3}}>
                                    {/* <FormControlLabel
                                    value="female"
                                    control={<Radio onClick={handleClick} />}
                                    label="Female"
                                    /> */}
                                        <FormControlLabel 
                                        value="inform-by-owner" 
                                        control={<Radio onClick={handleClick} />} 
                                        label="เจ้าของบ้านเป็นผู้แจ้งซ่อม" />
                                    </Grid>

                                    <Grid item xs={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        เบอร์โทรศัพท์ติดต่อ&nbsp;
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField
                                            margin="normal"
                                            id="informer-mobile-no"
                                            label="เบอร์โทรศัพท์ติดต่อ"
                                            // value={}
                                            // onChange={}
                                        />
                                    </Grid>
                                </Grid>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

        </ThemeProvider>
    );
}

export default ProblemInform;