import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const composePageURL = ({
  pageNumber,
  searchParamsString,
}: {
  pageNumber: number
  searchParamsString: string
}) => {
  const searchParamsClone = new URLSearchParams(searchParamsString)
  searchParamsClone.set('page', String(pageNumber))
  return `?${searchParamsClone.toString()}`
}

export const delay = async (ms: number) => {
  return new Promise((res) => setTimeout(res, ms))
}
