import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Douro = () => {
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
          Douro
        </Typography>
        <img
          src="/vale-douro-portugal-o-que-fazer3-e1605812269646.jpeg"
          alt="Foto da muralha"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          Douro Vinhateiro é mundialmente famosos pelos socalcos. Com uma
          paisagem tanto terrestre como do Douro, a fim de cortar a respiração.
          É a região vinícola mais antiga do mundo e é o local de produção do
          vinho do Porto. Não é por acaso que em 2001, a UNESCO classificou o
          Alto Douro Vinhateiro como Património Mundial da Humanidade. Com
          paisagens arrebatadoras e numerosas quintas para fazer as inevitáveis
          provas de vinho, pode contar ainda com aldeias históricas, trilhos
          pedestres, uma gastronomia autêntica e ainda um número infinito de
          miradouros que proporcionam vistas panorâmicas estupefatas.
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default Douro;
