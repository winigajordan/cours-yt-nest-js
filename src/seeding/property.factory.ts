import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Property } from '../entities/property.entity'; // ⚠ Utiliser l'instance par défaut, pas le type Faker

export const PropertyFactory = setSeederFactory(Property, () => {
  const property = new Property();

  property.name = faker.location.street()
  property.price = Math.round(+faker.commerce.price({ min: 10000, max: 50000 }));
  property.description = faker.lorem.sentence()

  return property;
});
