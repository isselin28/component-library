import faker from "faker";

const ListArray = [...Array(8)].map(() => {
  return {
    name: faker.vehicle.vehicle(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
  };
});

export default ListArray;
