import * as React from 'react';
import Button from '@mui/material/Button';



export const Continue = () => {
    const handleClick = () => {
    };

    return(
        <Button type="submit" variant="contained"  sx={{
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
        Continuar
      </Button>
    );
};


