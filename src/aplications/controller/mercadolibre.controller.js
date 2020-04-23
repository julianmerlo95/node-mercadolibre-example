const axios = require('../axios/axios');

module.exports = async (req, res) => {
  try {
    const categorie = req.params.categorie
    console.log(req);

    const response = await axios.get(categorie);
    res.json({
      data: response.data.results
    })
  } catch (err) {
    return err;
  }
}