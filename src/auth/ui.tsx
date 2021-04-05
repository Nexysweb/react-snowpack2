import React from "react";
import { Redirect } from "react-router-dom";

export const getUrl = (): Promise<string> =>
  fetch("/api/auth/url").then(async (x) => {
    const t = await x.json();
    return t.url;
  });

interface Redirect {
  user_id: string;
  expires: number;
}

export const getRedirect = (code: string): Promise<Redirect> =>
  fetch("/api/auth/redirect?code=" + code).then(async (x) => {
    const t: Redirect = await x.json();
    window.localStorage.setItem("user_id", t.user_id);
    return t;
  });

export const ConnectUrl = ({ data }: { data: string }) => (
  <p>
    <a href={data}>Connect</a>
  </p>
);
