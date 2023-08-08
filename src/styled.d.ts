import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    blackColor: string;
    whiteColor: string;
  }
  interface FontPropsTheme {
    h1Size: string;
    h2Size: string;
  }
}
