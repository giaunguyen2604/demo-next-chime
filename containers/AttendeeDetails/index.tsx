// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// @ts-ignore
import React from "react";
import {
  Flex,
  VideoTileGrid
} from "amazon-chime-sdk-component-library-react";
React.useLayoutEffect = React.useEffect;
const AttendeeDetails = () => {
  return (
      <Flex className="attendees-layout" container layout="fill-space-centered">
        <VideoTileGrid className="videos" />
      </Flex>
  );
};


export default AttendeeDetails;
