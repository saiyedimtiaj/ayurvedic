import dbConnect from "@/lib/mongodb";
import order from "@/model/order";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;
    const { status } = await req.json();

    if (!["Pending", "Delivered", "Cancelled"].includes(status)) {
      return NextResponse.json({ message: "Invalid status" }, { status: 400 });
    }

    const orders = await order.findById(id);
    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    orders.status = status;
    await orders.save();

    return NextResponse.json(
      { message: "Order status updated", order },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
