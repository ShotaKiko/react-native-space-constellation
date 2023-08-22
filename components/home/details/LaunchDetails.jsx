import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';

import styles from "./LaunchDetails.style";

function LaunchCard(value)  {
    return (
      <View style={styles.launchCard}>
        <Image
          source={{uri: value?.links?.patch?.small}}
          style={styles.image}
          height={60}
          width={60}
        />
        <View style={styles.launchCardTextContainer}>
          <Title>{value?.name}</Title>
          <Text>Success: {JSON.stringify(value?.success ?? 'Undetermined')}</Text>
          <Text>Upcoming: {JSON.stringify(value?.upcoming)}</Text>
        </View>
      </View>
    );
  };

  export default LaunchCard