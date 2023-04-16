import mongoose from "mongoose";
const dataBaseURL = 'mongodb+srv://vaibhav:vaibhav@cluster0.20bj3d1.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(dataBaseURL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`successfully connected`);
  })
  .catch((e) => {
    console.log(e.message);
  });
export default mongoose