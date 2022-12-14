const express = require("express");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const app = express();
const port = 8000;
const compteRouter = require("./routes/compte");
const etudiantRouter = require("./routes/etudiant");
const partenaireRouter = require("./routes/partenaire");
const offreRouter = require("./routes/offre");
const annonceRouter = require("./routes/annonce");
const panierRouter = require("./routes/panier");
const produitRouter = require("./routes/produit");
const contientRouter = require("./routes/contient");
const offre_desRouter = require("./routes/offre_des");
const administrateurRouter = require("./routes/administrateur");

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/compte", compteRouter);
app.use("/etudiant", etudiantRouter);
app.use("/partenaire", partenaireRouter);
app.use("/offre", offreRouter);
app.use("/annonce", annonceRouter);
app.use("/panier", panierRouter);
app.use("/produit", produitRouter);
app.use("/contient", contientRouter);
app.use("/offre_des", offre_desRouter);
app.use("/administrateur", administrateurRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
