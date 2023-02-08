if(process.env.NODE_ENV ===  "production")
{
    module.exports = {mongoURI:"mongodb+srv://thictony:Cantcodeforshit@!444@cluster0.t7uatyp.mongodb.net/?retryWrites=true&w=majority"}
}
else
{
    module.exports = {mongoURI: "mongodb://127.0.0.1:27017/saveHighscore"}
}