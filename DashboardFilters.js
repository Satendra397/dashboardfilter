import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import FormStatusChart from "./pie";
import VolumeOverTimeChart from "./VolumeOverTime";
import FormCompletionRate from "./FormCompletionRate";
import DashboardChart from "./DashboardChart";


const DashboardFilter = () => {
  return (
    <div>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>Dashboard</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <div>
        <table border="0">
          <tbody>
            <tr>
          
            <td>
              <div>
                <FormStatusChart></FormStatusChart>
              </div>
              
            </td>
          
            <td>
              <div>
                <VolumeOverTimeChart></VolumeOverTimeChart>
              </div>
              
            </td>
            
            <td>
              <div>
                <FormCompletionRate></FormCompletionRate>
              </div>
            </td>
            </tr>
            </tbody>
        </table>
        </div>

        
      </AccordionDetails>
    </Accordion>
    <div>
      <DashboardChart></DashboardChart>
    </div>
    </div>
  );
};

export default DashboardFilter;
