"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
type WatchlistItem = {
  _id: string;
  symbol: string;
  company: string;
};

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);

  useEffect(() => {
    fetch("/api/watchlist")
      .then((res) => res.json())
      .then(setWatchlist);
  }, []);

  // 🗑️ Remove handler
  const removeFromWatchlist = async (symbol: string) => {
    // Optimistic UI (remove instantly)
    setWatchlist((prev) =>
      prev.filter((item) => item.symbol !== symbol)
    );

    // API call
    await fetch("/api/watchlist", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symbol }),
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p className="text-gray-500">No stocks added yet.</p>
      ) : (
        <div className="space-y-3">
          {watchlist.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-3 border rounded-md"
            >
              <div>
                <p className="font-medium">{item.symbol}</p>
                <p className="text-sm text-gray-500">{item.company}</p>
              </div>

              
                          <Button
                variant="destructive"
                size="sm"
                onClick={() => removeFromWatchlist(item.symbol)}
              >
                Remove
              </Button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
