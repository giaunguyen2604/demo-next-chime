import React from 'react'
import { withAuthenticator } from 'aws-amplify-react';
import Bootstrap from "../../theme";
function Login(){
  return <h1></h1>
}

export default withAuthenticator(Login,
  false,
  [],
  null,
  Bootstrap,
  { hiddenDefaults: ["phone_number"] });