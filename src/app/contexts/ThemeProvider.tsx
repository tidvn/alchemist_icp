import { Flowbite } from "flowbite-react";

import theme from "@/theme";

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Flowbite theme={{ theme }}>{children}</Flowbite>;
};

export default ThemeProvider;
