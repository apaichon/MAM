const { BusinessObjects } = require('../PuppyFramework');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class AccountBiz extends BusinessObjects.BizBase {
    constructor(config) {
        config.collectionName = 'account';
        config.dbName = 'thaistringers';
        super(config);
    }

    async Add(request) {
        const hash = await bcrypt.hash(request.data.password, saltRounds);
        request.data.password = hash;

        let result = await this.Execute('Insert', request);
        return result;
    }

    async ChangePassword(dataWithCondition) {
        await this.DataObject.Open();

        if (dataWithCondition.data.oldPassword && dataWithCondition.data.newPassword) {
            const account = (await this.DataObject['FindOne']({ filter: dataWithCondition.condition })).shift();
            const match = await bcrypt.compare(dataWithCondition.data.oldPassword, account.password);

            if (match) {
                const hash = await bcrypt.hash(dataWithCondition.data.newPassword, saltRounds);
                dataWithCondition.data['password'] = hash;
            } else {
                throw 'Current password is not match!';
            }
        }
        delete dataWithCondition.data.oldPassword;
        delete dataWithCondition.data.newPassword;

        let result = await this.DataObject['Update'](dataWithCondition);

        await this.DataObject.Close();
        return result;
    }
}

module.exports = AccountBiz;