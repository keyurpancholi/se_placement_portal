import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Sidebar from "../../components/Sidebar";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { Form } from "react-router-dom";

function AddJob(props) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [position, setPosition] = useState("");
  const [positionError, setPositionError] = useState(false);
  const [salary, setSalary] = useState("");
  const [salaryError, setSalaryError] = useState(false);
  const [type, setType] = useState("");
  const [typeError, setTypeError] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [desc, setDesc] = useState("");
  const [descError, setDescError] = useState(false);
  const [cgpa, setCgpa] = useState("");
  const [cgpaError, setCgpaError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setCategoryError(false);
    setCgpaError(false);
    setDescError(false);
    setPositionError(false);
    setSalaryError(false);
    setTypeError(false);

    if (name == "") setNameError(true);

    if (type == "") setTypeError(true);

    if (category == "") setCategoryError(true);

    if (desc == "") setDescError(true);

    if (position == "") setPositionError(true);

    if (cgpa == "") setCgpaError(true);

    if (salary == "") setSalaryError(true);

    if (name && position && salary && type && category && desc && cgpa) {
      fetch(`${process.env.REACT_APP_API_URL}admin/addNewJob`, {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: name,
          position: position,
          salary: salary,
          description: desc,
          type: type,
          category: category,
          mingpa: cgpa,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setName('')
          setPosition('')
          setSalary()
          setDesc('')
          setType('')
          setCategory('')
          setCgpa()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Sidebar isLogout={props.isLogout} >
      <Container
        sx={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#212121",
            display: "flex",
            fontFamily: "serif",
            //fontWeight:'bold',
            fontSize: 25,
          }}
          component="h2"
          gutterBottom
        >
          Add new Job
        </Typography>

        {/* form starts */}
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setName(e.target.value)}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              display: "block",
            }}
            label="Enter the name of the company"
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={nameError}
          />
          <TextField
            onChange={(e) => setPosition(e.target.value)}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              display: "block",
            }}
            label="Position"
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={positionError}
          />
          <TextField
            onChange={(e) => setSalary(e.target.value)}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              display: "block",
            }}
            label="Salary in LPA"
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={salaryError}
            type="number"
          />
          <TextField
            onChange={(e) => setDesc(e.target.value)}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              display: "block",
            }}
            label="Description"
            variant="outlined"
            color="primary"
            multiline
            rows={4}
            fullWidth
            required
            error={descError}
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              display: "block",
            }}
            label="Type (Technical or Non-Technical)"
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={typeError}
          />
          <TextField
            onChange={(e) => setCategory(e.target.value)}
            
            sx={{
              marginTop: 3,
              marginBottom: 3,
              display: "block",
            }}
            label="Category (Dream/Super dream/Elite)"
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={categoryError}
          />
          <TextField
            onChange={(e) => setCgpa(e.target.value)}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              display: "block",
            }}
            label="Minimum CGPA"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={cgpaError}
            type="number"
          />
          <br />
          <Button
            sx={{
              display: "flex",
            }}
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            SUBMIT
          </Button>
        </form>
      </Container>
    </Sidebar>
  );
}

export default AddJob;
