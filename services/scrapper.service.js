const axios = require("axios");
const cheerio= require("cheerio");

const getHtml = async(url) => {
    const { data: html } = await axios.get(url,
        {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36'
            }
        }).catch(e => console.error(e));

    return html;
}

const getFollowers = ($) => {
    const data = $('meta[name=description]').prop('content');
    const rawData = data.split("Followers")[0].replace(',', '');
    return parseInt(rawData);
}

const getFollowing = ($) => {
    const data = $('meta[name=description]').prop('content');
    const rawData = data.substring(
        data.indexOf("Followers, ") + 10,
        data.lastIndexOf(" Following")
    );
    return parseInt(rawData);
}

const getPostsCount = ($) => {
    const data = $('meta[name=description]').prop('content');
    const rawData = data.substring(
        data.indexOf("Following, ") + 10,
        data.lastIndexOf(" Posts")
    );
    return parseInt(rawData);
}

exports.parseData = async (url) => {
    const html = await getHtml(url);

    const $ = cheerio.load(html);

    return {
        followers: getFollowers($),
        following: getFollowing($),
        posts: getPostsCount($)
    };
}



