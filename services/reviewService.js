import { v4 as uuidv4 } from 'uuid';
import AppError from '../utils/AppError.js';
const reviews = [];
const getAll = async () => reviews;
const getById = async (id) => {
  const review = reviews.find(r => r.id === id);
  if (!review) throw new AppError('Not found', 404, 'NOT_FOUND');
  return review;
};
const create = async (body) => {
  const review = { id: uuidv4(), ...body, createdAt: new Date().toISOString() };
  reviews.push(review);
  return review;
};
export default { getAll, getById, create };