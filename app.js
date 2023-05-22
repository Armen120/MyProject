import { faker} from '@faker-js/faker';
import lodash from 'lodash';

const array = [];

const name  = faker.person.firstName;
const email  = faker.internet.email;
const phone  = faker.phone.number;

for(let i = 0; i < 10; i++){
    array.push({
        name :name(),
        email:email(),
        phone:phone()
    });
}

console.log(array);

const sortArray =  lodash.sortBy(array , [(arr) => arr.name]);

console.log('Sorted by name \n',sortArray);