import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

const Attractions = () => {
  const openModal = (attractionName, imageUrl) => {
    Swal.fire({
      title: attractionName,
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: attractionName,
      showCancelButton: false,
      confirmButtonColor: "#1A76D2",
      confirmButtonText: "Fechar",
    });
  };

  return (
    <div>
      <h2
        style={{
          marginBottom: "30px",
          marginTop: "-20px",
          fontSize: "30px",
          fontFamily: "sans-serif",
        }}
      >
        Uma jornada pelos destinos imperdíveis
      </h2>
      <div>
        <h3
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => openModal("Torre de Belém", "/torredebelem.jpeg")}
        >
          Torre de Belém - Lisboa
        </h3>
      </div>

      <div>
        <h3
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() =>
            openModal("Mosteiro dos Jerónimos", "/mosteirodosjeronimos.jpeg")
          }
        >
          Mosteiro dos Jerónimos - Lisboa
        </h3>
      </div>

      <div>
        <h3
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() =>
            openModal("Castelo de São Jorge, Lisboa", "/casteloJorge.jpeg")
          }
        >
          Castelo de São Jorge - Lisboa
        </h3>
      </div>

      <div>
        <h3
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() =>
            openModal("Palácio Nacional da Pena - Sintra", "/palacio.jpeg")
          }
        >
          Palácio Nacional da Pena - Sintra
        </h3>
      </div>

      <div>
        <h3
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() =>
            openModal("Quinta da Regaleira - Sintra", "/quinta.jpeg")
          }
        >
          Quinta da Regaleira - Sintra
        </h3>
      </div>

      <div>
        <h3
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() =>
            openModal("Praça do Comércio, Lisboa", "/comercio.jpeg")
          }
        >
          Praça do Comércio - Lisboa
        </h3>
      </div>

      <div>
        <h3
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() =>
            openModal("Elevador de Santa Justa - Lisboa", "/elevador.jpeg")
          }
        >
          Elevador de Santa Justa - Lisboa
        </h3>
      </div>

      <div>
        <h3
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => openModal("Sé de Lisboa - Lisboa", "/seLisboa.jpeg")}
        >
          Sé de Lisboa - Lisboa
        </h3>
      </div>

      <div>
        <h3
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() =>
            openModal("Palácio Nacional de Mafra - Mafra", "/nacional.jpeg")
          }
        >
          Palácio Nacional de Mafra, Mafra
        </h3>
      </div>

      <Button component={RouterLink} to="/" variant="outlined" sx={{ mt: 2 }}>
        Voltar à Home
      </Button>
    </div>
  );
};

export default Attractions;
