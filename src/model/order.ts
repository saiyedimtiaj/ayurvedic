import mongoose, { Schema } from "mongoose";

export interface IOrder {
  name: string;
  mobile: string;
  address: string;
  productId: number;
  productName: string;
  subtotal: number;
  shipping: number;
  total: number;
  createdAt: Date;
  status: string;
}

const OrderSchema = new Schema<IOrder>(
  {
    name: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    status: { type: String, default: "Pending" },
    productId: { type: Number, required: true },
    productName: { type: String, required: true },
    subtotal: { type: Number, required: true },
    shipping: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);
