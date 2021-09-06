import React from "react";
import Typography from '@material-ui/core/Typography';
import Job from "./Job"
import './App.css';

//function components has return but doesn't have render
export default function Jobs({jobs}) {
    return (
            <div className="Jobs">
                <Typography variant="h1">
                    Entry Level Software Jobs
                </Typography>

                {
                    jobs.map(job => 
                        <Job job={job} />
                    )
                }
            </div>
    );
}