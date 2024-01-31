const app = require('./index')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')

const swaggerDefinition = {
    info: {
        title: 'Like API',
        version: '1.0.0',
        description: 'API Docs for Likes'
    },
    host: 'localhost:3000',
    basePath: '/',
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'Bearer',
            in: 'header'
        }
    }
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJsDoc(options)
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, ()=> {
    console.info('Running on port 3000')
  })

