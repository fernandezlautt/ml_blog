import Link from "next/link";
import path from "path";
import fs from "fs";

// Function to recursively get routes from the `app` directory
const getRoutes = (dir: string, basePath: string = "") => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: Record<string, any> = {};

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      routes[entry.name] = {
        title: entry.name,
        path: `${basePath}/${entry.name}`,
        children: getRoutes(
          path.join(dir, entry.name),
          `${basePath}/${entry.name}`,
        ),
      };
    }
  });

  return routes;
};

// Component to render the route tree
const renderTree = (routes: Record<string, any>) => {
  return (
    <ul className="space-y-1 ">
      {Object.entries(routes).map(([key, route]) => (
        <div key={key}>
          <Link href={`blog/${route.path}`} className="p-0 m-0">
            <span className="hover:underline font-bold m-0 p-0">
              {`| ${route.title
                .split("-")
                .map(
                  (word: string) =>
                    word.charAt(0).toUpperCase() + word.slice(1),
                )
                .join(" ")}`}
            </span>
          </Link>
          {route.children &&
            Object.keys(route.children).length > 0 &&
            renderTree(route.children)}
        </div>
      ))}
    </ul>
  );
};

export default function RouteTree() {
  const appDir = path.join(process.cwd(), "src/app/blog"); // Path to the app directory
  const routes = getRoutes(appDir);

  return (
    <nav className="">
      <div className="text-3xl font-semibold">Blog entries</div>
      <div>Click on a blog entry to view it!</div>
      {renderTree(routes)}
    </nav>
  );
}
