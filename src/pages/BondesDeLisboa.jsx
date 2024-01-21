import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BondesDeLisboa = () => {
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
          Bondes em Lisboa
        </Typography>
        <img
          src="/pexels-photo-2757691.jpeg"
          alt="Foto da muralha"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          Os bondes de Lisboa são não só um dos meios de transporte mais úteis
          para se locomover pela cidade, como também uma das atrações turísticas
          mais importantes de Lisboa. A rede é composta por cinco rotas e 58
          bondinhos (chamados de elétricos), dos quais 40 ainda são
          tradicionais. Os bondes tradicionais são pequenos, nostálgicos e muito
          fotogênicos. Ao comprar o bilhete a bordo, o preço é de €3 (R$16,10),
          mas, se você utilizar o Cartão 7 Colinas, o preço é de €1,50 (R$8,10)
          por viagem. Dentro das cinco rotas diferentes, há duas que são
          imprescindíveis:
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default BondesDeLisboa;
