import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import {tokenPbi} from '../tokenPbi';



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



// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();


  return (
    <>
      <Helmet>
        <title> Dashboard | SmartMove </title>
      </Helmet>

      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Typography variant="h4" sx={{ mb: 5, mt:-4 }}>
        Dashboards - Área empleados
        </Typography>

        <Grid container spacing={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <iframe title="Admin. Interna" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiZjBjYjdkNWEtZDdhOS00YmRkLTkyYzQtOGQ2ZTE1YWQ2MDljIiwidCI6IjVhMmI2OTI0LTFhZDItNDBkNy1iZjZjLWYwN2U3MGNjN2MwMCIsImMiOjR9" frameBorder="0" allowFullScreen="true"/>

        </Grid>
      </Container>
    </>
  );
}
