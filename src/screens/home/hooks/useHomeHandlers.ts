import {TravelDestination} from '../types';

export const useHomeHandlers = () => {
  const handleBookPress = () => {
    console.log('Book now pressed');
  };

  const handleSendMessagePress = () => {
    console.log('Send message pressed');
  };

  const handleDestinationPress = (destination: TravelDestination) => {
    console.log('Destination selected:', destination.title);
  };

  const handleTabChange = (tabId: string) => {
    console.log('Tab changed to:', tabId);
  };

  return {
    handleBookPress,
    handleSendMessagePress,
    handleDestinationPress,
    handleTabChange,
  };
};
