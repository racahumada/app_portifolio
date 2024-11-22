import * as Linking from 'expo-linking';

const InicioController = () => {
  const handlePressLink = async (url: string) => {
    await Linking.openURL(url);
  };

  return { handlePressLink };
};

export default InicioController;
