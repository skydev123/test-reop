import { Container } from "@mui/material";
import { FileBrowser } from "./Pages/FileBrowser";
import { BasicBreadcrumbs } from "./components/BasicBreadcrumbs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NoMatch, RootApp } from "./Allpages";

export const App = () => {
  return (
    <Container>
      <Router>
        <BasicBreadcrumbs />
        <Routes>
          <Route path="/" element={<FileBrowser />} />
          <Route path="gitIgnore" element={<RootApp />} />
          <Route path="index.html" element={<RootApp />} />
          <Route path="package.json" element={<RootApp />} />
          <Route path="package-lock.json" element={<RootApp />} />
          <Route path="src" element={<RootApp />}>
            <Route path=":slug" element={<RootApp />}>
              <Route path=":resources" element={<RootApp />}>
                <Route path=":topic" element={<RootApp />} />
              </Route>
            </Route>
          </Route>
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </Router>
    </Container>
  );
};
