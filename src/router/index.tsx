import { Routes, Route } from "react-router-dom";
import { routes } from "@/pages/root";
const Router = () => {
  return (
    <>
      <Routes>
        {routes.map((page, index) => (
          <Route key={index} path={page.path} element={page.element} />
        ))}
        {}
      </Routes>
    </>
  );
};

export { Router };
