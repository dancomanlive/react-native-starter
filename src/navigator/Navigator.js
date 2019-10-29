import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Albums from '../containers/Albums'
import Photos from '../containers/Photos'
import ExampleScreenOne from '../components/ExampleScreenOne'
import ExampleScreenTwo from '../components/ExampleScreenTwo'

const FirstStack = createStackNavigator(
  { Albums, Photos },
  { initialRouteName: 'Albums' }
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
