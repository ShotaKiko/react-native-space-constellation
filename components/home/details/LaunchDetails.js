import {View, Text, Button} from 'react-native';

import styles from "./LaunchDetails.styles";

function LaunchDetails({ navigation, props })  {
    return (
      <View style={styles.container}>
        <Text>Additional Launch Information</Text>
        
        {/* TODO: Details view */}
        <View style={styles.content}>Details below</View>

        <Button
            title="Back to Home"
            // TODO: move on press logic to utils file
            // generateOnPress
            onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  };

export default LaunchDetails