import { Card, Typography } from "@material-ui/core";
import React from "react";
import './App.css';

export default function Job({job}) {
    return (
        <div className="Job" >
            <Card>
            <Typography>
            {job.API}     {job.Category}   {job.Description}
            </Typography>

            </Card>
            
        </div>
    )
}