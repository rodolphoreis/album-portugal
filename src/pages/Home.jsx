import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const defaultTheme = createTheme();

const cards = [
  {
    id: 1,
    title: "Aqui Nasceu Portugal",
    description: "Fachada da antiga Torre",
    image: "1-25-4.jpg",
  },
  {
    id: 2,
    title: "Castelo de Guimarães",
    description: "Fundado por Mumadona Dias no século X.",
    image: "101001356_111502007090852_2274924038053422451_n.jpg",
  },
  {
    id: 3,
    title: "Igreja de São Gualter",
    description: "Igreja de São Gualter fica no Campo da Feira",
    image: "guimaraes.png",
  },
  {
    id: 4,
    title: "Região viníca",
    description: "Maior área de vinha em montanha do mundo.",
    image: "vale-douro-portugal-5.jpeg",
  },
  {
    id: 5,
    title: "Douro",
    description: "O rio Douro, um dos principais rios da Península Ibérica",
    image: "vale-douro-portugal-o-que-fazer3-e1605812269646.jpeg",
  },

  {
    id: 6,
    title: "Pisa das Uvas",
    description:
      "Tradições antigas e enraizadas na cultura vitivinícola de Portugal",
    image: "Harmonia-da-Vindima-Emerson-Ribeiro-3.jpg",
  },
  {
    id: 7,
    title: "Ribeira",
    description:
      "Um dos lugares mais importantes na hora de conhecer o centro histórico do Porto",
    image: "porto.jpeg",
  },
  {
    id: 8,
    title: "Vila Nova de Gaia",
    description:
      "Conhecido internacionalmente pelas suas empresas de vinhos do Porto e do Douro",
    image: "solPorto.jpeg",
  },
  {
    id: 9,
    title: "Bondes em Lisboa",
    description: "melhor forma de se locomover por Lisboa",
    image: "pexels-photo-2757691.jpeg",
  },
];

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Portugal em Foco
            </Typography>
            <Typography
              variant="h5"
              sx={{ pt: 4 }}
              align="center"
              color="text.secondary"
              paragraph
            >
              Explore Portugal através destas fotos cativantes. Das ruas
              históricas de Guimarães às paisagens deslumbrantes, cada imagem
              conta uma história única. Descubra a beleza e a rica herança
              cultural deste país encantador.
            </Typography>
            <Stack
              sx={{
                pt: 4,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
              spacing={2}
            >
              <RouterLink to="/history" style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "#1A76D2",
                    color: "white",
                    "&:hover": { backgroundColor: "#3b88d5" },
                    marginTop: "17px",
                  }}
                >
                  História de Portugal
                </Button>
              </RouterLink>
              <RouterLink to="/attractions" style={{ width: "100%" }}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "100%",
                    borderColor: "#1A76D2",
                    color: "#1A76D2",
                    marginLeft: "20px",
                    "&:hover": { backgroundColor: "#edf2fb" },
                  }}
                >
                  Pontos Turisticos
                </Button>
              </RouterLink>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "75%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Visualizar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Contato:
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          ></Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Linkedin:"}
            <Link
              color="inherit"
              target="_blank"
              href="https://www.linkedin.com/in/rodolphoreis/"
            >
              {" "}
              rodolphoreis
            </Link>{" "}
            {"."}
          </Typography>
        </Box>
      </footer>
    </ThemeProvider>
  );
}
