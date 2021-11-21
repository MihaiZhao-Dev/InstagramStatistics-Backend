// Services
const ScrapeService = require('../services/scrapper.service');

exports.post_data = async(req, res) => {
    const data = await ScrapeService.parseData('https://instagram.com/utopiantravel');
    return res.json(data);
}