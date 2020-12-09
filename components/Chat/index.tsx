import React, { useState, useEffect, ChangeEvent } from 'react';
// import Picker from 'emoji-picker-react';

import {
  Input,
  useAudioVideo,
  useMeetingManager,
  EmojiPicker
} from 'amazon-chime-sdk-component-library-react';

import {
  DataMessage
} from 'amazon-chime-sdk-js';


import {
  IconSend,
  ChatPanel,
  ChatInputGroup,
  ChatSubmitButton,
  ChatMessage
} from './Styled';

interface chatProps {
  roomId: string | string[];
  attendees: Array<any>;
}

interface ChatMessageProps {
  user: string | undefined;
  msg: string;
  time: number;
  senderId: string;
}

const DEFAULT_LIFETIME = 300000;

const ChatCore: React.FC<chatProps> = ({ roomId, attendees }: chatProps) => {
  const audioVideo = useAudioVideo();
  const meetingManager = useMeetingManager();
  const [messageInputContent, setMessageInputContent] = useState('');
  const [messageList, setMessageList] = useState<ChatMessageProps[]>([]);
  let lastReceivedMessageTimestamp = 0;

  // test handle chat
  const handleChat = async (e: React.FormEvent) => {
    await audioVideo?.realtimeSendDataMessage(roomId, messageInputContent, DEFAULT_LIFETIME);
    setMessageInputContent('');
    setMessageList((messages) => [
      ...messages,
      {
        user: '',
        msg: messageInputContent,
        time: Date.now(),
        senderId: meetingManager?.configuration?.credentials?.attendeeId || ''
      }
    ]);
  }

  const handleEnter = async (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      if (messageInputContent) {
        await audioVideo?.realtimeSendDataMessage(roomId, messageInputContent, DEFAULT_LIFETIME);
        setMessageInputContent('');
        setMessageList((messages) => [
          ...messages,
          {
            user: '',
            msg: messageInputContent,
            time: Date.now(),
            senderId: meetingManager?.configuration?.credentials?.attendeeId || ''
          }
        ]);
      }
    }
  }

  const onEmojiClick = (event: any, emojiObject: any) => {
    console.log(emojiObject);
    setIsOpenEmioji(false)
    setMessageInputContent(messageInputContent + emojiObject.emoji)
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessageInputContent(e.target.value);
  }

  function onReceiveDataMessage(dataMessage: DataMessage) {
    if (!dataMessage.throttled) {
      if (dataMessage.timestampMs <= lastReceivedMessageTimestamp) {
        return;
      }
      lastReceivedMessageTimestamp = dataMessage.timestampMs;
      const attend = attendees.find((attendee: any) =>
        attendee?.chimeAttendeeId == dataMessage.senderAttendeeId
      ) || { name: '' };
      setMessageList((messages) => [
        ...messages,
        {
          user: attend?.name,
          msg: dataMessage.text(),
          time: Date.now(),
          senderId: dataMessage.senderAttendeeId
        }
      ]);

    }
  }

  useEffect(() => {

    audioVideo?.realtimeSubscribeToReceiveDataMessage(
      roomId,
      (dataMessage) => onReceiveDataMessage(dataMessage));

    return () => {
      audioVideo?.realtimeUnsubscribeFromReceiveDataMessage(roomId);
    };
  }, []);
  const [isOpenEmoji, setIsOpenEmioji] = useState(false)

  const toggleEmoji = () => {
    setIsOpenEmioji(!isOpenEmoji)
  }

  return (
    <React.Fragment>
      <ChatPanel>
        {messageList.map((info: any, idx: number) => (
          <ChatMessage key={idx}>
            {/* <div className="avatar">{info.user}</div> */}
            <div className="usr-name">{attendees.find((attendee: any) => attendee?.chimeAttendeeId === info.senderId)?.name}: </div>
            <div className="txt-msg">{info.msg}</div>
          </ChatMessage>
        ))}
      </ChatPanel>
      <ChatInputGroup>
        <div style={{
          position: 'relative'
        }}>
          {
            isOpenEmoji &&
            <div style={{
              bottom: '60px',
              position: 'absolute',
            }}>
              {/* <Picker onEmojiClick={onEmojiClick} /> */}
            </div>
          }
          {/* <EmojiPicker width="2rem" height="2rem" onClick={toggleEmoji}/> */}
        </div>

        <Input className="chat-input"
          onChange={(e: ChangeEvent<HTMLInputElement>): void => handleMessageChange(e)}
          value={messageInputContent}
          placeholder="Type your message"
          onKeyPress={handleEnter}
          type="text" />
        <ChatSubmitButton className="chat-button" onClick={handleChat}>
          <IconSend />
        </ChatSubmitButton>
      </ChatInputGroup>
    </React.Fragment >
  );
}

export default ChatCore;