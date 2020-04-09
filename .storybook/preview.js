import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "theme-ui";
import theme from "../src/gatsby-plugin-theme-ui";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
