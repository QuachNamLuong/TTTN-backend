import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export async function getAllUsers(req, res) {
  const users = await prisma.user.findMany();
  res.json(users);
}

export async function getUserById(req, res) {
  const id = parseInt(req.params.id);
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
}

export async function createUser(req, res) {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({ data: { name, email } });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Email must be unique or invalid data' });
  }
}

export async function updateUser(req, res) {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { name, email },
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Could not update user' });
  }
}

export async function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  try {
    await prisma.user.delete({ where: { id } });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
}
