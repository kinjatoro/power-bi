import React, { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const LegalesContext = createContext();

export function LegalesProvider({ children }) {
  const [legales, setLegales] = useState(false);

  useEffect(() => {
    // Verifica si existe un token JWT en la cookie
    const jwtToken = getJwtToken();
    console.log(jwtToken)
    
    // decodifica el token (si lo encuentra)
      const decodedToken = jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyOTk4ODkyLCJpYXQiOjE3MzIzOTQwOTIsImp0aSI6IjVhYTA1OGIxMTllMzRiNWViZDZjZTFmZTEyYTBmYTY5IiwiY3VpdCI6IjIyNjA2MDYwNjA2IiwiaXNfYWRtaW4iOnRydWUsInJvbF9sZWdhbGVzIjoiZXNjcmliYW5vIiwicm9sX2FkbWluX2ludCI6ImxlZ2FsZXMiLCJyb2xfY29udGFibGUiOiJpbnF1aWxpbm8iLCJyb2xfaW5tdWVibGVzIjoidXN1YXJpbyIsInJvbF9sb2dpc3RpY2EiOiJhdWRpdG9yIn0.m3R6HAx3zn68egei6a_B9o_l9JAU6uNyZzLLfMdfKQg");
      console.log(decodedToken);
      if (decodedToken.rol === "legales"){
        setLegales(true);
      }

    }
  , []);


  function getJwtToken() {
    const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));
    return jwtCookie ? jwtCookie.split('=')[1] : null;
  }

  return (
    <LegalesContext.Provider value={{ legales, setLegales }}>
      {children}
    </LegalesContext.Provider>
  );
}

export function useLegales() {
  return useContext(LegalesContext);
}

