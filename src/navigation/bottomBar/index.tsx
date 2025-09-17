import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useEffect, useReducer, useRef} from 'react';
import {
  I18nManager,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';
import {
  CartSVG,
  HomeSVG,
  InActiveHomeSVG,
  SettingsSVG,
  WalletSVG,
} from '../../assets/svgs';
import {useThemeStore} from '../../zustand/useThemeStore';
import {generateStyles} from './styles';
import {BlurView} from '@react-native-community/blur';
import {Home} from '../../screens/home';

// ------------------------------------------------------------------

const Tab = createBottomTabNavigator();

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

// ------------------------------------------------------------------

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <AnimatedTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <InActiveHomeSVG /> : <HomeSVG />,
        }}
        component={Home}
      />
      <Tab.Screen
        name="Upload"
        options={{
          tabBarIcon: ({focused}) => <CartSVG />,
        }}
        component={Home}
      />
      <Tab.Screen
        name="Chat"
        options={{
          tabBarIcon: ({focused}) => <WalletSVG />,
        }}
        component={Home}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({focused}) => <SettingsSVG />,
        }}
        component={Home}
      />
    </Tab.Navigator>
  );
};

// ------------------------------------------------------------------

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);
  const activeIndex2 = I18nManager.isRTL ? 3 - activeIndex : activeIndex;

  const reducer = (state: any, action: {x: number; index: number}) => {
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  // animations ------------------------------------------------------

  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;
    return [...layout].find(({index}) => index === activeIndex2)!.x - 25;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    const direction = I18nManager.isRTL ? -1 : 1;
    return {
      transform: [
        {
          translateX: withTiming(xOffset.value * direction, {
            duration: 250,
          }),
        },
      ],
    };
  });

  return (
    <View style={[styles.tabBar, {paddingBottom: bottom}]}>
      {/* Glassy background */}
      <BlurView
        blurAmount={50}
        blurType="light"
        style={StyleSheet.absoluteFillObject}
      />

      {/* Floating background shape */}
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}>
        <Path
          fill="rgba(13, 111, 156, 0.3)" // translucent fill
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      {/* Tabs */}
      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const {options} = descriptors[route.key];

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={e => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

// ------------------------------------------------------------------

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

const TabBarComponent = ({
  active,
  options,
  onLayout,
  onPress,
}: TabBarComponentProps) => {
  // handle lottie animation -----------------------------------------
  const ref = useRef(null);
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);

  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play();
    }
  }, [active]);

  // animations ------------------------------------------------------

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, {duration: 250}),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, {duration: 250}),
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyles]}
      />

      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}>
        {/* @ts-ignore */}
        {options.tabBarIcon ? (
          // @ts-ignore
          options.tabBarIcon({focused: active, color: '#000', size: 24})
        ) : (
          <Text>?</Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

// ------------------------------------------------------------------

export default BottomTab;
