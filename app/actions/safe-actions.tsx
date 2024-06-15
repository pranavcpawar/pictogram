import { DEFAULT_SERVER_ERROR, createSafeActionClient } from "next-safe-action";

export const authenticateRegisterAction = createSafeActionClient({
  async middleware({ email, password, username }){
    console.log("authenticatedAction: ", email, password, username );
  },
  handleReturnedServerError(e){
    if(e instanceof ActionError){
      return e.message;
    }
    return DEFAULT_SERVER_ERROR;
  }
});

export const authenticateLoginAction = createSafeActionClient({
  async middleware({ email, password }){
    console.log("authenticatedAction: ", email, password );
  },
  handleReturnedServerError(e){
    if(e instanceof ActionError){
      return e.message;
    }
    return DEFAULT_SERVER_ERROR;
  }
});

export class ActionError extends Error {}