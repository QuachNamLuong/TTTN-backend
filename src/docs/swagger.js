import swaggerJsdoc from 'swagger-jsdoc';
import { serverConfig } from '../config/server.config.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'Express API with Swagger',
    },
    servers: [
      {
        url: `http://localhost:${serverConfig.port}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // Optional, but useful
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/router/*.js', './src/controllers/*.js', './src/docs/*.js'], // adjust paths
};

export const swaggerSpec = swaggerJsdoc(options);