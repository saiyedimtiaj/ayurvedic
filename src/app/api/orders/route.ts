import dbConnect from "@/lib/mongodb";
import order from "@/model/order";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    const {
      name,
      mobile,
      address,
      productId,
      productName,
      subtotal,
      shipping,
      total,
    } = body;

    if (
      !name ||
      !mobile ||
      !address ||
      !productId ||
      !productName ||
      !subtotal ||
      !shipping ||
      !total
    ) {
      return NextResponse.json(
        { error: "সব ফিল্ড পূরণ করা বাধ্যতামূলক।" },
        { status: 400 }
      );
    }

    console.log(body);

    const newOrder = await order.create(body);

    return NextResponse.json(
      { message: "অর্ডার সফলভাবে সম্পন্ন হয়েছে।", order: newOrder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error placing order:", error);
    return NextResponse.json(
      {
        error:
          "অর্ডার প্রদান করতে ব্যর্থ হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    // Fetch all orders from the database
    const orders = await order.find().sort({ createdAt: "desc" });

    if (orders.length === 0) {
      return NextResponse.json(
        { message: "কোনো অর্ডার পাওয়া যায়নি।" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "অর্ডারগুলো সফলভাবে পাওয়া গেছে।", orders },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      {
        error: "অর্ডারগুলি পাওয়া যাচ্ছে না। দয়া করে পরে আবার চেষ্টা করুন।",
      },
      { status: 500 }
    );
  }
}
