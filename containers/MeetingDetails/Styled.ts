// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from "styled-components";

export const StyledList = styled.dl`
  font-size: 1rem;

  dt {
    display: inline-block;
    margin-bottom: 0.75rem;
    margin-right: 0.5rem;

    &::after {
      content: ":";
    }
  }

  dd {
    display: inline-block;
    font-weight: 600;
  }
`;

export const StyledRoomInfor = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 410px;
  margin-top: 10px;
  .wrapper-icon-share {
    color: #18a0fb;
    cursor: pointer;
    &:hover .box-invite-link {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const StyledTooltipInvitedLink = styled.div`
  visibility: hidden;
  opacity: 0;
  width: 350px;
  height: 56px;
  background-color: #555;
  color: #fff;
  text-align: left;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  z-index: 100;
  top: -10px;
  left: 412px;
  line-height: 1.3;
  transition: opacity 0.3s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  font-size: 14px;
  font-weight: bold;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #555 transparent transparent;
  }
  &:hover {
    background-color: #777676;
    cursor: pointer;
  }
`;
