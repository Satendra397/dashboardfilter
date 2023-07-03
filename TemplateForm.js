import React, { useState } from "react";
import {
  DialogContent, Dialog,
  DialogTitle,
  Button, TextField,Typography,
  InputLabel,Box,
  AccordionSummary,Accordion,
  AccordionDetails, Select,
  MenuItem,
  FormControlLabel,
  Radio,
  Checkbox,
  RadioGroup,
 
  
} from "@mui/material";

const TemplateForm = ({ selectedTemplate, handleClose }) => {
  const [paid, setPaid] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [notes, setNotes] = useState([""]);
  const [ClientName,SetClientName] = useState([]);
  const [Technician,SetTechnician] = useState([]);
  const [YardSize,SetYardSize] = useState([]);
  const [SquareFt,SetSquareFt] = useState([]);
  const [PriceSqFt,SetPriceSqFt] = useState([]);
  const [TotalPrice,SetTotalPrice] = useState([]);
  const [Date,SetDate] = useState([]);
  const [Signature,SetSignature] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); 
 // const [Notes,setNote] = useState([]);
  

  const handleSaveChanges = () => {
    // Logic to save changes in the form
    console.log("Paid:", paid);
    console.log("Recurring:", recurring);
    console.log("Notes:", notes);

    const formData = {
        ClientName,
        Technician,
        YardSize,
        SquareFt,
        PriceSqFt,
        TotalPrice,
        Date,
        Signature,
        Notes: ["note1", "note2", "note3"]
      };
    
      fetch('http://localhost:3001/api/saveFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          handleClose();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    //handleClose();
  };
  
  const handlePaidChange = (event) => {
    setPaid(event.target.value);
  };
  const handleRecurringChange = (event) => {
    setRecurring(event.target.checked);
  };
  const handleNoteChange = (index, event) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = event.target.value;
    setNotes(updatedNotes);
  };

  const handleAddNote = () => {
    setNotes([...notes, ""]);
  };

  const handleRemoveNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };
  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  return (
    <Dialog open={true}  maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Edit Template</Typography>
          <Box>
            <Button variant="contained" color="primary"  onClick={handlePreview}>
              Preview
            </Button>
            <Button variant="contained" style={{ marginLeft: "8px" }}>
              Reset
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveChanges}
              style={{ marginLeft: "8px" }}
            >
              Save Changes
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              style={{ marginLeft: "8px" }}
            >
              <Typography>✕</Typography>
            </Button>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Accordion>
          <AccordionSummary>
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginBottom: "16px" }}
            >
              <Typography
                variant="h4"
                textAlign="left"
                style={{
                  color: "DarkBlue",
                  marginBottom: "0px",
                  fontWeight: "bold",
                }}
              >
                WORKWAVE
              </Typography>
              <Typography
                variant="body1"
                textAlign={"right"}
                style={{
                  color: "Purple",
                  marginRight: "10px",
                  fontWeight: "bold",
                }}
              >
                AN IFS COMPANY
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionSummary>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="h4"
                textAlign={"center"}
                style={{
                  marginBottom: "25px",
                  marginLeft: "70px",
                  fontWeight: "bold",
                }}
              >
                Form Manager Test Form
              </Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Box marginBottom={2} display="flex" alignItems="center">
              <InputLabel style={{ fontWeight: "bold", color: "black" }}>
                Client Name:
              </InputLabel>
              <TextField
                label="ClientName"
                size="small"
                onChange={(e) => SetClientName(e.target.value)}
                sx={{ marginLeft: "8px" }}
              />
            </Box>
            <Box marginBottom={2} display="flex" alignItems="center">
              <InputLabel style={{ fontWeight: "bold", color: "black" }}>
                Technician:
              </InputLabel>
              <Select
                label="Technician"
                placeholder="select"
                size="small"
                onChange={(e) => SetTechnician(e.target.value)}
                sx={{ marginLeft: "18px", minWidth: "225px" }}
              >
                <MenuItem value="Satendra">Satendra</MenuItem>
                <MenuItem value="Sunil">Sunil</MenuItem>
                <MenuItem value="Raju">Raju</MenuItem>
              </Select>
            </Box>
            <Box marginBottom={2} display="flex" alignItems="center">
              <InputLabel style={{ fontWeight: "bold", color: "black" }}>
                Yard Size:
              </InputLabel>
              <Select
                label="YardSize"
                placeholder="select"
                size="small"
                onChange={(e) => SetYardSize(e.target.value)}
                sx={{ marginLeft: "28px", minWidth: "225px" }}
              >
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="20">20</MenuItem>
                <MenuItem value="30">30</MenuItem>
              </Select>
            </Box>

            <Box marginBottom={2} display="flex" alignItems="center">
              <InputLabel style={{ fontWeight: "bold", color: "black" }}>
                Square ft:
              </InputLabel>
              <TextField
                label="SquareFt"
                size="small"
                onChange={(e) => SetSquareFt(e.target.value)}
                sx={{ marginLeft: "28px" }}
              />
            </Box>
            <Box marginBottom={2} display="flex" alignItems="center">
              <InputLabel style={{ fontWeight: "bold", color: "black" }}>
                Price/ sq ft:
              </InputLabel>
              <TextField
                label="PriceSqFt"
                size="small"
                onChange={(e) => SetPriceSqFt(e.target.value)}
                sx={{ marginLeft: "17px" }}
              />
            </Box>
            <Box marginBottom={2} display="flex" alignItems="center">
              <InputLabel style={{ fontWeight: "bold", color: "black" }}>
                Total Price:
              </InputLabel>
              <TextField
                label="TotalPrice"
                size="small"
                onChange={(e) => SetTotalPrice(e.target.value)}
                sx={{ marginLeft: "18px" }}
              />
            </Box>
           
            <Box marginBottom={2} display="flex" alignItems="center">
              <InputLabel style={{ fontWeight: "bold", color: "black" }}>
                Date:
              </InputLabel>
              <TextField label="Date" size="small" onChange={(e) => SetDate(e.target.value)} sx={{ marginLeft: "60px" }} />
            </Box>

            <Box marginBottom={2} display="flex" alignItems="center">
              <InputLabel style={{ fontWeight: "bold", color: "black" }}>
                Paid:
              </InputLabel>
              <RadioGroup
                value={paid}
                onChange={handlePaidChange}
                sx={{ marginLeft: "62px", flexDirection: "row" }}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
            <Box marginBottom={2} display="flex" alignItems="center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={recurring}
                    onChange={handleRecurringChange}
                  />
                }
                label="Recurring :"
                sx={{ flexDirection: "row-reverse" }}
              />
            </Box>
            <Box marginBottom={2} display="flex" alignItems="center">
              <InputLabel style={{ fontWeight: "bold", color: "black" }}>
                Signature:
              </InputLabel>
              <TextField
                label="Signature"
                size="small"
                onChange={(e) => SetSignature(e.target.value)}
                sx={{ marginLeft: "18px" }}
              />
            </Box>
            <Box marginBottom={2}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", color: "black" }}
              >
                Notes:
              </Typography>
              {notes.map((note, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  marginBottom={1}
                >
                  <TextField
                    value={note}
                    onChange={(event) => handleNoteChange(index, event)}
                    label={`Notes ${index + 1}`}
                    size="small"
                    variant="outlined"
                    multiline
                    rows={2}
                    
                    sx={{ width: "100%", fontSize: "0.875rem" }}
                  />
                  <Button
                    onClick={() => handleRemoveNote(index)}
                    style={{ marginLeft: "8px" }}
                  >
                    Remove
                  </Button>
                </Box>
              ))}
              <Button onClick={handleAddNote} variant="outlined" size="small">
                Add Note
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Preview */}
        {isPreviewOpen && (
          <Accordion>
            <AccordionSummary>
              <Typography variant="h6">Preview</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box display="flex" flexDirection="column">
                <Typography variant="subtitle1">
                  Client Name: {ClientName}
                </Typography>
                <Typography variant="subtitle1">
                  Technician: {Technician}
                </Typography>
                <Typography variant="subtitle1">
                  Yard Size: {YardSize}
                </Typography>
                <Typography variant="subtitle1">
                  Square ft: {SquareFt}
                </Typography>
                <Typography variant="subtitle1">
                  Price/sq ft: {PriceSqFt}
                </Typography>
                <Typography variant="subtitle1">
                  Total Price: {TotalPrice}
                </Typography>
                <Typography variant="subtitle1">Date: {Date}</Typography>
                <Typography variant="subtitle1">Paid: {paid}</Typography>
                <Typography variant="subtitle1">
                  Recurring: {recurring ? "Yes" : "No"}
                </Typography>
                <Typography variant="subtitle1">
                  Signature: {Signature}
                </Typography>
                <Typography variant="subtitle1">
                  Notes:
                  {notes.map((note, index) => (
                    <Typography variant="subtitle2" key={index}>
                      - {note}
                    </Typography>
                  ))}
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TemplateForm;
