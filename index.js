import app from './src/app';
import refinement from './src/refinement';

refinement(app);

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('Ticket refinement app is running!');
})();
