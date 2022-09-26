import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Library from "../library/library";
import Feed from "../feed/feed";
import Trending from "../trending/trending";
import Player from "../player/player";
import Favorites from "../favorites/favorites";
import { Main } from "./styles";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
  return (
    <Router>
      <Main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Main>
    </Router>
  );
};

export default Home;
