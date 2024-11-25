import React from 'react';

import Iconify from '../../../components/iconify';
import IconButton from './IconButton';

const ButtonGroup = () => {
  const buttons = [
    { label: 'Usuarios', icon: <Iconify icon={"eva:person-outline"} />, link: 'http://usuarios.smartmove.com.ar/userProfile' },
    { label: 'Legales', icon: <Iconify icon={"hugeicons:legal-01"} />, link: 'http://legales.smartmove.com.ar/'  },
    { label: 'Analítica', icon: <Iconify icon={"fluent-mdl2:b-i-dashboard"} />, link: 'https://analitica.smartmove.com.ar/menu'  },
    { label: 'Admin. Interna', icon: <Iconify icon={"clarity:employee-group-solid"} />, link: 'https://administracion.smartmove.com.ar/' },
    { label: 'Contable', icon: <Iconify icon={"tdesign:money"} />, link: 'https://contable.smartmove.com.ar/' },
    { label: 'Logística', icon: <Iconify icon={"la:truck-moving"} />, link: 'https://logistica.smartmove.com.ar/' },
    { label: 'Inmuebles', icon: <Iconify icon={"bi:houses"} />, link: 'http://inmuebles.smartmove.com.ar/' },
  ];

  return (
    <div style={{ marginTop: '20px' }}>
    <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Acceso a diferentes módulos</h2>
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {buttons.map((btn, index) => (
        <IconButton 
          key={index}
          label={btn.label}
          variant="contained"
          startIcon={btn.icon}
          onClick={() => {
            window.location.href = btn.link;
          }}
        />
      ))}
    </div>
  </div>
  );
};

export default ButtonGroup;
