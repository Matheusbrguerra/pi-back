export default {
    type: 'postgres',
    host: process.env.TYPEORM_CONNECTION,
    port: process.env.TYPEORM_PORT,
    database: process.env.TYPEORM_DATABASE,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    autoLoadEntities: process.env.TYPEORM_ENTITIES,
    synchronize: process.env.TYPEORM_SYNCHRONIZE
}