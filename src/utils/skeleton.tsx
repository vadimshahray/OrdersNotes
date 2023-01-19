import { ComponentType } from 'react'
import { Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height

export const fillScreenWithSkeleton = (
  skeleton: ComponentType,
  skeletonHeight: number,
) => {
  return Array(Math.ceil(screenHeight / skeletonHeight)).fill(skeleton)
}
