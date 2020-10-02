const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://ups:ups2020@cluster0.utkbm.gcp.mongodb.net/utups?retryWrites=true&w=majority',
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',

    filesRoute: process.env.FILES_ROUTES || 'files',

}

module.exports = config 

