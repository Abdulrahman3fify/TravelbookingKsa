export interface TravelDestination {
  id: string;
  country: string;
  flag: string;
  title: string;
  locationTxt: string;
  descriptionSmall: string;
  mainImage: string;
}
export interface BookingButtonProps {
  price?: string;
  originalPrice?: string;
  validUntil?: string;
  onBookPress?: () => void;
  onSendMessagePress?: () => void;
}

export interface TabItem {
  id: string;
  label: string;
  content?: React.ReactNode;
}

export interface CustomTabsProps {
  tabs: TabItem[];
  initialActiveTab?: string;
  onTabChange?: (tabId: string) => void;
}

export interface ImageSliderProps {
  data: TravelDestination[];
  onDestinationPress?: (destination: TravelDestination) => void;
}

export interface StatItemProps {
  icon: React.ReactNode;
  label: string;
}

export interface ServiceStatsProps {
  stats?: StatItemProps[];
}

export interface TripPlannerProps {
  title?: string;
  subtitle?: string;
}

export interface AdvantageCard {
  id: string;
  title: string;
  image: any;
}
