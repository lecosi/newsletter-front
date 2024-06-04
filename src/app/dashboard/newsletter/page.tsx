'use client'

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "@/app/dashboard/components/Chart";
import Deposits from "@/app/dashboard/components/Deposits";
import Orders from "@/app/dashboard/components/Orders";
import * as React from "react";

export default function Newsletter() {
  return (
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
  );
}
