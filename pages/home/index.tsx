import React from "react";
import {
  UserActivityProvider,
  Heading
} from "amazon-chime-sdk-component-library-react";
import { StyledLayout, StyledContent } from "./Styled";
import MeetingDetails from "../../containers/MeetingDetails";
import AttendeeDetails from "../../containers/AttendeeDetails";
import MeetingControls from "../../containers/MeetingControls";
import { useNavigation } from '../../providers/NavigationProvider';
export default function Meeting() {
  const { showNavbar, showRoster } = useNavigation();
  return (
    <UserActivityProvider>
      <StyledLayout showNav={showNavbar} showRoster={showRoster}>
        <StyledContent>
          <Heading level={1} css="height: 80px">
            <React.Fragment />
          </Heading>
          <AttendeeDetails />
          <MeetingDetails />
          <MeetingControls />
        </StyledContent>
      </StyledLayout>
    </UserActivityProvider>
  );
}
