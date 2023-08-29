import {View, Text} from 'react-native';

import styles from "./LaunchCard.style";

function LaunchCard(props)  {
    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>{props.children}</View>
      </View>
    );
  };

  export default LaunchCard