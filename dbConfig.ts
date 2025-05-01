import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';


export const pgConfig : PostgresConnectionOptions = {
  url : "postgresql://neondb_owner:npg_b8UJ9GyqdsNM@ep-cold-rain-abvl7knx-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require",
  type : "postgres",
  port: 3306,
  entities : [__dirname+'/**/*.entity{.ts,.js}'],
  synchronize : true,
}


// synchronize : true => put it at false in production