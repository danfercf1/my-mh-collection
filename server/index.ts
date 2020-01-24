import mongoose from 'mongoose';
import './common/env';
import Server from './common/server';
import routes from './routes';

const port = parseInt(process.env.PORT);
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
};
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose
  .connect(url, options)
  .then(function() {
    console.log('MongoDB is connected');
  })
  .catch(function(err) {
    console.log(err);
  });

export default new Server().router(routes).listen(port);
