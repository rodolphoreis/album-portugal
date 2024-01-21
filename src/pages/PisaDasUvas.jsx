import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const PisaDasUvas = () => {
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
          Pisa das Uvas
        </Typography>
        <img
          src="/Harmonia-da-Vindima-Emerson-Ribeiro-3.jpg"
          alt="Foto da muralha"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          Uma das mais antigas tradições da vitivinicultura mundial sobrevive
          até hoje não apenas como brincadeira dos festivais das colheitas, mas
          também como método de maceração preferido por alguns produtores. Sim,
          a pisa a pé, uma das primeiras maneiras que o ser humano encontrou
          para prensar as uvas para fazer vinho, ainda é tida como uma das
          formas mais interessantes de realizar a prensa.
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default PisaDasUvas;
