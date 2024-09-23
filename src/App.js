import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: '7a7ba1f1-fcac-4b40-8793-2605844014e7',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=7a7ba1f1-fcac-4b40-8793-2605844014e7&groupId=bd9cea22-9ffa-493d-bbd4-b71b552943ec&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyIsImtpZCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzQ0OTc5ZDAtZDMxZC00YzU3LThiYTAtNDkxYWZmNGFjYWVkLyIsImlhdCI6MTcyNzA0NzUwMywibmJmIjoxNzI3MDQ3NTAzLCJleHAiOjE3MjcwNTMwMDEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WEFBQUFocVJqSnd1YVloNFNBVVkxR3pHMFFKUy9JTitWdk1SenhxcTFTR1BuMlJBOU9TTGhDalM2UGZsVU56RU5SNUlxIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTE9QRVogVkFaUVVFWiIsImdpdmVuX25hbWUiOiJMVUNBUyBIRVJOQU4iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxODYuMTMyLjY5LjE1MyIsIm5hbWUiOiJMT1BFWiBWQVpRVUVaIExVQ0FTIEhFUk5BTiIsIm9pZCI6IjY5NGQ1NDI4LWI2OGUtNGRhMy1hODExLWYxMzYyN2U4Zjc3MyIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS02OTg5Mjk1My0xNjcwMTIyNDEtMTc3NzA5MDkwNS00OTMwMDAiLCJwdWlkIjoiMTAwMzIwMDEwNERGQjQ2QiIsInJoIjoiMC5BUThBMEhsSk5CM1RWMHlMb0VrYV8wcks3UWtBQUFBQUFBQUF3QUFBQUFBQUFBQVBBSDAuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiWXVwM1l6RDFaYWV0VG5vSWFuQXlmNkp4OWdCTUtYbFBBNXFHTnNubnZjZyIsInRpZCI6IjM0NDk3OWQwLWQzMWQtNGM1Ny04YmEwLTQ5MWFmZjRhY2FlZCIsInVuaXF1ZV9uYW1lIjoibGxvcGV6dmF6cXVlekB1YWRlLmVkdS5hciIsInVwbiI6Imxsb3BlenZhenF1ZXpAdWFkZS5lZHUuYXIiLCJ1dGkiOiJDQ1didFFtTUlFLW5fYW9tcWZWTkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2lkcmVsIjoiMSAxMCJ9.Nyu2wF27_abRYaWEuZbZF3SqrDA_lSulmqTd8jYWJ2gDqSK4oRYFQcMNLr_HIHSbOb48iKcZwt07Jd1v2Gtjmtb1fK-N7WCwnIc65AlqtfxuR4TjIKSya_GGnF3SB43DSQedR8pXQRhldPB94dveOoNZf1VrVCWJBafWSBPhKELkL3zMzHsDOpQLW2jbxhDEYwqL_oMezKvR8ck0eXoryiTooV3aj7tTuemrdtMfUPdsS9cfbgzkgb3riX7aFSh0QkmIGj68mt6pG9FIBTCEy68XKDLUimX-p7VGfUiBW8UVt_Xx9lke-qMfXdCJe_wiH8UNnza2NckWLasRa4lHbA',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
