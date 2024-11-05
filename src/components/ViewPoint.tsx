import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

const ViewPoint = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/header" element={<Header />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default ViewPoint;
