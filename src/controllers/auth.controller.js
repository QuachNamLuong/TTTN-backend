import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
import { generateToken } from '../utils/jwt.util.js';
import bcrypt from 'bcryptjs';

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Incorrect password' });

  const token = generateToken({ id: user.id, email: user.email });
  res.json({ token });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(400).json({ error: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashed }
  });

  const token = generateToken({ id: user.id, email: user.email });
  res.status(201).json({ token });
};

export default {
  login,
  register
};