"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerOptions = new swagger_1.DocumentBuilder()
    .setTitle('Your Application API')
    .setDescription('API documentation for your application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
//# sourceMappingURL=swagger.js.map