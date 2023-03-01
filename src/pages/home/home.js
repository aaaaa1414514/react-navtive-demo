import React from 'react'
import BaseContainer from '../../components/baseContainer/baseContainer.js'
import HomeHeader from './components/homeHeader'
import Progress from './components/progress'
import Expenselist from './components/expenselist/expenselist'
export default function () {
  return (
    <BaseContainer>
      {/* 顶部 */}
      <HomeHeader />
      {/* progress */}
      <Progress mt="24px" />
      {/* 流水列表 */}
      <Expenselist mt="24px" />
    </BaseContainer>
  )
}
