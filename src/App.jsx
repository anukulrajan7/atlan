import React from "react";
import Route from "./router/routes";
import { Box } from "@mui/material";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Route></Route>
      <Footer />
    </Box>
  );
}

export default App;