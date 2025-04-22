const index = (req, res) => {
  try {
    console.log("Hola estas creando un producto");
    res.send("Ruta de productos funcionando");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};

module.exports = {  
  index,
};
