
const shortid = require('shortid');
const URL = require('../models/url');

const  handleGenerateShortUrl=async (req,res)=>{



        const {url} = req.body;
        

        if (!url) {
            return res.status(400).json({ error: 'redirectUrl is required' });
        }

        const shortID = shortid();

        await URL.create({
            shortId: shortID,
            redirectUrl: url, // Correctly access redirectUrl
            visitHistory: [],
        });

        return res.json({ id: shortID });
    
}

const findurl=async(req,res)=>{
    const shortid=req.body.shortid;
    const url=await URL.findOne({shortId:shortid});
    res.send(url.redirectUrl);
}
module.exports = {
    handleGenerateShortUrl,
    findurl
}