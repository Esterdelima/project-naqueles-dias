import * as React from 'react';
import Button from '@mui/material/Button';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';


export const ResgisteGreen = () => {
    const handleClick = () => {
    };

    return(
        <Button type="submit" variant="contained" startIcon={<TaskAltOutlinedIcon />} sx={{
            background: " var(--Light-Verde---light, #49B060)",
            width: "130px",
            height: "59.99px",
            padding: "15px 16px",
            borderRadius: "8px",
            fontFamily: 'Poppins, sans-serif',
            fontFize: '20px',
            fontWeight: 300,
            textTransform: 'none', 

            '&:hover': {
                backgroundColor: "#49B060",
              },
              }}
              onClick={handleClick}
              >
        Entrar
      </Button>
    );
};


