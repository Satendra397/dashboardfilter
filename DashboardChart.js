
import React, { useEffect, useState } from 'react';
import { Typography, Box, Menu, MenuItem } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import axios from 'axios';
import TemplateForm from './TemplateForm'; // Replace './TemplateForm' with the actual path to the TemplateForm component file
//import TemplateList from './TemplateList';


const DashboardChart = () => {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/formData')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const renderTemplateNameCell = (params) => {
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setSelectedTemplate(params.row);
    };

    const handleClose = () => {
      setAnchorEl(null);
      setSelectedTemplate(null);
    };

    const handleMenuItemClick = (menuItem) => {
      if (menuItem === 'Edit') {
        setIsEditOpen(true);
      } else {
        console.log(`Selected ${menuItem} for template:`, selectedTemplate);
      }
      handleClose();
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '12px', cursor: 'pointer', fontWeight: 'bold' }} onClick={handleClick}>
          &#8942;
        </span>
        <span>{params.value}</span>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
          <MenuItem onClick={() => handleMenuItemClick('Edit')}>Edit</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Deactivate')}>Deactivate</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Download PDF')}>Download PDF</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Replicate Template')}>Replicate Template</MenuItem>
        </Menu>
      </div>
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Template Name', headerName: 'Template Name', width: 200, renderCell: renderTemplateNameCell },
    { field: 'Category', headerName: 'Category', width: 150 },
    { field: 'Branch', headerName: 'Branch', width: 150 },
    { field: 'Created', headerName: 'Created', width: 150 },
    { field: 'Last Updated', headerName: 'Last Updated', width: 150 },
    { field: 'Updated By', headerName: 'Updated By', width: 150 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <FiberManualRecord style={{ color: 'green', marginRight: 8 }} />
          {params.value}
        </Box>
      ),
    },
    { field: 'Sales Center', headerName: 'Sales Center', width: 150 },
  ];

  const handleFormClose = () => {
    setIsEditOpen(false);
  };

  return (
    <Box>
      <Typography variant="h6" textAlign="left">
        Template List:
      </Typography>

      <Box style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>

      {isEditOpen && (
        <TemplateForm selectedTemplate={selectedTemplate} handleClose={handleFormClose} />
      )}
    
    </Box>
  );
};

export default DashboardChart;


/*
import React, { useEffect, useState } from 'react';
import { Typography, Box, Menu, MenuItem } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import axios from 'axios';

const DashboardChart = () => {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/formData')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const renderTemplateNameCell = (params) => {
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setSelectedTemplate(params.row);
    };

    const handleClose = () => {
      setAnchorEl(null);
      setSelectedTemplate(null);
    };

    const handleMenuItemClick = (menuItem) => {
      console.log(`Selected ${menuItem} for template:`, selectedTemplate);
      handleClose();
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
       
        <span style={{ marginRight: '12px', cursor: 'pointer', fontWeight: 'bold' }} onClick={handleClick}>
        &#8942; 
        </span>
        <span>{params.value}</span>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
          <MenuItem onClick={() => handleMenuItemClick('Edit')}>Edit</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Deactivate')}>Deactivate</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Download PDF')}>Download PDF</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Replicate Template')}>Replicate Template</MenuItem>
        </Menu>
      </div>
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Template Name', headerName: 'Template Name', width: 200, renderCell: renderTemplateNameCell },
    { field: 'Category', headerName: 'Category', width: 150 },
    { field: 'Branch', headerName: 'Branch', width: 150 },
    { field: 'Created', headerName: 'Created', width: 150 },
    { field: 'Last Updated', headerName: 'Last Updated', width: 150 },
    { field: 'Updated By', headerName: 'Updated By', width: 150 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <FiberManualRecord style={{ color: 'green', marginRight: 8 }} />
          {params.value}
        </Box>
      ),
    },
    { field: 'Sales Center', headerName: 'Sales Center', width: 150 },
  ];

  return (
    <Box>
      <Typography variant="h6" textAlign="left">
        Template List:
      </Typography>

      <Box style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
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

export default DashboardChart;
*/
