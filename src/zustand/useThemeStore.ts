import {create} from 'zustand';
import {Global, Theme} from '../utils/types/ThemeTypes';
import LightTheme from '../constants/theme/lightTheme';
import DarkTheme from '../constants/theme/darkTheme';

type ThemeState = {
  Theme: Theme;
  changeTheme: (action: Global) => void;
};

const ThemeMapping = {
  [Global.LightTheme]: LightTheme,
  [Global.DarkTheme]: DarkTheme,
};

export const useThemeStore = create<ThemeState>(set => ({
  Theme: ThemeMapping[Global.LightTheme],
  changeTheme: (action: Global) => set(() => ({Theme: ThemeMapping[action]})),
}));
