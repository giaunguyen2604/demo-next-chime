import styled from 'styled-components';

import { iconSend } from './icon-send';

export const IconSend = styled.i`
  display: inline-block;
  background: url(${iconSend});
  background-size: contain;
  width: 20px;
  height: 20px;
`;

export const ChatPanel = styled.div`
  height: 60vh;
  margin: 40px 10px 20px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f1f1f1;
  box-shadow: 0 0.0625rem 0.0625rem 0 rgba(0,0,0,0.1);
  overflow-y: scroll;
`;

export const ChatInputGroup = styled.div`
  display: flex;
  height: 56px;
  margin: 0 10px;

  span {
    display: flex;
    width: calc(100% - 50px);
    height: 33px;

    input[type=text] {
      width: 100%;
      box-shadow: 0 0.0625rem 0.0625rem 0 rgba(0,0,0,0.1);
    }
  }
`;

export const ChatSubmitButton = styled.button`
  display: flex;
  width: 50px;
  height: 33px;
  outline: none;
  border: none;
  background: none;
  text-align: center;
  background-color: #fff;
  padding: 0;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.1);
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.0625rem 0.0625rem 0 rgba(0,0,0,0.1);
  background-color: rgba(255,255,255,0.5);
  margin-left: 5px;
  cursor: pointer;
`;

export const EmojiPickerPanel = styled.button`
  display: flex;
  width: 50px;
  height: 33px;
  outline: none;
  border: none;
  background: none;
  text-align: center;
  background-color: #fff;
  padding: 0;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.1);
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.0625rem 0.0625rem 0 rgba(0,0,0,0.1);
  background-color: rgba(255,255,255,0.5);
  margin-left: 5px;
  cursor: pointer;
`;

export const ChatMessage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  .avatar {
    content: "T";
    color: brown;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid brown;
  }

  .usr-name {
    margin-right: 6px;
    font-weight: bold;
  }

  .txt-msg {
    font-size: 12px;
  }
`;