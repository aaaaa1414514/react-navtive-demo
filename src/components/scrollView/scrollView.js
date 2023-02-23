import {ScrollView} from 'native-base'
import {RefreshControl} from 'react-native'
import React, {useState, useEffect} from 'react'

export default ({title, children}) => {
  const [refreshing, setRefreshing] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  function onRefresh() {
    setRefreshing(true)
    console.log('refresh')
    setTimeout(() => {
      setRefreshing(false)
      console.log('refresh success')
    }, 1500)
  }

  useEffect(() => {
    console.log('load data')
  })

  function handleLoadMore() {
    console.log('load more')
    setIsLoadingMore(true)
    setTimeout(() => {
      console.log('load more success')
      setIsLoadingMore(false)
    }, 1500)
  }

  const handleScroll = event => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 50

    if (isCloseToBottom && !isLoadingMore) {
      handleLoadMore()
    }
  }

  return (
    <ScrollView
      flex={1}
      onScroll={handleScroll}
      scrollEventThrottle={100}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {children}
    </ScrollView>
  )
}
