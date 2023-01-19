import { Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height

export const fillScreenWithSkeleton = (
  skeleton: JSX.Element,
  skeletonHeight: number,
) => {
  return Array(Math.ceil(screenHeight / skeletonHeight)).fill(skeleton)
}
