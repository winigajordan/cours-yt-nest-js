import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

//
// export const pgConfig : PostgresConnectionOptions = {
//   url : "postgresql://neondb_owner:npg_b8UJ9GyqdsNM@ep-cold-rain-abvl7knx-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require",
//   type : "postgres",
//   port: 3306,
//   entities : [__dirname+'/**/*.entity{.ts,.js}'],
//   synchronize : true,
// }
//



export const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',            // Adresse locale
  port: 5432,                   // Port PostgreSQL par défaut (pas 3306, qui est celui de MySQL)
  username: 'postgres',         // Nom d'utilisateur PostgreSQL (modifiable si besoin)
  password: 'Azerty778179211@', // Remplace avec ton vrai mot de passe
  database: 'nest_js',   // Le nom de la base que tu veux utiliser
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,            // Auto sync le schéma (utilise avec prudence en production)
};

// synchronize : true => put it at false in production