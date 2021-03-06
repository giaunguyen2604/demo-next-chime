// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

interface Props {
  showNav: boolean;
  showRoster: boolean;
}

export const StyledLayout = styled.main<Props>`
  height: 100vh;
  width: 100%;

  display: grid;

  .video-content {
    grid-area: content;
  }

  ${({ showNav, showRoster }) => {
    if (showNav && showRoster) {
      return `
        grid-template-columns: 1fr auto;
        grid-template-areas: 'content roster nav';
      `;
    }

    if (showNav) {
      return `
        grid-template-columns: 1fr auto;
        grid-template-areas: 'content nav';
      `;
    }

    if (showRoster) {
      return `
        grid-template-columns: auto 1fr;
        grid-template-areas: 'content roster';
      `;
    }

    return `
      grid-template-columns: 1fr;
      grid-template-areas: 'content';
    `;
  }}

  .nav {
    grid-area: nav;
  }

  .roster {
    grid-area: roster;
    z-index: 2;
  }

  .attendees-layout {
    height: 100px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }

  .attendees-layout .videos {
    display:block;
    flex: none;
  }

  .attendees-layout .videos [data-testid="video-tile"] {
    width: 25%;
    position: relative;
    height: 100px;
    display: inline-block;
    margin: 0;
    padding: 0;
    bottom: 0;
  }

  .attendees-layout .videos video {
    height: 100px !important;
    bottom: 0 !important;
    max-width: 100%;
  }

  @media screen and (min-width: 769px) {
    .mobile-toggle {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'content';

    .nav {
      grid-area: unset;
      position: fixed;
    }

    .roster {
      grid-area: unset;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 320px;
    }
  }

  @media screen and (max-width: 460px) {
    .roster {
      max-width: 100%;
    }
  }
`;

export const StyledContent = styled.div`
  position: relative;
  grid-area: content;
  height: 100%;
  display: flex;
  flex-direction: column;

  .videos {
    flex: 1;
  }

  .controls {
    position: absolute;
    bottom: 1rem;
    right: 30px;
  }

  @media screen and (max-width: 768px) {
    .controls {
      position: static;
      transform: unset;
    }
  }
`;
