const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'LaGuacaApi',
            version: '1.0.0',
            description: 'API for managin beer',
            contact: {
                name: 'Developer'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'local server'
                }
            ]
        }
    },
    apis: ['./swagger/*.yaml']
};

const specs  = swaggerJsdoc(options);

module.exports = specs;