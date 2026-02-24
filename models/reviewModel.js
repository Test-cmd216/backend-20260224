import Joi from 'joi';
export const reviewSchema = Joi.object({
  text: Joi.string().min(2).max(500).required(),
  rating: Joi.number().min(1).max(5).required()
});