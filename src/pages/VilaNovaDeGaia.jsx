import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const VilaNovaDeGaia = () => {
  return (
    <div>
      <Box
        sx={{
          pt: 10,
          pb: 6,
          bgcolor: "background.paper",
          textAlign: "center",
          mt: -9,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Vila Nova de Gaia
        </Typography>
        <img
          src="/solPorto.jpeg"
          alt="Foto da muralha"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          É o terceiro município mais populoso do país, com mais de 300 000
          habitantes, sucedendo a Lisboa e Sintra e o mais populoso da região
          Norte. Conhecido internacionalmente pelas suas empresas de vinhos do
          Porto e do Douro, indústria automóvel, vidreira e de componentes
          eletrónicos, pelos seus artistas: músicos, pintores, escultores e
          arquitetos, e pelas atividades turísticas que acolhem por ano milhares
          de visitantes, sendo um dos maiores municípios da região e do país,
          Gaia é uma cidade que tem pela sua frente um enorme potencial de
          desenvolvimento.
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default VilaNovaDeGaia;
