import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const RegiaoVinica = () => {
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
          Região Viníca
        </Typography>
        <img
          src="/vale-douro-portugal-5.jpeg"
          alt="Foto da muralha"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          A produção de vinho neste território é uma lição sobre a capacidade e
          determinação do homem na optimização dos recursos naturais. As vinhas
          foram construídas num território marcado por declives acentuados e
          pela quase inexistência de terra e água. Os vinhedos que cobrem os
          grandes declives levantam-se do rio Douro e configuram um imenso
          escadório de socalcos e patamares que são, nas palavras de Orlando
          Ribeiro, a mais admirável obra humana que se pode ver em Portugal. A
          monumentalidade da paisagem do Alto Douro Vinhateiro (ADV) tem
          reconhecido valor universal. Em 2001 foi inscrita na lista do
          Património Mundial da Humanidade da UNESCO. Esta área corresponde a
          uma língua de cerca de 24 600 hectares que se estendem ao longo do
          rio.
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default RegiaoVinica;
