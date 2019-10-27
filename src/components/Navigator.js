import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import LocalStateScreen from './LocalStateScreen'
import ReduxStateScreen from './ReduxStateScreen'
import ExampleScreenOne from './ExampleScreenOne'
import ExampleScreenTwo from './ExampleScreenTwo'

const FirstStack = createStackNavigator(
  { LocalStateScreen, ReduxStateScreen },
  { initialRouteName: 'LocalStateScreen' }
)

const SecondStack = createStackNavigator(
  { ExampleScreenOne, ExampleScreenTwo },
  { initialRouteName: 'ExampleScreenOne' }
)

const TabNavigator = createBottomTabNavigator({
  FirstTab: FirstStack,
  SecondTab: SecondStack,
})

export default createAppContainer(TabNavigator)
