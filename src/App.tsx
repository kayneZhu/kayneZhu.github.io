import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "@/components/layout/Layout";
import { LoadingState } from "@/components/states";
import { siteConfig } from "@/config/site";
import { Home } from "@/pages/Home";

// Blog routes are code-split so the homepage stays lean.
const Blog = lazy(() => import("@/pages/Blog").then((m) => ({ default: m.Blog })));
const Post = lazy(() => import("@/pages/Post").then((m) => ({ default: m.Post })));
const NotFound = lazy(() =>
  import("@/pages/NotFound").then((m) => ({ default: m.NotFound })),
);

// Vite's BASE_URL is like "/" or "/repo/"; React Router wants "/" or "/repo".
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const withSuspense = (node: React.ReactNode) => (
  <Suspense fallback={<div className="container"><LoadingState /></div>}>{node}</Suspense>
);

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        ...(siteConfig.features.blog
          ? [
              { path: "blog", element: withSuspense(<Blog />) },
              { path: "blog/:slug", element: withSuspense(<Post />) },
            ]
          : []),
        { path: "*", element: withSuspense(<NotFound />) },
      ],
    },
  ],
  { basename },
);

export function App() {
  return <RouterProvider router={router} />;
}
