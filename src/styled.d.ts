import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    blackColor: string;
    whiteColor: string;
    bgColor: string;
    cardColor: string;
    boardColor: string;
  }
  interface FontPropsTheme {
    h1Size: string;
    h2Size: string;
  }
}
