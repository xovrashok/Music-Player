import React, { useEffect, useState } from "react";
import { Container, Img, ButtonPosition } from "./styles";
import SidebarButton from "./sidebarButton";
import {
  FaGripfire,
  FaPlay,
  FaSignOutAlt,
  MdFavorite,
  MdLibraryAdd,
  MdSpaceDashboard,
} from "react-icons/all";
import apiClient from "../../spotify";

const Sidebar = () => {
  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.image[0].url);
    });
  });
  return (
    <Container>
      <Img src={image} />
      <ButtonPosition>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<MdLibraryAdd />} />
      </ButtonPosition>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </Container>
  );
};

export default Sidebar;
