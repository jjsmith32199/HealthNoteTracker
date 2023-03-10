const sequelize = require('../config/connection');
const { User, Symptom } = require('../models');

const userData = require('./userData.json');
const symptomData = require('./symptomData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const symptom of symptomData) {
    await Symptom.create({
      ...symptom,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
