import {View, Button } from 'react-native';

import styles from "./LaunchCard.style";

function LaunchCard({ props, navigation})  {
    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>{props.children}</View>

        <Button  
          title="Go to Details"
          // TODO: move on press logic to a utils file
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  };

export default LaunchCard