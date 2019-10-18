import * as React from 'react';
import { ScrollView, StyleSheet, ScrollViewProperties } from 'react-native';

interface Props extends ScrollViewProperties {}

const Page: React.SFC<Props> = ({
  children,
  contentContainerStyle,
  ...props
}) => (
  <ScrollView
    contentContainerStyle={[styles.container, contentContainerStyle]}
    {...props}
  >
    {children}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Page;
