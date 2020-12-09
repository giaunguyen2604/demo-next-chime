import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme, MeetingProvider, NotificationProvider } from "amazon-chime-sdk-component-library-react";
import Notifications from "./../containers/Notifications";
import ErrorProvider from "./../providers/ErrorProvider";
import { NavigationProvider } from "./../providers/NavigationProvider";
import { useAppState, AppStateProvider } from "./../providers/AppStateProvider";
import meetingConfig from "./../meetingConfig";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppStateProvider>
      <Theme>
        <NotificationProvider>
          <Notifications />
          <ErrorProvider>
            <MeetingProvider {...meetingConfig}>
              <NavigationProvider>
                <Component {...pageProps} />;
              </NavigationProvider>
            </MeetingProvider>
          </ErrorProvider>
        </NotificationProvider>
      </Theme>
    </AppStateProvider>
  );
}

export default MyApp;

const Theme: React.FC = ({ children }) => {
  const { theme } = useAppState();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
