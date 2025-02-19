import { lazy, ReactNode, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import PATH from "./path";

//TODO - separate folders
const LoadingFallback = () => <div>Loading</div>;

//TODO - separate folders
const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
};

const HOME_LAZY = lazy(() => import("../pages/home/Home"));
const QUIZ_LAZY = lazy(() => import("../pages/quiz/Quiz"));
const RESULTS_LAZY = lazy(() => import("../pages/results/Results"));

const Router: RouteObject[] = [
  {
    path: PATH.HOME,
    element: <Layout />,
    children: [
      {
        // Home page
        index: true,
        element: <HOME_LAZY />,
      },
      {
        // Quiz page
        path: PATH.QUIZ,
        element: (
          <SuspenseWrapper>
            <QUIZ_LAZY />
          </SuspenseWrapper>
        ),
      },
      {
        // Results page
        path: PATH.RESULTS,
        element: <RESULTS_LAZY />,
      },
    ],
  },
];

export default Router;
