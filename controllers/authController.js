import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';


const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send('All input is required');
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    return res.status(409).send('User Already Exists. Please Login');
  }
  const user = await User.create({ email, password });

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send('All input is required');
  }

  const user = await User.findOne({ email }).select('+password');
  const isPasswordCorrect = await user.comparePassword(password);
  if (!email || !isPasswordCorrect) {
    return res.status(400).send('Invalid Credentials');
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

export { register, login };
