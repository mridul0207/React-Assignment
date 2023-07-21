const geoip = require('geoip-lite');
exports.getLocation = async(req,res)=>{
    const ip = req.ip;
    const geo =geoip.lookup(ip);
    const state = geo?.region;
    return res.status(200).json({
        success:true,
        message:ip
    })
}