import Link from "next/link";

export default function Notification() {
  return (
    <div className="p-5 bg-amber-50">
      <Link href="/complex-dashboard/archived">
        <span>Archived</span>
      </Link>
    </div>
  );
}
