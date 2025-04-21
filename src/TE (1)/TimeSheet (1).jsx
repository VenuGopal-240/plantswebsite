import React, { useContext, useEffect, useState } from "react";

import { LocalizationProvider, MultiSectionDigitalClock, TimeField, TimePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { Button, MenuItem, Select, Table, TableBody, TableContainer, TableHead, TextField, } from "@mui/material";

import dayjs from "dayjs";
// import './Styling.css'
import { myProvider } from "../App";
// import { loginReq } from "../Util/api";

const TimeSheet = () => {
    const [submits, setSubmits] = useState(false);
    const [currentDay, setCurrentDay] = useState({ date: "", loginTime: "", logoutTime: "", task: { applicationDev: "", sessions: "", menteeRev: "", commincation: "" }, worked: "", status: null, url: "" });
    const [week, setWeek] = useState([]);

    const [weekDates, setWeekDates] = useState([{ date: "", loginTime: "", logoutTime: "", }]);
    const [today, setToday] = useState(new Date());

    const [selectedRange, setSelectedRange] = useState([null, null]);

    const token = localStorage.getItem("auth_Token");

    const { userData } = useContext(myProvider);

    console.log("userData", userData);

    // console.log("TOS", today);

    const isToday = (date) => {
        const dateObj = new Date(date);
        //  console.log("DDS",dateObj.getDate(),dateObj.getMonth(),dateObj.getFullYear());
        // console.log("DDS",today.getDate(),today.getMonth(),today.getFullYear());       

        return (
            dateObj.getDate() === today.getDate() &&
            dateObj.getMonth() + 1 === today.getMonth() + 1 &&
            dateObj.getFullYear() === today.getFullYear()
        );
    };
    const [open, setOpen] = useState(false);


    useEffect(() => {
        // loginReq().then(e=>e.json()).then((e)=>console.log("DARS",e)).catch((e)=>console.log("Error"))

        // fetch("http://192.168.5.29:8080/TimeSheetAPI/timeSheet/getTimeSheetsByUserIdAndGivenDates?startDate=2025-03-11&endDate=2025-03-17&userId=2", {
        //     method: "GET", // Corrected typo here
        //     headers: {
        //         'Authorization': `Bearer ${token}`,  // Make sure the `token` variable is defined and valid
        //         'Accept': 'application/json'
        //     }
        // })
        //     .then((res) => {
        //         console.log("res", res);
        //         if (!res.ok) {
        //             console.log("Error", res);
        //         } else {
        //             res.json().then((data) => {
        //                 // setWeekDates(data);
        //                 console.log("Response Data:", data); // Log the response data
        //             });
        //         }
        //     })
        //     .catch((err) => {
        //         console.log("Error:", err); // Handle any errors that occur during the fetch
        //     });

    }, [])
    useEffect(() => {
        // loginReq("hello_BRO");

        const generateCurrentWeekDates = () => {
            const today = new Date();

            // Get the current day index (0 = Sunday, 6 = Saturday)
            const dayOfWeek = today.getDay();
            // console.log("dayOfWeek",dayOfWeek);
            // Calculate the date for Sunday (start of the week)
            const firstDayOfWeek = today.getDate() - dayOfWeek;
            // console.log("firstDayOfWeek",firstDayOfWeek);

            const lastDayOfWeek = new Date(today);
            lastDayOfWeek.setDate(today.getDate() + (6 - dayOfWeek));

            const week = [];
            // console.log("TO",today.get)
            const firstDayweek = new Date(today);
            firstDayweek.setDate(today.getDate() - dayOfWeek);

            for (let i = 0; i < 7; i++) {
                // Create a fresh date object to avoid mutating `today`
                const currentDate = new Date(today);
                currentDate.setDate(firstDayOfWeek + i);

                const formattedDate = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD format

                week.push({
                    date: formattedDate,
                    loginTime: "",
                    logoutTime: "",
                    task: [{ name: "applicationDev", description: "", hours: "" },
                    { name: "sessions", description: "", hours: "" },
                    { name: "menteeReview", description: "", hours: "" },
                    { name: "communication", description: "", hours: "" }],
                    totalHours: "",
                    status: null,
                    url: ""
                });
            }
            setSelectedRange([dayjs(firstDayweek), dayjs(lastDayOfWeek)]);
            return week;
        };
        const weekData = generateCurrentWeekDates();
        setWeekDates(weekData);
        const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        setSubmits(lastDate);
    }, []);
    // console.log(weekDates);

    const handleDateChange = ([start, end]) => {
        if (!start || !end) return;

        let dateList = [];
        let current = dayjs(start);
        // console.log("current:",current);

        while (current.isBefore(end) || current.isSame(end, "day")) {
            let a = { ...currentDay, date: current };
            // setWeek([...week,{...currentDay,date:current.format("DD/MM/YYYY")}]);
            dateList.push(a);
            current = current.add(1, "day");
            // console.log("current inisde:",current);
        }
        console.log("sara", dateList);
        setWeekDates(dateList);
        // setWeek(prev => dateList);
        // console.log("inside dates:",dates);

    }
    // console.log("week:", weekDates);

    // const handleLoginTime = (e, day) => {
    //    console.log("DA",day);
    //     let formatedDate = e.format("HH:mm:ss");
    //     let a = weekDates?.map(obj => (obj?.date === day) ? { ...obj, loginTime: formatedDate, worked: calculateWorkedHours(formatedDate, obj.logoutTime) } : obj)
    //     // console.log(a);
    //     setWeekDates(a);

    // }

    // const handleLogoutTime = (e, day) => {
    //     console.log("DAY",day);
    //     let formatedDate = e.format("HH:mm:ss");
    //     let a = weekDates?.map(obj => (obj?.date === day) ? { ...obj, logoutTime: formatedDate, worked: calculateWorkedHours(formatedDate, obj.logoutTime) } : obj)
    //     // console.log(a);
    //     setWeekDates(a);
    // }

    const handleEmployeeStatus = (e, day) => {
        let a = weekDates?.map(obj => (obj.date === day.date) ? { ...obj, status: e.target.value } : obj);
        setWeekDates(a);
    }

    const handleEmployeeTask = (e, day) => {
        let a = weekDates?.map(obj => (obj.date === day.date) ? { ...obj, task: e.target.value } : obj);
        setWeekDates(a);
    }

    const handleTaskUrl = (e, day) => {
        let a = weekDates?.map(obj => (obj.date === day.date) ? { ...obj, url: e.target.value } : obj);
        setWeekDates(a);
    }

    // const calculateWorkedHours = (login, logout) => {
    //     if (!login || !logout) return ""; // If any time is missing, return empty string

    //     let loginTime = dayjs(login, "hh:mm A");  // Convert to dayjs object
    //     let logoutTime = dayjs(logout, "hh:mm A");

    //     // Correct the order of the diff calculation to ensure positive values
    //     let diffMinutes = logoutTime.diff(loginTime, "minute"); // Get total minutes difference
    //     let hours = Math.floor(diffMinutes / 60);
    //     let minutes = diffMinutes % 60;
    //     console.log("TIMW",diffMinutes,hours,minutes);
    //     return `${hours}h ${minutes}m`; // Format output as "Xh Ym"
    // };
    // 
    const handleLoginTime = (e, day) => {
        let formatedDate = e.format("HH:mm:ss");  // Use "HH:mm:ss" for 24-hour format with seconds
        let a = weekDates?.map(obj =>
            (obj.date === day.date)
                ? { ...obj, loginTime: formatedDate, worked: calculateWorkedHours(formatedDate, obj.logoutTime) }
                : obj
        );
        setWeekDates(a);
    }

    const handleLogoutTime = (e, day) => {
        let formatedDate = e.format("HH:mm:ss");  // Use "HH:mm:ss" for 24-hour format with seconds
        let a = weekDates?.map(obj =>
            (obj.date === day.date)
                ? { ...obj, logoutTime: formatedDate, worked: calculateWorkedHours(obj.loginTime, formatedDate) }
                : obj
        );
        setWeekDates(a);
    }

    const calculateWorkedHours = (login, logout) => {
        if (!login || !logout) return "";  // If any time is missing, return empty string

        let loginTime = dayjs(login, "HH:mm:ss");  // Convert to dayjs object using "HH:mm:ss"
        let logoutTime = dayjs(logout, "HH:mm:ss");

        // Check if the time objects are valid
        if (!loginTime.isValid() || !logoutTime.isValid()) {
            console.error("Invalid time format:", login, logout);
            return "Invalid time";
        }

        // Calculate the total seconds difference
        let diffSeconds = logoutTime.diff(loginTime, "second");  // Get total seconds difference
        if (diffSeconds < 0) {
            console.error("Logout time is earlier than login time");
            return "Invalid time";  // Handle error if logout is earlier than login
        }

        // Convert seconds into hours, minutes, and seconds
        let hours = Math.floor(diffSeconds / 3600);  // 3600 seconds in an hour
        let minutes = Math.floor((diffSeconds % 3600) / 60);  // Remaining minutes after hours
        let seconds = diffSeconds % 60;  // Remaining seconds after minutes

        return `${hours}h ${minutes}m ${seconds}s`;  // Format output as "Xh Ym Zs"
    };



    // console.log("ss", submits)

    const formatDateWithWeekday = (inputDate) => {
        // alert("kjbsdf")
        // console.log(inputDate);
        const date = new Date(inputDate);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

        return `${day}/${month}/${year} -
         ${weekday}`;
    };

    const submit = (day) => {
        console.log("SINGLE DAY", day);
        fetch("http://192.168.5.29:8080/TimeSheetAPI/timeSheet/getTimeSheetsByUserIdAndGivenDates?startDate=2025-03-11&endDate=2025-03-17&userId=2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(values)
        })
            .then((res) => {
                console.log("res", res);
                if (!res.ok) {
                    console.log("Error", res);
                } else {
                    res.json().then((data) => {
                        // setWeekDates(data);
                        console.log("Response Data:", data); // Log the response data
                    });
                }
            })
            .catch((err) => {
                console.log("Error:", err); // Handle any errors that occur during the fetch
            });
    }

    const getTotalTime = (task) => {
        let totalMinutes = 0;

        Object.values(task).forEach(timeStr => {
            const [hours, minutes] = timeStr.split(':').map(Number);
            totalMinutes += hours * 60 + minutes;
        });

        const totalHours = Math.floor(totalMinutes / 60);
        const remainingMinutes = totalMinutes % 60;

        // Return string in HH:mm format
        return `${String(totalHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
    };
    const handleTime = (e, a, type, index) => {
        const formatted = e.format('HH:mm');

        const ok = weekDates?.find((day) => day?.date === a?.date);
        if (ok) {
            ok.task[index][type] = formatted;
        }

        // const updatedWeekDates = weekDates.map(obj => {
        //     if (obj.date === a.date) {
        //         return {
        //             ...obj,
        //             task: {
        //                 ...obj.task,
        //                 [type]: formatted
        //             }
        //         };
        //     }
        //     return obj;
        // });

        // Assuming you're using a state setter like setWeekDates
        // setWeekDates(updatedWeekDates);
    };

    const handleTaskName = (e, day, name) => {
        const f = weekDates.find((obj) => obj.date === day.date);
        if (f) {
            const taskIndex = 0;
            f.task[taskIndex][name] = e.target.value;
        }
    };
    const handleTaskSession = (e, day, name) => {
        const f = weekDates.find((obj) => obj.date === day.date);
        if (f) {
            const taskIndex = 1;

            f.task[taskIndex][name] = e.target.value;
        }
    };
    const handleTaskMenteeRev = (e, day, name) => {
        const f = weekDates.find((obj) => obj.date === day.date);
        if (f) {
            const taskIndex = 2;
            f.task[taskIndex][name] = e.target.value;
        }
    };
    const handleTaskComminication = (e, day, name) => {
        const f = weekDates.find((obj) => obj.date === day.date); // Find the matching day
        if (f) {
            const taskIndex = 3;
            f.task[taskIndex][name] = e.target.value;
        }
    };

    return (
        <>
            <div
                style={{
                    width: "auto",
                    height: "auto",
                    // minHeight: "100vh",
                    backgroundColor: "#DDEFD6",

                    // backgroundImage:
                    //     'url("https://img.freepik.com/free-photo/detailed-structure-marble-natural-pattern-background-design_1258-79155.jpg?t=st=1741858893~exp=1741862493~hmac=cebb08cbd4599ad01ae8de79595e2e754c9d7b9f0283c6f9288e8a597d6086cf&w=900")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginTop: "4rem"
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangePicker']}>
                        <DateRangePicker localeText={{ start: 'Week-Start', end: 'Week-end' }}
                            onChange={handleDateChange} value={selectedRange} format="DD/MM/YYYY" sx={{ color: "green" }} />
                    </DemoContainer>


                    <br />

                    <TableContainer className="table_Container">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" border={1}>
                            <TableHead>
                                <tr className="tr_in_tbCont">
                                    <th style={{ width: "10vw" }}>Date</th>
                                    <th style={{ width: "15vw" }}>Login</th>
                                    <th style={{ width: "15vw" }}>Logoff</th>
                                    <th style={{ width: "10vw" }}> Task</th>
                                    <th>Task Description</th>
                                    <th>Worked Hours</th>
                                    <th style={{ width: "8vw" }}>Total(Hours)</th>
                                    <th style={{ width: "10vw" }}>Status</th>
                                    <th style={{ width: "15vw" }}>URL</th>
                                    <th style={{ width: "5vw" }}>Save</th>
                                </tr>
                            </TableHead>
                            <TableBody>
                                {weekDates?.map((day, index) => (
                                    <tr key={index} style={{ cursor: isToday(day?.date) ? "pointer" : "not-allowed" }}>
                                        <td style={{ color: isToday(day?.date) ? "red" : "green" }}> {/* date */}
                                            {formatDateWithWeekday(day?.date)}
                                            {/* {day?.date} */}
                                            {/* {day.toLocaleDateString('en-US', { weekday: 'long' })}
                                    {day.getDate()}
                                   { day.toLocaleDateString('en-US', { month: 'short' })} */}
                                        </td>

                                        <td > {/* login time */}
                                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
                                            {/* <DemoContainer components={['TimePicker']}>
                                                <TimePicker label="Basic time picker" onChange={(e) => handleLogoutTime(e, day)} value={day?.loginTime}/>
                                            </DemoContainer> */}
                                            <TimePicker
                                                label="Basic time picker"
                                                value={day?.loginTime ? dayjs(day?.loginTime, "HH:mm:ss") : null}  // Convert string to dayjs object
                                                onChange={(newTime) => handleLoginTime(newTime, day)}  // Handle time change
                                                renderInput={(params) => <TextField {...params} />}
                                            />

                                            {/* </LocalizationProvider> */}

                                        </td>

                                        <td >  {/* logout time */}
                                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
                                            {/* <DemoContainer components={['TimePicker']}>
                                                <TimePicker label="Basic time picker" onChange={(e) => handleLoginTime(e, day)} />
                                            </DemoContainer> */}
                                            <TimePicker
                                                label="Basic time picker"
                                                value={day?.logoutTime ? dayjs(day?.logoutTime, "HH:mm:ss") : null}  // Convert string to dayjs object
                                                onChange={(newTime) => handleLogoutTime(newTime, day)}  // Handle time change
                                                renderInput={(params) => <TextField {...params} />}
                                            />

                                            {/* </LocalizationProvider> */}
                                        </td>

                                        <td > {/* Task */}
                                            {/* <TextField  onChange={(e) => handleEmployeeTask(e, day)}> */}
                                            {/* <Select sx={{width:"10vw"}}
                                            onChange={(e) => handleEmployeeTask(e, day)}>
                                            <MenuItem value="handleEmployeeTask" >Application <br />Development</MenuItem>
                                            <MenuItem value="Sessions" >Sessions</MenuItem>
                                            <MenuItem value="Mentee" >Mentee Reviews</MenuItem>
                                            <MenuItem value="Commincation" >Commincation <br />Sessions</MenuItem>
                                        </Select> */}

                                            <p style={{ padding: "8.5px 14px" }}>Application Dev</p>
                                            <p style={{ padding: "8.5px 14px" }}>Sessions</p>
                                            <p style={{ padding: "8.5px 14px" }}>Mentee Review</p>
                                            <p style={{ padding: "8.5px 14px" }}>Commincation</p>
                                            {/* </TextField> */}

                                        </td>
                                        <td>
                                            <p >   <TextField size="small" sx={{ width: "10vw" }} type="text" onChange={(e) => handleTaskName(e, day, "description")} /></p>
                                            <p ><TextField size="small" sx={{ width: "10vw" }} type="text" onChange={(e) => handleTaskSession(e, day, "description")} /></p>
                                            <p><TextField size="small" sx={{ width: "10vw" }} type="text" onChange={(e) => handleTaskMenteeRev(e, day, "description")} /></p>
                                            <p ><TextField size="small" sx={{ width: "10vw" }} type="text" onChange={(e) => handleTaskComminication(e, day, "description")} /></p>
                                        </td>
                                        <td>
                                            <p >
                                                <TimeField
                                                    label="Format without meridiem"
                                                    format="HH:mm"
                                                    onChange={(e) => handleTime(e, day, 'hours', 0)}
                                                    size="small"
                                                />
                                            </p>
                                            <p>
                                                <TimeField
                                                    label="Format without meridiem"
                                                    format="HH:mm"
                                                        size="small"
                                                    onChange={(e) => handleTime(e, day, 'hours', 1)}
                                                />
                                            </p>
                                            <p>
                                                <TimeField
                                                    label="Format without meridiem"
                                                    format="HH:mm"
                                                    size="small"
                                                    onChange={(e) => handleTime(e, day, 'hours', 2)}
                                                /> </p>
                                            <p>
                                                <TimeField
                                                    label="Format without meridiem"
                                                    format="HH:mm"
                                                    size="small"
                                                    onChange={(e) => handleTime(e, day, 'hours', 3)}
                                                /></p>

                                            {/* <p> <input type="text" onChange={(e) => handleTime(e, day, 'applicationDev')} style={{ width: "3rem" }} /></p>
                                            <p><input type="text" onChange={(e) => handleTime(e, day, 'sessions')} style={{ width: "3rem" }} /></p>
                                            <p><input type="text" onChange={(e) => handleTime(e, day, 'menteeRev')} style={{ width: "3rem" }} /></p>
                                            <p><input type="text" onChange={(e) => handleTime(e, day, 'commincation')} style={{ width: "3rem" }} /></p> */}
                                        </td>

                                        <td > {/* working hour*/}
                                            {day?.worked}
                                            {day?.totalHours}
                                        </td>

                                        <td > {/* status*/}
                                            <Select sx={{ width: "10vw" }}
                                                value={day?.status}
                                                onChange={(e) => handleEmployeeStatus(e, day)}>
                                                {/* <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem> */}
                                                <MenuItem value="working" >Working</MenuItem>
                                                <MenuItem value="holiday" >Holiday</MenuItem>
                                                <MenuItem value="public holiday" >Public Holiday</MenuItem>
                                                <MenuItem value="leave" >Leave</MenuItem>
                                                <MenuItem value="sick Leave" >Sick Leave</MenuItem>
                                                <MenuItem value="partial Leave" >Partial Leave</MenuItem>
                                            </Select>
                                        </td>

                                        <td style={{ width: "15vw" }}>
                                            <TextField sx={{ width: "16vw" }} type="text" onChange={(e) => handleTaskUrl(e, day)} value={day?.url} />
                                        </td>

                                        <td >
                                            {
                                                isToday(day?.date) ? <Button variant="contained" style={{ cursor: 'pointer' }} onClick={() => submit(day)}>Save</Button> : <Button variant="contained" disabled style={{ cursor: "not-allowed" }}>Save</Button>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </LocalizationProvider>
                {
                    isToday(submits) ? <Button variant="contained" style={{ color: "red", cursor: 'pointer', float: "right", margin: "1rem" }} >SUBMIT</Button> : <Button variant="contained" style={{ cursor: "not-allowed", float: "right", margin: "1rem" }}>SUBMIT</Button>
                }

                {/* <Button variant="contained" style={{ float: "right", margin: "1rem" }}>SUMBIT</Button> */}
            </div>
        </>
    )
}

export default TimeSheet;



// <pre>{JSON.stringify(dates, null, 2)}</pre>