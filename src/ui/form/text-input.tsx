import * as React from 'react';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {}

const TextInput: React.SFC<Props> = props => <TextInput {...props} />;

export default TextInput;
