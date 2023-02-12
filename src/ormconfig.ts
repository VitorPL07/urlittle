import path from "path";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'babar.db.elephantsql.com',
    port: 5432,
    username: 'umosgyrp',
    password: 'vFkkXOjWdIiTc-gFK6EFFU3cTdnnHN3v',
    database: 'umosgyrp',
    entities: [path.resolve(__dirname, 'database', 'entities', '*.ts')],
    migrations: [path.resolve(__dirname, 'database', 'migrations', '*.ts')]
});