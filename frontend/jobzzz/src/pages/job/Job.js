import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Sidebar from "../../components/Sidebar";
import Grid from "@mui/material/Grid";
import JobDetails from "../../components/jobDetails/JobDetails";
import { Link, useNavigate } from "react-router-dom";

function Job(props) {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/viewJobs`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <Sidebar isAdmin={props.isAdmin} isLogout={props.isLogout}>
      <Container>
        {/* <Card elevation={3}>
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
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
                      alt="JP morgan logo"
                      src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg"
                      sx={{ width: 56, height: 56 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>JP Morgan Chase and Co</Typography>
                    <Typography sx={{ fontSize: 15, display: "flex" }}>
                      Software Engineer
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => navigate("/jobDetails")}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  startIcon={<CurrencyRupeeIcon />}
                >
                  12 LPA
                </Button>
                <Typography>Technical</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card> */}
        {!flag &&
          jobs.map((job) => {
            return (
              <>
              <br/>
              <br />
              <Card elevation={3}>
                <CardContent>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    
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
                            alt="JP morgan logo"
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
                      <Link to={`/jobDetails/${job._id}`} style={{textDecoration:'none'}}>
                        <Button
                          variant="contained"
                          // onClick={() => {

                          // }}
                          sx={{ display: "flex", justifyContent: "flex-end" }}
                          startIcon={<CurrencyRupeeIcon />}
                        >
                          {job.salary} LPA
                        </Button>
                      </Link>
                      <Typography>{job.type}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              </>
            );
          })}
      </Container>
    </Sidebar>
  );
}

export default Job;
