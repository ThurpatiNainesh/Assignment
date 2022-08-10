const { default: axios } = require("axios")

const memesHandler = async function (req, res) {
    try{
        let options ={
            method:"post",
            url : `https://api.imgflip.com/caption_image?template_id=181913649&text0=humans&text1=Animals&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        res.send({data:result.data})
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}
module.exports.memesHandler=memesHandler