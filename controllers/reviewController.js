import asyncHandler from '../utils/asyncHandler.js';
import reviewService from '../services/reviewService.js';
const getAll = asyncHandler(async (req, res) => {
  const data = await reviewService.getAll();
  res.json({ success: true, count: data.length, data });
});
const get = asyncHandler(async (req, res) => {
  const data = await reviewService.get(req.params.id);
  res.json({ success: true, data });
});
const create = asyncHandler(async (req, res) => {
  const data = await reviewService.create(req.body);
  res.status(201).json({ success: true, data });
});
const update = asyncHandler(async (req, res) => {
  const data = await reviewService.update(req.params.id, req.body);
  res.json({ success: true, data });
});
const deleteItem = asyncHandler(async (req, res) => {
  await reviewService.delete(req.params.id);
  res.status(204).json({ success: true });
});
export default { getAll, get, create, update, delete: deleteItem };