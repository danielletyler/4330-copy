import React from "react";
import { Container, ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Add from "./components/Add/Add";
import FullPost from "./components/FullPost/FullPost";
import Profile from "./components/Profile/profile";
import Wishlist from "./components/Wishlist/wishlist";
import theme from "./theme";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container maxidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/add" exact element={<Add />} />
            <Route path="/fullpost" exact element={<FullPost />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/wishlist" exact element={<Wishlist />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
