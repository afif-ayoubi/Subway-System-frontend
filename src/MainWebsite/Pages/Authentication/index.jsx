import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "./style";
import { sendRequest } from "../../../core/tools/request";
import { requestMethods } from "../../../core/enums/requestMethods";

const Authentication = () => {
  const navigate = useNavigate();

  const [signIn, toggle] = React.useState(true);
  const [Credential, setCredential] = useState({});
  return (
    <Components.Wrapper>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input 
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setCredential({ ...Credential, name: e.target.value });
              }}
            />
            <Components.Input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setCredential({ ...Credential, email: e.target.value });
              }}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setCredential({ ...Credential, password: e.target.value });
              }}
            />
            <Components.Button
              onClick={async (e) => {
                e.preventDefault();
                const formatedData = {
                  ...Credential,
                };
                const res = await sendRequest(
                  requestMethods.POST,
                  "/register",
                  formatedData
                );
                if (res.data.status === "success") {
                  localStorage.setItem("token", res.data.token);

                  // navigate("/");
                }
              }}
            >
              Sign Up
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setCredential({ ...Credential, email: e.target.value })
              }
            />
            <Components.Input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setCredential({ ...Credential, password: e.target.value })
              }
            />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button
              onClick={async (e) => {
                e.preventDefault();
                const resp = await sendRequest(
                  requestMethods.POST,
                  "/login",
                  Credential
                );
                if (resp.data.status === "success") {
                  localStorage.setItem("token", resp.data.token);
                }
              }}  
            >
              Sigin In
            </Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Components.Wrapper>
  );
};

export default Authentication;
