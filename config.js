exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
    'mongodb: //admin:admin@ds115671.mlab.com:15671/node-blog-app-mongoose-tests';
exports.PORT = process.env.PORT || 8080;
