import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const AquiNasceuPortugal = () => {
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
          Aqui nasceu Portugal
        </Typography>
        <img
          src="/1-25-4.jpg"
          alt="Foto da muralha"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          Guimarães, conhecida como o Berço da Nação, é uma cidade histórica
          portuguesa fundada no século IX. Notável por ser o local de nascimento
          de Dom Afonso Henriques, o primeiro rei de Portugal, em 1110, a cidade
          abriga o Castelo de Guimarães e o Paço dos Duques de Bragança,
          monumentos medievais. O Castelo, construído no século X, é considerado
          o lugar onde Portugal teve origem, destacando-se pela Capela de São
          Miguel. Esses marcos históricos testemunham a fundação do reino
          português e proporcionam aos visitantes uma viagem cativante ao
          passado medieval.
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default AquiNasceuPortugal;
