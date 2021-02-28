import app from '../main';

app.listen(process.env.PORT || 3001, () => {
  console.log('servidor na porta 3001');
});
