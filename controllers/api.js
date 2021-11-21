// Services
const ScrapeService = require('../services/scrapper.service');

exports.post_data = async(req, res) => {
    const { url } = req.body
    const data = await ScrapeService.parseData(url);
    return res.json(data);
}