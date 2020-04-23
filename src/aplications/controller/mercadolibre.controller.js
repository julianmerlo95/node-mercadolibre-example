const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=samsung');
    res.json({
      data: response.data.results
    })
  } catch (err) {
    return err;
  }
}