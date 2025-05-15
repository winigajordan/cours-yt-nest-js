import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { pgConfig } from '../../dbConfig';
import { PropertyFactory } from './property.factory';
import { UserFactory } from './user.factory';
import { PropertyFeatureFactory } from './propertyFeature.factory';
import { MainSeeder } from './main.seeder';
import * as process from 'node:process';

const options : DataSourceOptions & SeederOptions = {
  ...pgConfig,
  factories:[PropertyFactory, UserFactory, PropertyFeatureFactory],
  seeds : [MainSeeder]
}


const dataSource = new DataSource(options)

dataSource.initialize().then(
  async ()=>{
    await dataSource.synchronize(true)
    await runSeeders(dataSource)
    process.exit()
  }
)
