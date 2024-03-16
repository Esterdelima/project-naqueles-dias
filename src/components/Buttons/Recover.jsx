import * as React from 'react';
import Button from '@mui/material/Button';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';


export const Continue = () => {
    const handleClick = () => {
    };

    return(
        <Button type="submit" variant="contained" startIcon={<TaskAltOutlinedIcon />} sx={{
            background: " var(--Light-Verde---light, #EC562A)",
            width: "350px",
            height: "54px",
            padding: "15px 16px",
            borderRadius: "8px",
            fontFamily: 'Poppins, sans-serif',
            fontFize: '20px',
            fontWeight: 300,
            textTransform: 'none', 

            '&:hover': {
                backgroundColor: "#EC562A",
              },
              }}
              onClick={handleClick}
              >
        Recuperar
      </Button>
    );
};


