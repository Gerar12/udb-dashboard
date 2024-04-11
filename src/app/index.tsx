import { BrowserRouter } from "react-router-dom";
import { Router } from "@/router";
import LayoutRoot from "./Layout";
import { Suspense } from "react";
import SkeletonUI from "./skeleton";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <LayoutRoot>
          <Suspense fallback={<SkeletonUI />}>
            <Router />
          </Suspense>
        </LayoutRoot>
      </BrowserRouter>
    </>
  );
};

export { App };
