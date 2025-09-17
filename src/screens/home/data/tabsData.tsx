import Advantages from '../components/Advantages';
import {TripPlanner} from '../components/TripPlanner';

export const tabsData = [
  {
    id: 'features-addons',
    label: 'المميزات و الاضافات',
    content: <Advantages />,
  },
  {
    id: 'trip-program',
    label: 'برنامج الرحلة',
    content: <TripPlanner />,
  },
];
