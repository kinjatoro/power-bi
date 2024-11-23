import { React, useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import jwtDecode from 'jwt-decode';
import { faker } from '@faker-js/faker';
import '../App.css';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Button, AppBar, Toolbar, Chip, Stack } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import gorro from '../gorro.png';
import milogo from '../galicia_1.svg';
import milogo1 from '../sm.svg';
import milogo2 from '../sm2.svg';
import milogo4 from '../sm4.svg';
import musica from '../musica.png';
import { useAuth } from '../Auth';

// ----------------------------------------------------------------------

export default function LandingPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const palabras = ["Jazz", "Rock", "Salsa", "Pop","Blues" ,"Reggae"];
  const colores = ["white", "white", "white", "white","white" ,"white"];
  const iconos = [];
  const [palabraActualIndex, setPalabraActualIndex] = useState(0);
  const [iconoActualIndex, setIconoActualIndex] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  const [iconoKey, setIconoKey] = useState(0);


  const [decodedToken, setDecodedToken] = useState('login/cliente');

  useEffect(() => {
    const interval = setInterval(() => {
      setMostrar(false); // Comienza a ocultar la palabra actual
      setTimeout(() => {
        setPalabraActualIndex((prevIndex) => (prevIndex + 1) % palabras.length);
        setIconoActualIndex((prevIndex) => (prevIndex + 1) % iconos.length);
        setIconoKey((prevKey) => prevKey + 1);
        setMostrar(true); // Muestra la nueva palabra después de un breve retraso
      }, 500); // Retraso para permitir que se complete la animación de desvanecimiento (500 milisegundos)
    }, 3000); // Cambia la palabra cada 3 segundos (3000 milisegundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [iconos.length, palabras.length]);

  const palabraActual = palabras[palabraActualIndex];
  const colorPalabra = colores[palabraActualIndex];
  const iconoActual = iconos[iconoActualIndex];

  useEffect(() => {
    
    // Verifica si existe un token JWT en la cookie
    const jwtToken = getJwtToken();
    console.log(jwtToken);
    // decodifica el token (si lo encuentra)
    if (jwtToken) {
      setDecodedToken(jwtDecode(jwtToken).rol);
      
    }
  }, []);


  function getJwtToken() {
    const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));
    return jwtCookie ? jwtCookie.split('=')[1] : null;
  }


  const handleClick = () => {
    console.log(decodedToken);
    navigate(`/${decodedToken}`);  // para ver publicaciones (alumno)
  }
  
  const handleClick2 = () => {
    navigate('/login/cliente');  // para iniciar sesion (profesor)
  }
  
  const handleClick3 = () => {
    navigate('/bar/mispublicaciones');  // para ir a mis publicaciones (profesor)
  }

  const handleAuth = () => {
    setAuth(true);
 };
 
 


  return (
    <>
      <Helmet>
        <title> Inicio | SmartMove </title>
      </Helmet>

      <Container sx={{mb: -10, ms: -3, me:-3 }} disableGutters maxWidth={false} >
        <Typography variant="h4" sx={{ mb: 11 }}/>
          
        
        <Grid container spacing={2}>
          <Grid xs={12} lg={6}>  
            <Grid className="Altura" sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center", ml:3}}>
              <Grid>
                <Typography variant='h1' align = 'center'>Bienvenido a <br /><span className="color-change">SmartMove</span></Typography>
                <Typography variant='h4' align='center' sx={{mt:1}}>Tu nuevo hogar te está esperando.</Typography>
              </Grid>
              
              <Grid sx={{display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "center", mt:3}}>
                <Button variant = "contained" size ='large' sx={{mx:2}} onClick={handleClick} >Hacé click para ingresar</Button> 
                
              </Grid>
            </Grid>
          </Grid>


          
          <Grid className='Ocultar' xs={6} sx={{display: "flex", alignItems: 'center', justifyContent: "center", position: "relative"}}>
            
          

          <div>
    <svg className="RotatingLogo" width="196" height="197" viewBox="0 0 196 197" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="97.5698" cy="97.5698" r="97.5698" fill="black" />
      <path d="M22 161.172L97.1722 86L172.344 161.172C172.344 161.172 148.513 196.609 97.1721 196.609C45.8303 196.61 22 161.172 22 161.172Z" fill="#F9FAFB" />
      <rect x="82" y="149" width="15.2874" height="15.2874" rx="2" className="anim-rect" fill="#1976D2" />
      <rect x="99.0859" y="166.086" width="15.2874" height="15.2874" rx="2" className="anim-rect" fill="#1976D2" />
      <rect x="82" y="166.086" width="15.2874" height="15.2874" rx="2" className="anim-rect" fill="#1976D2" />
      <rect x="99.0859" y="149" width="15.2874" height="15.2874" rx="2" className="anim-rect" fill="#1976D2" />
    </svg>
  </div>
          </Grid>
          

        </Grid>




        <Box sx={{m: 9}} />


       

              
                <AppBar position="fixed" sx={{top: 'auto',bottom: 0, width: '100%' }}  >
                  <Toolbar>
                    <Typography variant="body1">
                      © {new Date().getFullYear()} SmartMove.
                    </Typography>
                  </Toolbar>
                </AppBar>
                
      
      </Container>
    </>
  );
}
