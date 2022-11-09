import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Sidebar from "../Sidebar";
import Grid from "@mui/material/Grid";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function JobDetails(props) {
  const navigate = useNavigate();

  const [job, setJob] = useState({});

  const { jobId } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}viewSingleJob/${jobId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJob(data.job);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(`${process.env.REACT_APP_API_URL}viewSingleJob/${jobId}`);
  }, []);

  const [open, setOpen] = useState(false);

  const handleApplyJob = () => {
    console.log(`${process.env.REACT_APP_API_URL}applyForJob/${job._id}`)
    fetch(`${process.env.REACT_APP_API_URL}applyForJob/${job._id}`, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then(data => {
        setOpen(true)
        navigate('/jobs')
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(props);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/jobs");
  };
  return (
    <Sidebar isLogout={props.isLogout} isAdmin={props.isAdmin} >
      <div>
        <Card elevation={3}>
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ marginBottom: 5 }}
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Avatar
                      alt={job.companyName}
                      src={job.imageUrl}
                      sx={{ width: 56, height: 56 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>{job.companyName}</Typography>
                    <Typography sx={{ fontSize: 15, display: "flex" }}>
                      {job.position}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  startIcon={<CurrencyRupeeIcon />}
                >
                  {job.salary} LPA
                </Button>
                <Typography sx={{ marginTop: 1 }}>{job.type}</Typography>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h5" sx={{ display: "flex" }}>
                  Job description
                </Typography>
                <br />
                <Typography variant="h6" sx={{ fontSize: 20, display: "flex" }}>
                  Eligibility
                </Typography>
                <Typography sx={{ display: "flex" }}>
                  5 students graduating in 2021
                </Typography>
                <Typography sx={{ display: "flex" }}>
                  5 students currently pursuing B.E/B.TECH/MCA streams
                </Typography>
                <Typography sx={{ display: "flex" }}>
                  No current backlogs, maximum 1year of education gap allowed
                </Typography>
                <Typography sx={{ display: "flex" }}>
                  Shortlisting process - Each level is an elimination round
                  Online test - Pre-recorded Video Interview - Code for good
                  Event
                </Typography>
                {/* <Typography>{props.job}</Typography> */}
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ marginTop: 5 }}
                >
                  <Grid item sx={{ marginRight: 7 }}>
                    <Typography
                      sx={{
                        display: "flex",
                        fontWeight: "bold",
                        marginBottom: 1,
                      }}
                    >
                      Type
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontWeight: "bold",
                        marginBottom: 1,
                      }}
                    >
                      Category
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontWeight: "bold",
                        marginBottom: 1,
                      }}
                    >
                      Minimum CGPA
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ display: "flex", marginBottom: 1 }}>
                      {job.type}
                    </Typography>
                    <Typography sx={{ display: "flex", marginBottom: 1 }}>
                      {job.category}
                    </Typography>
                    <Typography sx={{ display: "flex", marginBottom: 1 }}>
                      {job.mingpa}
                    </Typography>
                  </Grid>
                </Grid>
                <div>
                  {!props.isAdmin && <Button
                    variant="contained"
                    size="medium"
                    onClick={handleApplyJob}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: 5,
                    }}
                    endIcon={<SendIcon />}
                  >
                    Apply
                  </Button>}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Applied Successfully!
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Best of luck for the interview.
                      </Typography>
                    </Box>
                  </Modal>
                </div>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => navigate("/jobs")}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 3,
                  }}
                  endIcon={<ReplyIcon />}
                >
                  Jobs
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </Sidebar>
  );
}

export default JobDetails;
