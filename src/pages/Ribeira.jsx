import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Ribeira = () => {
  return (
    <div>
      <Box
        sx={{
          pt: 11,
          pb: 10,
          bgcolor: "background.paper",
          textAlign: "center",
          mt: -9,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ribeira
        </Typography>
        <img
          src="/porto.jpeg"
          alt="Foto da muralha"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          O Cais da Ribeira é um dos cartões-postais do Porto. Localizado junto
          à margem do Douro (por isso do nome, é claro), a região é famosa pelas
          suas antigas construções coloridas, coladas umas às outras. Também são
          um marco da Ribeira as várias opções de restaurantes, bares e lojas de
          souvernirs. É daqueles passeios obrigatórios na cidade: caminhar sem
          pressa pelo calçadão junto à orla e admirar, do outro lado, a Vila
          Nova de Gaia com suas caves iluminadas à noite, e, ali nas
          proximidades, a imponente ponte D. Luís I.
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default Ribeira;
