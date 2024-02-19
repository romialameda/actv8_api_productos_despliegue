const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/empresa", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const ProductoSchema = new mongoose.Schema(
  {
    nombre: String,
    precio: String,
  },
  { collection: "productos" }
);

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
