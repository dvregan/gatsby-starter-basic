import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby"; // mocked

import SEO from "./SEO";
import Helmet from "react-helmet";

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: "Gatsby Starter",
        description: "A simple Gatsby starter project.",
      },
    },
  }));
});

describe("SEO", () => {
  it("passes metadata to helmet", () => {
    render(<SEO />);
    const helmet = Helmet.peek();

    expect(helmet.title).toBe("Gatsby Starter");
  });
});
