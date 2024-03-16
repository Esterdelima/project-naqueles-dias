import * as React from 'react';
import Button from '@mui/material/Button';


export const Register = () => {
    const handleClick = () => {
    };

    return (
        <Button 
            type="submit" 
            variant="contained" 
            // startIcon={<TaskAltOutlinedIcon />} 
            sx={{
                background: "var(--Light-Verde---light, #664192)",
                width: "350px",
                height: "54px",
                padding: "15px 16px",
                borderRadius: "8px",
                fontFamily: 'Poppins, sans-serif',
                fontSize: '20px', // Corrigido aqui
                fontWeight: 300,
                textTransform: 'none', 
                alignItems: "center",
                margin: 'auto', 
                '&:hover': {
                    backgroundColor: "#664192",
                },
            }}
            onClick={handleClick}
        >
            Entrar
        </Button>
    );
};
