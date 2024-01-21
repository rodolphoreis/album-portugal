import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const CasteloDeGuimaraes = () => {
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
          Castelo de Guimarães
        </Typography>
        <img
          src="/101001356_111502007090852_2274924038053422451_n.jpg"
          alt="Foto da muralha"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          O Castelo de Guimarães, construído no século X, é um monumento icônico
          localizado em Guimarães, Portugal. Reconhecido como parte fundamental
          da história portuguesa, é popularmente conhecido como o Berço da
          Nação, pois acredita-se que Dom Afonso Henriques, o primeiro rei de
          Portugal, nasceu aqui em 1110. O castelo destaca-se pela imponente
          Torre de Menagem e pela Capela de São Miguel, testemunhas dos eventos
          históricos que marcaram o início do reino português. Com suas muralhas
          imponentes e vistas panorâmicas, o Castelo de Guimarães é um local
          fascinante que transporta os visitantes de volta à era medieval.
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default CasteloDeGuimaraes;
