import { BrowserRouter } from "react-router-dom";
import { Router } from "@/router";
import LayoutRoot from "./Layout";
import { Suspense } from "react";
import SkeletonUI from "./skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LayoutRoot>
          <Suspense fallback={<SkeletonUI />}>
            <Toaster />
            <Router />
          </Suspense>
        </LayoutRoot>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export { App };
