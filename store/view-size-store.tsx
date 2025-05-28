import { proxy } from 'valtio'

type ViewSizeStore = {
  size: number
}

export const viewSizeStore = proxy<ViewSizeStore>({
  size: 5,
})
