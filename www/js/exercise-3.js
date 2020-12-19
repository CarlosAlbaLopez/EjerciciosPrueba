/**
 * #############################
 * ##  E J E R C I C I O   3  ##
 * #############################
 *
 * Utiliza los métodos map, filter o reduce para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

'use strict';

const persons = [
  {
    name: 'Berto',
    country: 'ES',
    age: 44,
    car: 'LU9286V',
    pet: {
      name: 'Moon',
      type: 'perro',
    },
  },
  {
    name: 'Jess',
    country: 'UK',
    age: 29,
    car: 'GB2913U',
    pet: {
      name: 'Kit',
      type: 'gato',
    },
  },
  {
    name: 'Tom',
    country: 'UK',
    age: 36,
    car: 'GB8722N',
    pet: {
      name: 'Rex',
      type: 'perro',
    },
  },
  {
    name: 'Alexandre',
    country: 'FR',
    age: 19,
    car: 'FT5386P',
    pet: {
      name: 'Aron',
      type: 'gato',
    },
  },
  {
    name: 'Rebeca',
    country: 'ES',
    age: 32,
    car: 'MD4578T',
    pet: {
      name: 'Carbón',
      type: 'gato',
    },
  },
  {
    name: 'Stefano',
    country: 'IT',
    age: 52,
    car: 'LP6572I',
    pet: {
      name: 'Bimbo',
      type: 'perro',
    },
  },
  {
    name: 'Colette',
    country: 'FR',
    age: 22,
    car: 'FU8929P',
    pet: {
      name: 'Amadeu',
      type: 'gato',
    },
  },
];

const cars = [
  {
    id: 'LU9286V',
    brand: 'Citroen',
    model: 'Xsara',
  },
  {
    id: 'GB2913U',
    brand: 'Fiat',
    model: 'Punto',
  },
  {
    id: 'GB8722N',
    brand: 'Opel',
    model: 'Astra',
  },
  {
    id: 'FT5386P',
    brand: 'Ford',
    model: 'Focus',
  },
  {
    id: 'MD4578T',
    brand: 'Opel',
    model: 'Corsa',
  },
  {
    id: 'LP6572I',
    brand: 'Ford',
    model: 'Fiesta',
  },
  {
    id: 'FU8929P',
    brand: 'Fiat',
    model: 'Uno',
  },
];

// 1
function getTotalAge() {
  const result = persons.reduce((accumulator, person) => {
    return accumulator + person.age;
  }, 0);

  console.log(result);
}

getTotalAge();

// 2
function getFrenchTotalAge() {
  const francesas = persons
    .filter((person) => {
      return person.country === 'FR';
    })
    .reduce((accumulator, person) => {
      return accumulator + person.age;
    }, 0);

  console.log(francesas);
}

getFrenchTotalAge();

// 3
function getPetsNames() {
  const result = persons.map((person) => {
    return person.pet.name;
  });

  console.log(result);
}

getPetsNames();

// 4
function getPersonsWithCat() {
  const result = persons.filter((person) => {
    return person.pet.type === 'gato';
  });

  console.log(result);
}

getPersonsWithCat();

// 5
function getSpanishCars() {
  const spanishWithCars = persons
    .filter((person) => {
      return person.country === 'ES';
    })
    .map((person) => {
      const personCopy = { ...person };
      const car = cars.find((car) => {
        return person.car === car.id;
      });
      personCopy.carData = car;
      return personCopy;
    });

  const result = [];

  for (let i = 0; i < spanishWithCars.length; i++) {
    result.push(spanishWithCars[i].carData);
  }

  console.log(result);
}

getSpanishCars();

// 6
function getPersonsWithFord() {
  const result = persons
    .map((person) => {
      const personCopy = { ...person };
      const car = cars.find((car) => {
        return person.car === car.id;
      });
      personCopy.car = car;
      return personCopy;
    })
    .filter((person) => {
      return person.car.brand === 'Ford';
    });

  console.log(result);
}

getPersonsWithFord();

// 7
function getPersonsWithCarData() {
  const result = persons.map((person) => {
    const personCopy = { ...person };
    const car = cars.find((car) => {
      return person.car === car.id;
    });
    personCopy.car = car;
    return personCopy;
  });

  console.log(result);
}

getPersonsWithCarData();
