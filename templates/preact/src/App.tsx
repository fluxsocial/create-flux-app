import { useEffect } from "preact/hooks";
import { PerspectiveProxy } from "@perspect3vism/ad4m";
import Perspective from "./components/Perspective";

import "./styles.css";

type Props = {
  perspective: PerspectiveProxy;
};

export default function App({ perspective }: Props) {
  // Import Junto elements
  // package.json info
  // picture, name
  // keyword flux-app, ad4m-widget

  return (
    <div className="appContainer">
      <Perspective perspective={perspective} />
    </div>
  );
}
