import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";

const TemplateList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/templateFormData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Client Name",
      headerName: "Client Name",
      width: 200,
      
    },
    { field: "Technician", headerName: "Technician", width: 150 },
    { field: "Yard Size ", headerName: "Yard Size", width: 150 },
    { field: "Squire Ft", headerName: "Square Ft", width: 150 },
    { field: "Price Sq/Ft", headerName: "Price Sq/Ft", width: 150 },
    { field: "Total Price", headerName: "Total Price ", width: 150 },
    { field: "Date", headerName: "Date ", width: 150 },
    { field: "Signature", headerName: "Signature ", width: 150 },
    { field: "Notes", headerName: "Notes ", width: 150 },
  ];

  return (
    <Box>
      <Typography variant="h6" textAlign="left">
        Template List:
      </Typography>

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};
export default TemplateList;
