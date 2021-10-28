const express = require('express'); // express를 쓴다
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const { sequelize } = require('./models');
const cors = require('cors');

const port = process.env.EXPRESS_PORT;

app.use(cors({ origin: true, credentials: true })); //cors option
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Router = require('./routers');
<<<<<<< HEAD
const UserRouter = require('./routers/user');
app.use('/', [Router]);
app.use('/api', [UserRouter]);
=======
app.use([Router]);
>>>>>>> c0d0d21752ffb9467630a6d33d0336401ed33104

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
