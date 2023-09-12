import { Dispatch, SetStateAction } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

const items = [
  {
    label: 'Location',
    type: 'location',
    parameters: ['name', 'type', 'dimension'],
  },
  {
    label: 'Episodes',
    type: 'episode',
    parameters: ['name', 'episode'],
  },
  {
    label: 'Character',
    type: 'character',
    parameters: ['name', 'status', 'species', 'type', 'gender'],
  },
];

export interface MultipleSelectProps {
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
  selectedParameter: string;
  setSelectedParameter: Dispatch<SetStateAction<string>>;
  availableParameters: string[];
  setAvailableParameters: Dispatch<SetStateAction<string[]>>;
}

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  selectedType,
  setSelectedType,
  selectedParameter,
  setSelectedParameter,
  availableParameters,
  setAvailableParameters,
}) => {
  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    const type = event.target.value;
    setSelectedType(type);
    const selectedTypeParameters = items.find((item) => item.type === type);
    setAvailableParameters(
      selectedTypeParameters ? selectedTypeParameters.parameters : []
    );
    setSelectedParameter('');
  };

  const handleParameterChange = (event: SelectChangeEvent<string>) => {
    const parameter = event.target.value;
    setSelectedParameter(parameter);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 215, zIndex: 10 }}>
        <InputLabel>Select Item</InputLabel>
        <Select
          value={selectedType}
          onChange={handleTypeChange}
          sx={{ backgroundColor: '#fff' }}
          MenuProps={{
            style: { zIndex: 9, backgroundColor: 'rgb(0 0 0 / 52%)' },
          }}
        >
          {items.map((item) => (
            <MenuItem key={item.type} value={item.type}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedType && (
        <FormControl sx={{ m: 1, width: 215, zIndex: 10 }}>
          <InputLabel>Select parameter</InputLabel>
          <Select
            value={selectedParameter}
            onChange={handleParameterChange}
            sx={{ backgroundColor: '#fff' }}
          >
            {availableParameters.map((parameter) => (
              <MenuItem key={parameter} value={parameter}>
                {parameter}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default MultipleSelect;
