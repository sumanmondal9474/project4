var validUrl = require('valid-url');

exports.shortUrl = async (req, res) => {
  try {
    const data = req.body;
    const { longUrl } = data;
    if (!Object.keys(data).length)
         return res.status(400).send({ status: false, message: "Plsease provide data in body" });
    if (!longUrl)
      return res .status(400) .send({ status: false, message: "Url required" });






  } catch (error) {
    return res.status(500).send({ status: false, message: message.error });
  }
};






exports.geturlCode = async (req, res) => {
  try {





  } catch (error) {
    return res.status(500).send({ status: false, message: message.error });
  }
};
