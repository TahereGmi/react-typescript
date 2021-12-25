import React , { Suspense, lazy } from "react";
import PageLoading from "components/PageLoading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// use direct import to include the page in the main bundle
import Home from "pages/home";

// use lazy imports to put these pages in separate bundles
const NotFoundPage = lazy(() => import("components/NotFoundPage"));

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path="*">
          <Suspense fallback={<PageLoading />}>
            <NotFoundPage />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
