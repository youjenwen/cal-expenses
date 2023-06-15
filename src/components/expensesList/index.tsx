import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Add } from "@mui/icons-material";

export default function ExpensesList() {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [name, setName] = React.useState("");
  const [expendsesList, setExpendsesList] = useState({
    item: "",
    amount: 0,
    name: "",
    isSave: false,
    isEdit: false,
  });
  console.log(isAdd);

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
  };

  return (
    <div className="bg-lime-100 p-5 border-2 border-gray-900 rounded-lg">
      <h2 className="text-xl">Step 1.</h2>
      <div className="py-2">
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Add />}
          onClick={() => {
            setIsAdd(true);
          }}
        >
          Add content
        </Button>
        <div className="py-2">
          <TextField label="Expenditure Items" type="text" size="small" />
          <TextField label="Expenditure Amount" type="number" size="small" />
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="select-name">who pays</InputLabel>
            <Select
              id="select-name"
              value={name}
              label="who pays"
              onChange={handleChange}
            >
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="98">98</MenuItem>
              <MenuItem value="Esther">Esther</MenuItem>
              <MenuItem value="Harper">Harper</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="text"
            onClick={() => {
              setIsAdd(false);
            }}
          >
            Save
          </Button>
          <Button variant="text">Edit</Button>
        </div>
      </div>
    </div>
  );
}
