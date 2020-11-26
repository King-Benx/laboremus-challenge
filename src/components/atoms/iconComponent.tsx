import React, {FC, memo} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

interface Props {
  type: string;
  name: string;
  size: number;
  color: string;
}

const IconComponent: FC<Props> = ({name, size, color, type}: Props) => {
  if (type === 'font-awesome') {
    return <FontAwesome name={name} size={size} color={color} />;
  }
  if (type === 'ionicons') {
    return <Ionicons name={name} size={size} color={color} />;
  }
  if (type === 'material') {
    return <MaterialIcons name={name} size={size} color={color} />;
  }
  if (type === 'octicons') {
    return <Octicons name={name} size={size} color={color} />;
  }
  if (type === 'feather') {
    return <Feather name={name} size={size} color={color} />;
  }
  return null;
};

export default memo(IconComponent);
