import React from "react";
import { LoginPage, Img, A, ButtonLogIn } from "./style";
import {loginEndpoint} from "../../spotify";

const Login = () => {
  return (
    <LoginPage>
      <Img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <A href={loginEndpoint}>
        <ButtonLogIn>Log In</ButtonLogIn>
      </A>
    </LoginPage>
  );
};

export default Login;
