import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const History = () => {
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
          História de Portugal
        </Typography>
        <Typography
          sx={{ textAlign: "left", marginBottom: "55px", marginTop: "35px" }}
        >
          Portugal foi fundado em 1143, ano da celebração do Tratado de Zamora.
          O Tratado, assinado entre D. Afonso Henriques, primeiro rei de
          Portugal, e Afonso VII de Leão e Castela, reconhece o estatuto
          jurídico de Portugal como reino independente. Em 1179 esse estatuto
          foi confirmado pelo Papa Alexandre III. Durante os sécs. XII e XIII os
          reis portugueses foram alargando as fronteiras, até à conquista do
          Algarve, consolidando um território praticamente inalterado até hoje.
          Com as fronteiras definidas, Portugal começou a olhar para dentro. Em
          finais do séc. XIII o rei D. Dinis criou a prestigiada Universidade de
          Coimbra, uma das mais antigas da Europa. Nos centros mais importantes
          edificaram-se castelos, palácios e catedrais, e sedimentou-se a
          administração territorial. Em 1385, na sequência de um movimento
          popular, D. João I foi aclamado rei, iniciando-se a 2.ª dinastia. Os
          filhos de D. João I e de D. Filipa de Lencastre seriam apelidados em
          Os Lusíadas, de Luiz Vaz de Camões, de “Ínclita geração, altos
          Infantes”, pela instrução, humanismo e qualidades governativas que
          demonstraram. De entre eles, um ficou conhecido para a História como
          visionário e principal obreiro dos Descobrimentos, uma das grandes
          aventuras da Humanidade. Graças ao ímpeto do Infante D. Henrique,
          também conhecido como Henrique o Navegador as caravelas portuguesas
          cruzaram os mares, fazendo uso dos melhores conhecimentos científicos
          e práticos da altura. Durante os sécs. XIV, XV e XVI navegaram até
          África, ao longínquo Oriente e às profundezas do continente
          sul-americano. Conquistaram terras, amealharam riquezas e trouxeram
          para a Europa coisas jamais vistas. Em 1498 Vasco da Gama descobriu o
          caminho marítimo para a Índia, e em 1500 Pedro Álvares Cabral chegou
          ao Brasil. Os portugueses chegariam ainda a Oman (1508), à Malásia
          (1511), a Timor (1512), à China (1513) e ao Japão (1543). Foi também
          um português, Fernão de Magalhães, que planeou e comandou, entre 1519
          e 1522, a primeira viagem de circum-navegação do globo.
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
};

export default History;
