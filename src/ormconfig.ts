import path from "path";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'mechanic',
    entities: [path.resolve(__dirname, 'database', 'entities', '*.ts')],
    migrations: [path.resolve(__dirname, 'database', 'migrations', '*.ts')]
});
