import React, {useState} from 'react'
import {Box, Center, Actionsheet} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MonthSelectorCalendar from 'react-native-month-selector'
import {TouchableOpacity} from 'react-native'
import moment from 'moment'

const localeSettings = {
  weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  months: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ]
  // 其他需要更新的本地化信息
}

export default () => {
  const [selectedMonth, setSelectedMonth] = useState(moment())
  const [isOpen, setOpen] = useState(false)

  return (
    <Box>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Center onPress={() => setOpen(true)} bg="muted.200" p="6px" borderRadius="md">
          <Icon name="today" color="#2d2c4d" size={24} />
        </Center>
      </TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Actionsheet.Content bg="#fff">
          <MonthSelectorCalendar
            selectedDate={selectedMonth}
            nextIcon={<Icon name="arrow-forward-ios" size={24} />}
            prevIcon={<Icon name="arrow-back-ios" size={24} />}
            onMonthTapped={date => setSelectedMonth(date)}
            currentMonthTextStyle={{color: '#f56c61'}}
            localeLanguage="zh-cn"
            localeSettings={localeSettings}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  )
}
