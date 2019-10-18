import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import COLORS from '../colors';
import Text from '../typo/text';

interface Props extends TouchableOpacityProps {
  label: string;
}

const Primary: React.SFC<Props> = ({ label, style, ...props }) => (
  <TouchableOpacity style={[styles.container, styles.button, style]} {...props}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.THEME,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 20,
  },
});

export default Primary;
