import { createClockBody } from "./clockBody.js";
import { startClockwork } from "./clockwork.js";

export default function (shadowRoot) {
  let root = document;
  if (shadowRoot) {
    root = shadowRoot;
  }
  createClockBody(root);
  startClockwork(root);
}
