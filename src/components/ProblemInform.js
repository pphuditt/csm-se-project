import { ThemeProvider, createTheme, Grid, Card, CardContent, TextField, Radio, FormControlLabel, MenuItem, RadioGroup, Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProblemInform.css";
import NavBar from "./NavBar";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack } from "@mui/system";
import {ReactComponent as AddProblems} from "../statics/add-problem.svg";

function ProblemInform() {

    const textStyles = {
        width: 300
    }

    const theme = createTheme({
        typography: {
          fontFamily: "Sarabun",
        },
        palette: {
            primary: {
                main: "#555555",
            },
            custom: {
                main:  "#EB6B97",
                contrastText: "#FFF"
            }
        }
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

    const [cond, setCond] = React.useState("");

    const [date1, setDate1] = React.useState(null);
    const [date2, setDate2] = React.useState(null);
    const [date3, setDate3] = React.useState(null);


    return (
        <ThemeProvider theme={theme}>
            <div className="page">
                <NavBar />
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    marginTop={8}
                    marginBottom={3}
                    fontSize={20}
                    // //   columns={{ xs: 2, md: 12 }}
                >
                    <Grid item 
                    xs={12}
                    lg={12}
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
                    marginBottom={4}
                    >
                    <Grid item 
                    xs={12} lg={12}
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
                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        ชื่อเจ้าของบ้าน&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <TextField
                                        style={textStyles}
                                        margin="normal"
                                        id="house-owner-name"
                                        disabled
                                        variant="filled"
                                        // value={}
                                        // onChange={}
                                        />
                                    </Grid>

                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        บ้านเลขที่&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <div>
                                        <TextField
                                        style={{ width: 128 }}
                                        margin="normal"
                                        id="address-number"
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

                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        ชื่อผู้แจ้งซ่อม&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <TextField
                                        style={textStyles}
                                        margin="normal"
                                        id="informer-name"
                                        // value={}
                                        // onChange={}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={4} sx={{paddingTop: 3}}>
                                        <RadioGroup
                                        aria-labelledby="inform-by-owner"
                                        value={cond}>
                                            <FormControlLabel 
                                            value="inform-by-owner" 
                                            control={<Radio onClick={(event) => {
                                                if (event.target.value === cond) {
                                                    setCond("");
                                                  } else {
                                                    setCond(event.target.value);
                                                  }
                                            }} />} 
                                            label="เจ้าของบ้านเป็นผู้แจ้งซ่อม" />
                                        </RadioGroup>
                                    </Grid>

                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        เบอร์โทรศัพท์ติดต่อ&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <TextField
                                        style={textStyles}
                                        margin="normal"
                                        id="informer-mobile-no"
                                        // value={}
                                        // onChange={}
                                        />
                                    </Grid>
                                </Grid>
                                
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* -------------------------------------- */}

                    <Grid item 
                    xs={12} lg={12}
                    display="flex"
                    justifyContent="center">
                        <Card sx={{
                            width: '80%',
                            height: "auto",
                            bgcolor: "#F3F4F6",
                            fontSize: 20,
                            marginTop: 2,
                        }}
                        >
                            <CardContent sx={{
                                paddingTop: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                spacing: 2,
                            }}>
                                ส่วนที่ 2 : รายงานปัญหา
                                <br />
                                <div className="problem1">
                                <Grid container 
                                // columns={{xs:12, lg:10}}
                                >
                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        ปัญหาเรื่อง&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <Stack>
                                            <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem"
                                            select
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                            <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem-other"
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        รายละเอียดปัญหา&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={9}>
                                        <TextField
                                            margin="normal"
                                            id="problem-description"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            // value={}
                                            // onChange={}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <Button variant="text">
                                            <AddProblems />
                                            &nbsp;&nbsp;<u>เพิ่มปัญหา</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                </div>

                                <div className="problem2">
                                <Grid container 
                                // columns={{xs:12, lg:10}}
                                >
                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        ปัญหาเรื่อง&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <Stack>
                                            <TextField
                                            style={{ width: 300 }}
                                            margin="normal"
                                            id="problem"
                                            select
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                            <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem-other"
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        รายละเอียดปัญหา&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={9}>
                                        <TextField
                                            margin="normal"
                                            id="problem-description"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            // value={}
                                            // onChange={}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <Button variant="text">
                                            <AddProblems />
                                            &nbsp;&nbsp;<u>เพิ่มปัญหา</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                </div>

                                <div className="problem3">
                                <Grid container 
                                // columns={{xs:12, lg:10}}
                                >
                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        ปัญหาเรื่อง&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <Stack>
                                            <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem"
                                            select
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                            <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem-other"
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        รายละเอียดปัญหา&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={9}>
                                        <TextField
                                            margin="normal"
                                            id="problem-description"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            // value={}
                                            // onChange={}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <Button variant="text">
                                            <AddProblems />
                                            &nbsp;&nbsp;<u>เพิ่มปัญหา</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                </div>

                                <div className="problem4">
                                <Grid container 
                                // columns={{xs:12, lg:10}}
                                >
                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        ปัญหาเรื่อง&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <Stack>
                                            <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem"
                                            select
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                            <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem-other"
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        รายละเอียดปัญหา&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={9}>
                                        <TextField
                                            margin="normal"
                                            id="problem-description"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            // value={}
                                            // onChange={}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <Button variant="text">
                                            <AddProblems />
                                            &nbsp;&nbsp;<u>เพิ่มปัญหา</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                </div>

                                <div className="problem5">
                                <Grid container 
                                // columns={{xs:12, lg:10}}
                                >
                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        ปัญหาเรื่อง&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <Stack>
                                            <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem"
                                            select
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                            <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem-other"
                                            // value={address}
                                            // onChange={handleChange}
                                            />
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        รายละเอียดปัญหา&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={9}>
                                        <TextField
                                            margin="normal"
                                            id="problem-description"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            // value={}
                                            // onChange={}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <Button variant="text">
                                            <AddProblems />
                                            &nbsp;&nbsp;<u>เพิ่มปัญหา</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                </div>

                                <Grid container>
                                    <Grid item xs={12} lg={2} sx={{
                                        paddingTop: 2,
                                        fontSize: 16,
                                        spacing: 2
                                    }}>
                                        วันที่สะดวก&nbsp;
                                    </Grid>
                                    <Grid item xs={12} lg={2} sx={{
                                        marginTop: 2,
                                        marginBottom: 2,
                                    }}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Stack spacing={3} style={textStyles}>
                                                <DatePicker
                                                inputFormat="dd/MM/yyyy"
                                                value={date1}
                                                onChange={(newValue) => {
                                                    setDate1(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                                />
                                                <DatePicker
                                                inputFormat="dd/MM/yyyy"
                                                value={date2}
                                                onChange={(newValue) => {
                                                    setDate2(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                                />
                                                <DatePicker
                                                inputFormat="dd/MM/yyyy"
                                                value={date3}
                                                onChange={(newValue) => {
                                                    setDate3(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} helperText="(ไม่บังคับ)" />}
                                                />
                                            </Stack>
                                            
                                        </LocalizationProvider>
                                        
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                    
                </Grid>

                <Grid 
                container
                justifyContent="center"
                marginBottom={2}
                >
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
                                onClick={() => navigate("/home")}
                                size="large"
                                >
                                    กลับ
                                </Button>

                                <Button variant="contained"
                                color="custom"
                                onClick={() => navigate("/inform-success")}
                                size="large"
                                >
                                    ตกลง
                                </Button>
                            </Stack>
                        </Grid>
                </Grid>
            </div>

        </ThemeProvider>
    );
}

export default ProblemInform;