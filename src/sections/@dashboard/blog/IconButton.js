import React from 'react';
import Button from '@mui/material/Button'; // Importa el botón desde Material-UI
import PropTypes from 'prop-types'; // Para validación de propiedades

const IconButton = ({ startIcon, endIcon, label, onClick }) => {
  return (
    <Button 
      variant="outlined" // Siempre usar variante "contained"
      startIcon={startIcon} 
      endIcon={endIcon} 
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

// Validar propiedades con PropTypes
IconButton.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default IconButton;
