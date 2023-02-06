import RMStyle from '../../RMStyle';

function navBar({ title }) {
  return {
    title,
    headerStyle: {
      backgroundColor: RMStyle.colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}

export default navBar;
