"use client";

import React, { useMemo, useState } from "react";

/* =========================
   Props
========================= */
type WatchlistButtonProps = {
  symbol: string;
  company: string;
  isInWatchlist?: boolean;
  showTrashIcon?: boolean;
  type?: "button" | "icon";
  onWatchlistChange?: (symbol: string, added: boolean) => void;
};

/* =========================
   Component
========================= */
const WatchlistButton = ({
  symbol,
  company,
  isInWatchlist = false,
  showTrashIcon = false,
  type = "button",
  onWatchlistChange,
}: WatchlistButtonProps) => {
  const [added, setAdded] = useState<boolean>(isInWatchlist);
  const [loading, setLoading] = useState(false);

  /* =========================
     Label
  ========================= */
  const label = useMemo(() => {
    if (type === "icon") return "";
    return added ? "Remove from Watchlist" : "Add to Watchlist";
  }, [added, type]);

  /* =========================
     Click Handler
  ========================= */
  const handleClick = async () => {
    if (loading) return;

    const next = !added;
    setLoading(true);

    try {
      if (next) {
        // ➕ ADD
        await fetch("/api/watchlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            symbol: symbol.toUpperCase(),
            company,
          }),
        });
      } else {
        // ❌ REMOVE
        await fetch("/api/watchlist", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            symbol: symbol.toUpperCase(),
          }),
        });
      }

      setAdded(next);
      onWatchlistChange?.(symbol, next);
    } catch (error) {
      console.error("Watchlist update failed:", error);
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     Icon Button
  ========================= */
  if (type === "icon") {
    return (
      <button
        title={
          added
            ? `Remove ${symbol} from watchlist`
            : `Add ${symbol} to watchlist`
        }
        aria-label={
          added
            ? `Remove ${symbol} from watchlist`
            : `Add ${symbol} to watchlist`
        }
        disabled={loading}
        className={`watchlist-icon-btn ${
          added ? "watchlist-icon-added" : ""
        }`}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={added ? "#FACC15" : "none"}
          stroke="#FACC15"
          strokeWidth="1.5"
          className="watchlist-star"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557L3.04 10.385a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z"
          />
        </svg>
      </button>
    );
  }

  /* =========================
     Normal Button
  ========================= */
  return (
    <button
      disabled={loading}
      onClick={handleClick}
      className={`watchlist-btn ${
        added ? "watchlist-remove" : ""
      }`}
    >
      {showTrashIcon && added && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-7 4v6m4-6v6m4-6v6"
          />
        </svg>
      )}
      <span>{label}</span>
    </button>
  );
};

export default WatchlistButton;
