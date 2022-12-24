import React from "react";
import Grid from "@mui/material/Grid";
import { Item, Item1, Item3 } from "./GridItems";

function PlanningGrid({ gridContent }) {
  const headers = [<h3>Block</h3>, <h3>Period 1</h3>, <h3>Period 2</h3>];

  return (
    <Grid
        className="planning_grid"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
       <Grid item xs={6}>
       <Item1>
            <div>
              <p>Välj en termin: </p>
              <Item>{gridContent[9]}</Item>
            </div>
          </Item1>
        </Grid>
        <Grid item xs={6}>
          <Item1>
            <div>
              <p>Välj en helteminskurs: </p>
              <Item>{gridContent[8]}</Item>
            </div>
          </Item1>
        </Grid>
        <Grid item xs={2}>
          <Item3>{headers[0]}</Item3>
        </Grid>
        <Grid item xs={5}>
          <Item3>{headers[1]}</Item3>
        </Grid>
        <Grid item xs={5}>
          <Item3>{headers[2]}</Item3>
        </Grid>
        <Grid item xs={2}>
          <Item3>
            <h4>1</h4>
          </Item3>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{gridContent[0]}</Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{gridContent[1]}</Item>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item3>
            <h4>2</h4>
          </Item3>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{gridContent[2]}</Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{gridContent[3]}</Item>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item3>
            <h4>3</h4>
          </Item3>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{gridContent[4]}</Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{gridContent[5]}</Item>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item3>
            <h4>4</h4>
          </Item3>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{gridContent[6]}</Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{gridContent[7]}</Item>
          </Item>
        </Grid>
      </Grid>
    
  );
}


export default PlanningGrid;
