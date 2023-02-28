const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        const testRestaurant = await Restaurant.create(seedRestaurant)
        expect(testRestaurant.name).toEqual('AppleBees')
    });

    test('can create a Menu', async () => {
        const testMenu = await Menu.create(seedMenu)
        expect(testMenu.title).toEqual('Breakfast')
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const findRestaurants = await Restaurant.findAll({
            where: {
                name: 'AppleBees'
            }
        });
        expect(findRestaurants.name).toEqual('AppleBees')
    });

    test('can find Menus', async () => {
        // TODO - write test
        const findMenus = await Menu.findAll({
            where: {
                title: 'Breakfast'
            }
        });
        expect(findMenus.title).toEqual('Breakfast')
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        await testRestaurant.destroy()
        expect(testRestaurant).toEqual(null)
    });
})