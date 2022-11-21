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
import axios from "axios";

function ProblemInform() { 

    const navigate = useNavigate();

    const [cond, setCond] = React.useState("");

    // visible function
    const [visibleProblem2, setVisibleProblem2] = React.useState(true)
    const [visibleProblem3, setVisibleProblem3] = React.useState(true)
    const [visibleProblem4, setVisibleProblem4] = React.useState(true)
    const [visibleProblem5, setVisibleProblem5] = React.useState(true)

    const [visibleAddProblem1, setVisibleAddProblem1] = React.useState(false)
    const [visibleAddProblem2, setVisibleAddProblem2] = React.useState(false)
    const [visibleAddProblem3, setVisibleAddProblem3] = React.useState(false)
    const [visibleAddProblem4, setVisibleAddProblem4] = React.useState(false)

    // from get api
    const [addresses, setAddresses] = React.useState([])
    const [problemList, setProblemList] = React.useState([])
    const [userfname, setUserfname] = React.useState('')
    const [userPhoneNum, setUserPhoneNum] = React.useState('')

    // to push api
    const [address, setAddress] = React.useState('')
    const [userInform, setUserInform] = React.useState('')
    const [userInformPhoneNum, setUserInformPhoneNum] = React.useState()
    const [date1, setDate1] = React.useState(null);
    const [date2, setDate2] = React.useState(null);
    const [date3, setDate3] = React.useState(null);
    const [headId1, setHeadId1] = React.useState('')
    const [headId2, setHeadId2] = React.useState('')
    const [headId3, setHeadId3] = React.useState('')
    const [headId4, setHeadId4] = React.useState('')
    const [headId5, setHeadId5] = React.useState('')
    const [problem1, setProblem1] = React.useState('')
    const [problem2, setProblem2] = React.useState('')
    const [problem3, setProblem3] = React.useState('')
    const [problem4, setProblem4] = React.useState('')
    const [problem5, setProblem5] = React.useState('')

    // styles
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
            },
            neutral: {
                main: "#929292"
            }
        }
      });


      // onchange
      const handleChangeAddress = (event) => {
        setAddress(event.target.value);
        // alert(event.target.value)
      };

      // api

      const getUnit = () => {
        axios.get(`http://localhost:5164/unit`)
        .then((response) => {
            setAddresses(response.data)
            console.log('get unit')
        }).catch((error) => {
            alert(error)
        })
      }

      const getProblemList = () => {
        axios.get('http://localhost:5164/problemdata')
        .then((response) => {
            setProblemList(response.data)
            console.log('get problem')
        })
        .catch((error) => {
            console.log(error)
        })
      }

      const getUserInform = () => {
        axios.get('http://localhost:5164/users/CM002')
        .then((response) => {
            let fullName = response.data.fName + ' ' + response.data.lName

            setUserfname(fullName)
            setUserPhoneNum(response.data.phoneNum)
            console.log('get user inform')
        })
        .catch((error) => {
            console.log(error)
        })
      }

      const postSubproblem1 = () => {
        axios.post(`http://localhost:5164/subtask1`,{
            Pbcode: headId1,
            description: problem1,
            status: headId1===""? null:'pending'
        }).then((response) => {
            // alert(response.status)
            postSubproblem2()
            console.log("submit1")
        }).catch((error) => {
            console.log(error)
        })
      }

      const postSubproblem2 = () => {
        axios.post('http://localhost:5164/subtask2',{
            Pbcode: headId2,
            description: problem2,
            status: headId2===""? null:'pending'
        }).then((response) => {
            // alert(response.status)
            postSubproblem3()
            console.log("submit2")
        }).catch((error) => {
            console.log(error)
        })
      }

      const postSubproblem3 = () => {
        axios.post(`http://localhost:5164/subtask3`,{
            Pbcode: headId3,
            description: problem3,
            status: headId3===""? null:'pending'
        }).then((response) => {
            // alert(response.status)
            postSubproblem4()
            console.log("submit3")
        }).catch((error) => {
            console.log(error)
        })
      }

      const postSubproblem4 = () => {
        axios.post(`http://localhost:5164/subtask4`,{
            Pbcode: headId4,
            description: problem4,
            status: headId4===""? null:'pending'
        }).then((response) => {
            // alert(response.status)
            postSubproblem5()
            console.log("submit4")
        }).catch((error) => {
            console.log(error)
        })
      }

      const postSubproblem5 = () => {
        axios.post(`http://localhost:5164/subtask5`,{
            Pbcode: headId5,
            description: problem5,
            status: headId5===""? null:'pending'
        }).then((response) => {
            // alert(response.status)
            postAllProblem()
            console.log("submit5")
        }).catch((error) => {
            console.log(error)
        })
      }

      const postAllProblem = () => {
        axios.post(`http://localhost:5164/alltask`,{

        }).then((response) => {
            // alert(response.status)
            console.log("post allproblem")
            postCSM()
        }).catch((error) => {
            console.log(error)
        })
      }

      const postCSM = () => {
        axios.post(`http://localhost:5164/csmproblem`, {
            fromUnitId: address,
            avaiDate1: date1,
            avaiDate2: date2,
            avaiDate3: date3,
            nameReport: userInform,
            phoneNum: userInformPhoneNum
        }).then((response) => {
            // alert(response.status)
            navigate("/inform-success")
            console.log("postcsm")
        }).catch((error) => {
            console.log(error)
        })
      }

      const submit = () => {
        postSubproblem1()
        // postSubproblem2()
        // postSubproblem3()
        // postSubproblem4()
        // postSubproblem5()
      }

      React.useEffect(()=>{
        getUserInform()
        getProblemList()
        getUnit()
      },[])

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
                    //   columns={{ xs: 2, md: 12 }}
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
                                        value={userfname}
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
                                        name="houseNo"
                                        select
                                        value={address}
                                        onChange={handleChangeAddress}
                                        >
                                            {addresses.map((option) => (
                                                <MenuItem key={option.unitId} value={option.unitId}>
                                                {option.unitId}
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
                                        value={userInform}
                                        onChange={(event)=>{
                                            setUserInform(event.target.value)
                                        }}
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
                                                    setUserInform('')
                                                    setUserInformPhoneNum('')
                                                  } else {
                                                    setCond(event.target.value);
                                                    setUserInform(userfname)
                                                    setUserInformPhoneNum(userPhoneNum)
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
                                        value={userInformPhoneNum}
                                        onChange={(event)=>{
                                            setUserInformPhoneNum(event.target.value)
                                        }}
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
                                <div id="problem1">
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
                                            id="problem-topic1"
                                            select
                                            value={headId1}
                                            onChange={(event)=>{
                                                setHeadId1(event.target.value)
                                            }}
                                            >
                                                {problemList.map((problem) => (
                                                <MenuItem key={problem.pdId} value={problem.pdId}>
                                                {problem.pdDesc}
                                                </MenuItem>
                                            ))}
                                            </TextField>
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
                                            value={problem1}
                                            onChange={(event)=>{
                                                setProblem1(event.target.value)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} lg={12} hidden>
                                        <Button variant="text" color="neutral">
                                            <u>แก้ไขข้อความ</u>
                                        </Button>
                                    </Grid>

                                    <Grid item xs={12} lg={12} hidden={visibleAddProblem1}>
                                        <Button variant="text" 
                                        onClick={()=>{
                                            setVisibleProblem2(false)
                                            setVisibleAddProblem1(true)
                                        }}
                                        >
                                            <AddProblems />
                                            &nbsp;&nbsp;<u>เพิ่มปัญหา</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                </div>

                                <div id="problem2" hidden={visibleProblem2}>
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
                                            id="problem-topic2"
                                            select
                                            value={headId2}
                                            onChange={(event)=>{
                                                setHeadId2(event.target.value)
                                            }}
                                            >
                                                {problemList.map((problem) => (
                                                <MenuItem key={problem.pdId} value={problem.pdId}>
                                                {problem.pdDesc}
                                                </MenuItem>
                                            ))}
                                            </TextField>
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
                                            value={problem2}
                                            onChange={(event)=>{
                                                setProblem2(event.target.value)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item id='edit2' xs={12} lg={12} hidden>
                                        <Button variant="text" color="neutral">
                                            <u>แก้ไขข้อความ</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12} hidden={visibleAddProblem2}>
                                        <Button variant="text" 
                                        onClick={()=>{
                                            setVisibleProblem3(false)
                                            setVisibleAddProblem2(true)
                                        }}
                                        >
                                            <AddProblems />
                                            &nbsp;&nbsp;<u>เพิ่มปัญหา</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                </div>

                                <div id="problem3" hidden={visibleProblem3}>
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
                                            id="problem-topic3"
                                            select
                                            value={headId3}
                                            onChange={(event)=>{
                                                setHeadId3(event.target.value)
                                            }}
                                            >
                                                {problemList.map((problem) => (
                                                <MenuItem key={problem.pdId} value={problem.pdId}>
                                                {problem.pdDesc}
                                                </MenuItem>
                                            ))}
                                            </TextField>
                                            {/* <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem-other"
                                            // value={address}
                                            // onChange={handleChange}
                                            /> */}
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
                                            value={problem3}
                                            onChange={(event)=>{
                                                setProblem3(event.target.value)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item id='edit3' xs={12} lg={12} hidden>
                                        <Button variant="text" color="neutral">
                                            <u>แก้ไขข้อความ</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12} hidden={visibleAddProblem3}>
                                        <Button variant="text"
                                        onClick={()=>{
                                            setVisibleProblem4(false)
                                            setVisibleAddProblem3(true)
                                        }}
                                        >
                                            <AddProblems />
                                            &nbsp;&nbsp;<u>เพิ่มปัญหา</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                </div>

                                <div id="problem4" hidden={visibleProblem4}>
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
                                            id="problem-topic4"
                                            select
                                            value={headId4}
                                            onChange={(event)=>{
                                                setHeadId4(event.target.value)
                                            }}
                                            >
                                                {problemList.map((problem) => (
                                                <MenuItem key={problem.pdId} value={problem.pdId}>
                                                {problem.pdDesc}
                                                </MenuItem>
                                            ))}
                                            </TextField>
                                            {/* <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem-other"
                                            // value={address}
                                            // onChange={handleChange}
                                            /> */}
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
                                            value={problem4}
                                            onChange={(event)=>{
                                                setProblem4(event.target.value)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item id='edit4' xs={12} lg={12} hidden>
                                        <Button variant="text" color="neutral">
                                            <u>แก้ไขข้อความ</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12} hidden={visibleAddProblem4}>
                                        <Button variant="text"
                                        onClick={()=>{
                                            setVisibleProblem5(false)
                                            setVisibleAddProblem4(true)
                                        }}
                                        >
                                            <AddProblems />
                                            &nbsp;&nbsp;<u>เพิ่มปัญหา</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                </div>

                                <div id="problem5" hidden={visibleProblem5} >
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
                                            id="problem-topic5"
                                            select
                                            value={headId5}
                                            onChange={(event)=>{
                                                setHeadId5(event.target.value)
                                            }}
                                            >
                                                {problemList.map((problem) => (
                                                <MenuItem key={problem.pdId} value={problem.pdId}>
                                                {problem.pdDesc}
                                                </MenuItem>
                                            ))}
                                            </TextField>
                                            {/* <TextField
                                            style={textStyles}
                                            margin="normal"
                                            id="problem-other"
                                            // value={address}
                                            // onChange={handleChange}
                                            /> */}
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
                                            value={problem5}
                                            onChange={(event)=>{
                                                setProblem5(event.target.value)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item id='edit5' xs={12} lg={12} hidden>
                                        <Button variant="text" color="neutral">
                                            <u>แก้ไขข้อความ</u>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} lg={12} hidden>
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

                {/* ---------------------------------------------------- */}
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
                                onClick={() => {
                                    submit()
                                    console.log("submit")
                                    // postAllProblem()
                                    // postCSM()
                                }}
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