import { proxy } from 'valtio'

type MobileMenuStore = {
  isOpen: boolean
}

export const mobileMenuStore = proxy<MobileMenuStore>({
  isOpen: false,
})
