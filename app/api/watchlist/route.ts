import { NextResponse } from "next/server";
import { connectToDatabase } from "@/database/mongoose";
import { Watchlist } from "@/database/models/watchlist.model";

// GET – check watchlist / list


// GET – check watchlist / list
export async function GET(req: Request) {
  await connectToDatabase();

  const userId = "demo-user"; // replace with auth later
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get("symbol");

  // If symbol is provided → check existence
  if (symbol) {
    const exists = await Watchlist.findOne({
      userId,
      symbol: symbol.toUpperCase(),
    });

    return NextResponse.json({ isInWatchlist: !!exists });
  }

  // Else → return full watchlist
  const items = await Watchlist.find({ userId }).sort({ addedAt: -1 });
  return NextResponse.json(items);
}

// POST – add to watchlist
export async function POST(req: Request) {
  await connectToDatabase();

  const { symbol, company } = await req.json();
  const userId = "demo-user";

  try {
    const item = await Watchlist.create({
      userId,
      symbol,
      company,
    });

    return NextResponse.json(item, { status: 201 });
  } catch (err: any) {
    // duplicate key error
    if (err.code === 11000) {
      return NextResponse.json(
        { message: "Stock already in watchlist" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "Failed to add stock" },
      { status: 500 }
    );
  }
}

// DELETE – remove from watchlist
export async function DELETE(req: Request) {
  await connectToDatabase();

  const { symbol } = await req.json();
  const userId = "demo-user";

  await Watchlist.deleteOne({
    userId,
    symbol: symbol.toUpperCase(),
  });

  return NextResponse.json({ success: true });
}
