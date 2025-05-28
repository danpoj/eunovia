import { proxy } from 'valtio'

type AiChatStore = {
  isOpen: boolean
}

export const aiChatStore = proxy<AiChatStore>({
  isOpen: false,
})
