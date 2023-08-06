'use client';

import { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { pink } from '@mui/material/colors';

export default function TodoItem({ todo }) {
  const [checked, setChecked] = useState(false);

  return (
    <FormControlLabel
      key={todo.id}
      id={todo.id}
      control={
        <Checkbox
          checked={checked}
          onChange={() => setChecked((done) => !done)}
          icon={<TaskOutlinedIcon />}
          checkedIcon={<TaskIcon />}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      }
      label={todo.name}
      sx={{ textDecoration: checked ? 'line-through' : '' }}
    />
  );
}
