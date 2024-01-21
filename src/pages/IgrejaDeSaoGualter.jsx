import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const IgrejaDeSaoGualter = () => {
  return (
    <div>
      <Box
        sx={{
          pt: 8,
          pb: 6,
          bgcolor: "background.paper",
          textAlign: "center",
          mt: -9,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Igreja de São Gualter
        </Typography>
        <img
          src="/guimaraes.png"
          alt="Foto da muralha"
          style={{ width: "100%", maxWidth: "400px", height: "auto" }}
        />
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          A Igreja de São Gualter, também conhecida como Igreja de Nossa Senhora
          da Consolação e Santos Passos, localiza-se na histórica cidade de
          Guimarães, no norte de Portugal. Este monumento do século XVII é
          atualmente a igreja mais impressionante de todas. Ela capta a atenção
          dos seus visitantes através das suas torres gémeas (século XIX) e do
          seu acesso florido que vem desde o coração da cidade. No interior,
          consideravelmente decorado, ao qual se acede graças a uma escadaria,
          você poderá apreciar a sua planta retangular e o seu lindo retábulo em
          madeira policromada, encontra-se em uma das laterais, a urna
          mumificada de São Gualter.
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default IgrejaDeSaoGualter;
