"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname(); // Get current path
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-lg text-white  py-2" aria-label="breadcrumb">
      <div className="flex items-center m-0 p-0">
        {segments.length === 0 ? (
          <li className="text-gray-700">Home</li>
        ) : (
          segments.map((segment, index) => {
            const path = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;

            return (
              <li key={path} className="flex  items-center ">
                {!isLast ? (
                  <Link href={path} className="m-0">
                    <span className="hover:text-gray-800 transition capitalize">
                      {segment.replace(/-/g, " ")}
                    </span>
                  </Link>
                ) : (
                  <span className="text-gray-700 capitalize">
                    {segment.replace(/-/g, " ")}
                  </span>
                )}
                {!isLast && <span className="px-2 text-gray-400">/</span>}
              </li>
            );
          })
        )}
      </div>
    </nav>
  );
}
