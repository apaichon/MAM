const Faker = require('faker');

class Random {
    static GenUserCards(total) {
        let list = [];
        for (let i = 0; i<total; i++) {
            let item = Faker.Helpers.userCard();
            list.push(item);
        }
        return list;
    }
}

module.exports = Random;