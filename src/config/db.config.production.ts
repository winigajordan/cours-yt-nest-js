import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';


export default () : PostgresConnectionOptions => ({
    url : process.env.url,
    type : "postgres",
    port: process.env.db_port ? +process.env.db_port : 3306,  // fallback par défaut
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize : false,
  }

)



