import TabGroup from './TabGroup'
import TabItem from './TabItem'
import TabList from './TabList'
import TabView from './TabView'
import TabViews from './TabViews'

const Tab = Object.assign(TabItem, {
  Group: TabGroup,
  List: TabList,
  Views: TabViews,
  View: TabView,
})

export default Tab
