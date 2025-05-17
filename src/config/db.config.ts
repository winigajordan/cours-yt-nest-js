import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { registerAs } from '@nestjs/config';


export default  registerAs("dbconfig.dev", () : PostgresConnectionOptions => ({
    url : process.env.url,
    type : "postgres",
    port: process.env.db_port ? +process.env.db_port : 3306,  // fallback par défaut
      entities: [__dirname + '/../**/*.entity.{ts,js}'],
      synchronize : true,
  }

))



