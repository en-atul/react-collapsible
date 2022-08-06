import React from "react";
import { render } from "@testing-library/react";

import Collapsible from "./Collapsible";

describe("Collapsible", () => {
  test("renders the Collapsible component", () => {
    render(<Collapsible label="Hello world!" />);
  });
});