import React from "react";
import { Route } from "react-router-dom";

function LayoutHome(props: any) {
  return <div>{props.children}</div>;
}

export default function HomeTemplate(props: any) {
  const { path, component } = props;
  return (
    <LayoutHome>
      <Route path={path} element={component} />
    </LayoutHome>
  );
}
