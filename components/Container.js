/*
 * Container input widget
 */
import React from 'react';
import { View } from 'react-native';

import styles from '../style';

const Container = ({children, style=styles.root}) => <View style={style}>{children}</View>

export default Container;
