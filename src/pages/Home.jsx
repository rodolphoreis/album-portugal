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
            {/* -------card 1--------- */}
            <Grid item xs={12} sm={6} md={4}>
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
                  image="1-25-4.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Aqui Nasceu Portugal
                  </Typography>
                  <Typography>Fachada da antiga Torre</Typography>
                </CardContent>
                <CardActions>
                  <RouterLink
                    to={`/aquinasceuportugal`}
                    style={{ width: "100%" }}
                  >
                    <Button size="small">Visualizar</Button>
                  </RouterLink>
                </CardActions>
              </Card>
            </Grid>
            {/* -------card 2--------- */}
            <Grid item xs={12} sm={6} md={4}>
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
                  image="101001356_111502007090852_2274924038053422451_n.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Castelo de Guimarães
                  </Typography>
                  <Typography>
                    Fundado por Mumadona Dias no século X.
                  </Typography>
                </CardContent>
                <CardActions>
                  <RouterLink
                    to={`/castelodeguimaraes`}
                    style={{ width: "100%" }}
                  >
                    <Button size="small">Visualizar</Button>
                  </RouterLink>
                </CardActions>
              </Card>
            </Grid>
            {/* -------card 3-------- */}
            <Grid item xs={12} sm={6} md={4}>
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
                  image="guimaraes.png"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Igreja de São Gualter
                  </Typography>
                  <Typography>
                    Igreja de São Gualter fica no Campo da Feira
                  </Typography>
                </CardContent>
                <CardActions>
                  <RouterLink
                    to={`/igrejadesaogualter`}
                    style={{ width: "100%" }}
                  >
                    <Button size="small">Visualizar</Button>
                  </RouterLink>
                </CardActions>
              </Card>
            </Grid>
            {/* -------card 4--------- */}
            <Grid item xs={12} sm={6} md={4}>
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
                  image="vale-douro-portugal-5.jpeg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Região viníca
                  </Typography>
                  <Typography>
                    Maior área de vinha em montanha do mundo.
                  </Typography>
                </CardContent>
                <CardActions>
                  <RouterLink to={`/regiaovinica`} style={{ width: "100%" }}>
                    <Button size="small">Visualizar</Button>
                  </RouterLink>
                </CardActions>
              </Card>
            </Grid>
            {/* -------card 5--------- */}
            <Grid item xs={12} sm={6} md={4}>
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
                  image="vale-douro-portugal-o-que-fazer3-e1605812269646.jpeg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Douro
                  </Typography>
                  <Typography>
                    O rio Douro, um dos principais rios da Península Ibérica
                  </Typography>
                </CardContent>
                <CardActions>
                  <RouterLink to={`/douro`} style={{ width: "100%" }}>
                    <Button size="small">Visualizar</Button>
                  </RouterLink>
                </CardActions>
              </Card>
            </Grid>
            {/* -------card 6--------- */}
            <Grid item xs={12} sm={6} md={4}>
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
                  image="Harmonia-da-Vindima-Emerson-Ribeiro-3.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Pisa das Uvas
                  </Typography>
                  <Typography>
                    Tradições antigas e enraizadas na cultura vitivinícola de
                    Portugal
                  </Typography>
                </CardContent>
                <CardActions>
                  <RouterLink to={`/pisadasuvas`} style={{ width: "100%" }}>
                    <Button size="small">Visualizar</Button>
                  </RouterLink>
                </CardActions>
              </Card>
            </Grid>
            {/* -------card 7--------- */}
            <Grid item xs={12} sm={6} md={4}>
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
                  image="porto.jpeg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Ribeira
                  </Typography>
                  <Typography>
                    Um dos lugares mais importantes na hora de conhecer o centro
                    histórico do Porto
                  </Typography>
                </CardContent>
                <CardActions>
                  <RouterLink to={`/ribeira`} style={{ width: "100%" }}>
                    <Button size="small">Visualizar</Button>
                  </RouterLink>
                </CardActions>
              </Card>
            </Grid>
            {/* -------card 8--------- */}
            <Grid item xs={12} sm={6} md={4}>
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
                  image="solPorto.jpeg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Vila Nova de Gaia
                  </Typography>
                  <Typography>
                    Conhecido internacionalmente pelas suas empresas de vinhos
                    do Porto e do Douro
                  </Typography>
                </CardContent>
                <CardActions>
                  <RouterLink to={`/vilanovadegaia`} style={{ width: "100%" }}>
                    <Button size="small">Visualizar</Button>
                  </RouterLink>
                </CardActions>
              </Card>
            </Grid>
            {/* -------card 9--------- */}
            <Grid item xs={12} sm={6} md={4}>
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
                  image="pexels-photo-2757691.jpeg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Bondes em Lisboa
                  </Typography>
                  <Typography>
                    Melhor forma de se locomover por Lisboa
                  </Typography>
                </CardContent>
                <CardActions>
                  <RouterLink to={`/bondesdelisboa`} style={{ width: "100%" }}>
                    <Button size="small">Visualizar</Button>
                  </RouterLink>
                </CardActions>
              </Card>
            </Grid>
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
