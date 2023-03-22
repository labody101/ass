import Product from "../models/product";
import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
});
export const create = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        
        const product = await Product.create(req.body);
        return res.status(201).json({
            message: 'Product created successfully',
            product
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}
export const getAll = async (req, res) => {
    try {

        const product = await Product.find();
        return res.status(201).json(
            product);
    } catch (error) {
        return res.status(400).json({
            message: error
        });
    }
}
export const get = async (req, res) => {
    try {

        const product = await Product.findById(req.params.id);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(400).json({
            message: error
        });
    }
}
export const update = async (req, res) => {
    try {
        const { erroe } = productSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        return res.status(201).json({
            message: 'Product updated successfully',
            product
        });
    } catch (error) {
        return res.status(400).json({
            message: error
        });
    }
}
export const remove = async (req, res) => {
    try {

        const product = await Product.findOneAndDelete({ _id: req.params.id });
        return res.status(201).json({
            message: 'Product deleted successfully',
            product
        });
    } catch (error) {
        return res.status(400).json({
            message: error
        });
    }
}