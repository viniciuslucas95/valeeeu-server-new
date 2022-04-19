import { config } from "dotenv"
import { DataSource } from "typeorm"

config()

export const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ['dist/**/entities/*.entity{.ts,.js}'],
    migrations: ['src/db/migrations/*{.ts,.js}']
})