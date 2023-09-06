import {View, Button, Text } from 'react-native';

import styles from "./LaunchCard.style";

function LaunchCard({ props })  {
    return (
      <View style={styles.card}>
        <Text>{props.mission_name}</Text>
        <Text>{props.details}</Text>
        <Button  
          title="Go to Details"
          // TODO: move on press logic to a utils file
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  };

export default LaunchCard