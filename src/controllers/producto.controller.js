const index = (req, res) => {
  try {
    console.log("Hola estas creando un producto");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  index,
};
