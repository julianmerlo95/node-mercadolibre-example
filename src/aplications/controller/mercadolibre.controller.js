const axios = require('../../utils/axios/axios');

module.exports = async (req, res) => {
  try {
    const categorie = req.params.categorie;
    const response = await axios.get(categorie);
    res.json({
      data: response.data.results,
      statusCode: 200
    })
  } catch (err) {
    return err;
  }
}