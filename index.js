const app = require('./src/app');
const refinement = require('./src/refinement');

refinement(app);

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('Teacher Vacancies Slackbot app is running!');
})();
