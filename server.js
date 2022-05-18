const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/test", (req, res) => {
  res.send("Test OK!");
});
   
app.get("/orders", (req, res) => {
  var fakeOrders = [
    {
      id: 1,
      numero: "845-001-4590",
      dataOrdine: "2022-03-28",
      totale: 259.88,
      cliente: {
        id: 210,
        nominativo: "Armando Esposito",
      },
      listProdotti: [
        {
          id: 9,
          descr: "descr9",
          prezzo: 99.98,
        },
        {
          id: 66,
          descr: "descr66",
          prezzo: 159.9,
        },
      ],
    },
    {
      id: 2,
      numero: "845-003133-4590",
      dataOrdine: "2022-03-29",
      totale: 299.88,
      cliente: {
        id: 298,
        nominativo: "genitore 2",
      },
      listProdotti: [
        {
          id: 11,
          descr: "descr1111",
          prezzo: 99.98,
        },
        {
          id: 66,
          descr: "descr66",
          prezzo: 159.9,
        },
      ],
    },
    {
      id: 3,
      numero: "845-001-4590",
      dataOrdine: "2022-03-27",
      totale: 129.88,
      cliente: {
        id: 270,
        nominativo: "ciaoooo ciao",
      },
      listProdotti: [
        {
          id: 9,
          descr: "descr9",
          prezzo: 99.98,
        },
        {
          id: 66,
          descr: "descr66",
          prezzo: 159.9,
        },
        {
          id: 67,
          descr: "descruueu",
          prezzo: 159.9,
        },
      ],
    },
  ];
  res.send(fakeOrders);
});

app.listen(port, () => {
  console.log("Server listen on port " + port);
});
