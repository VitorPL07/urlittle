import 'reflect-metadata';
import { app } from './app';
import orm from './ormconfig';

orm.initialize()
    .then(() => {
        app.listen(3333, () => {
            console.log('Server is running...');
        })
    })
    .catch((error: any) => {
        console.log(error.message);
    })

