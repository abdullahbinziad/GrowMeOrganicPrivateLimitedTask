import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface Department {
  department: string;
  sub_departments: string[];
}

const DepartmentBar: React.FC = () => {
  const allData: Department[] = [
    {
        "department": "customer_service",
        "sub_departments": [
          "support",
          "customer_success"
        ]
      },
      {
        "department": "design",
        "sub_departments": [
          "graphic_design",
          "product_design",
          "web_design"
        ]
      }
  
  ];

  const [checked, setChecked] = React.useState<boolean[]>(new Array(allData.length).fill(false));
  const [subChecked, setSubChecked] = React.useState<boolean[][]>(allData.map(data => new Array(data.sub_departments.length).fill(false)));
  const [expanded, setExpanded] = React.useState<boolean[]>(new Array(allData.length).fill(false));

  const handleCategoryChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;

    const newSubChecked = [...subChecked];
    newSubChecked[index] = newSubChecked[index].map(() => event.target.checked);

    setChecked(newChecked);
    setSubChecked(newSubChecked);
  };

  const handleSubcategoryChange = (categoryIndex: number, subIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSubChecked = [...subChecked];
    newSubChecked[categoryIndex][subIndex] = event.target.checked;

    const allSubChecked = newSubChecked[categoryIndex].every(checked => checked);

    const newChecked = [...checked];
    newChecked[categoryIndex] = allSubChecked;

    setSubChecked(newSubChecked);
    setChecked(newChecked);
  };

  const handleExpandToggle = (index: number) => () => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div>
      {allData.map((data, index) => (
        
        <div key={index}>
              {expanded[index] ? (
            <ExpandLessIcon onClick={handleExpandToggle(index)} />
          ) : (
            <ExpandMoreIcon onClick={handleExpandToggle(index)} />
          )}
          <FormControlLabel
            label={data.department}
            control={
              <Checkbox
                checked={checked[index]}
                indeterminate={subChecked[index].some(value => value) && !subChecked[index].every(value => value)}
                onChange={handleCategoryChange(index)}
              />
            }
            onClick={handleExpandToggle(index)}
          />
        
          <Collapse in={expanded[index]}>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 6 }}>
              {data.sub_departments.map((subDepartment, subIndex) => (
                <FormControlLabel
                  key={subIndex}
                  label={subDepartment}
                  control={
                    <Checkbox
                      checked={subChecked[index][subIndex]}
                      onChange={handleSubcategoryChange(index, subIndex)}
                    />
                  }
                />
              ))}
            </Box>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default DepartmentBar;
