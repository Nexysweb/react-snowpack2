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

export const getRedirect = async (code: string): Promise<Redirect> => {
  const r = await fetch("/api/auth/redirect?code=" + code);
  const t: Redirect = await r.json();
  window.localStorage.setItem("user_id", t.user_id);
  const c = window.localStorage.getItem("user_id");
  console.log(c);
  return t;
};

export const ConnectUrl = ({ data }: { data: string }) => (
  <p>
    <a href={data}>Connect</a>
  </p>
);
