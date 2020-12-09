// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useRouter } from 'next/router';
import React, { useContext, useState, ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

interface AppStateValue {
  meetingId: string | string[];
  localUserName: string;
  theme: string;
  role: string | string[];
  region: string | string[];
  toggleTheme: () => void;
  setAppMeetingInfo: (meetingId: string, name: string, role: string, region: string) => void;
}

const AppStateContext = React.createContext<AppStateValue | null>(null);

export function useAppState(): AppStateValue {
  const state = useContext(AppStateContext);

  if (!state) {
    throw new Error('useAppState must be used within AppStateProvider');
  }

  return state;
}

export function AppStateProvider({ children }: Props) {
  const query = useRouter().query;
  const [meetingId, setMeeting] = useState(query.meetingId || '');
  const [role, setRole] = useState(query.role || '');
  const [region, setRegion] = useState(query.region || '');
  const [localUserName, setLocalName] = useState('');
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setTheme(theme || "light");
  },[])
  const toggleTheme = (): void => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const setAppMeetingInfo = (
    meetingId: string,
    name: string,
    role: string,
    region: string
  ) => {
    setRole(role);
    setRegion(region);
    setMeeting(meetingId);
    setLocalName(name);
  };

  const providerValue = {
    meetingId,
    localUserName,
    theme,
    role,
    region,
    toggleTheme,
    setAppMeetingInfo
  };

  return (
    <AppStateContext.Provider value={providerValue}>
      {children}
    </AppStateContext.Provider>
  );
}
