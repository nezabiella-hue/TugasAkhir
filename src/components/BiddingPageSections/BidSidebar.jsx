import { useState } from "react";

export default function BidSidebar() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="text-center text-sm font-extrabold text-neutral-900">
        Ketik Harga Penawaran
      </div>

      <div className="mt-4 rounded-full border border-neutral-200 bg-white px-4 py-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-extrabold text-neutral-500">RP</span>
          <input
            type="text"
            placeholder="000,000,000"
            className="w-full bg-transparent outline-none placeholder:text-neutral-400"
          />
        </div>
      </div>

      <label className="mt-4 flex cursor-pointer items-start gap-3 text-xs text-neutral-600">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-orange-500"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <span>
          Saya menyetujui{" "}
          <span className="text-orange-500">
            syarat ketentuan Projects.co.id
          </span>{" "}
          dan bersedia melakukan transaksi melalui sistem escrow platform
        </span>
      </label>

      <button
        disabled={!agreed}
        className="mt-5 w-full rounded-full bg-orange-400 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Bid
      </button>
    </div>
  );
}
