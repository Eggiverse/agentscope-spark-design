import { useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';

export interface IAgentScopeRuntimeWebUIRef {
  messages: ReturnType<typeof useChatAnywhereMessages>;
}
