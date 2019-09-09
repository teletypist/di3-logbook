import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //Applied to
  root: {
  },
  form: {
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
      backgroundColor: '#FAF0E6',
      width: '100%',
  },
  entrylist: {
      backgroundColor: '#F5DEB3',
      width: '100%',
      padding: 10,
  },
  input: {
      marginBottom: 10,
  },
  textarea: {
      alignSelf: 'stretch',
      marginBottom: 10,
  },
  button: {
      alignSelf: 'flex-end',
      marginBottom: 10,
      backgroundColor: "#aeefd1",
      width: 120,
  },
});

export default styles;
