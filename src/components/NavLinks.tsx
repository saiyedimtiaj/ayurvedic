import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdDashboard } from "react-icons/md";

const Navlinks = ({ onLinkClick }: { onLinkClick: () => void }) => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50"
      : "text-gray-700 dark:text-gray-400";

  return (
    <nav className="flex  h-[70vh] md:h-[calc(100vh-95px)] flex-col justify-between">
      <div className="space-y-1">
        <Link
          href="/admin"
          className={`flex items-center gap-2 rounded-md text-white px-3 py-2 text-sm font-medium ${isActive(
            "/admin"
          )} hover:bg-gray-700 hover:text-gray-50`}
          prefetch={false}
          onClick={onLinkClick}
        >
          <MdDashboard className="h-5 w-5 text-white" />
          <span className="text-white"> Dashboard</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navlinks;
