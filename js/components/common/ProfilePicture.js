/* @flow */

import React, {
  Component,
  Image
} from 'react-native';

class ProfilePicture extends Component {
  props: {
    userID: string;
    size: number;
  };

  render() {
    const {userID, size} = this.props;
    const icon = require('../img/avatar.png');
    
    return (
      <Image
        source={icon}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
    );
  }
}

export default ProfilePicture;