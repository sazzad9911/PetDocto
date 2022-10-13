import React from "react";
import { TouchableOpacity, Text, View } from "react-native";


const IconButton = ({
  Icon,
  style,
  onPress,
  title,
  disabled,
  active,
  LeftIcon,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      style={[
        {
          paddingHorizontal: 10,
          backgroundColor: active ? '#7267D1' : '#fff',
          flexDirection: "row",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          height: 45,
          opacity: disabled ? 0.4 : 1,
          borderWidth: active ? 0 : 1,
          borderColor: "#e5e5e5",
        },
        style,
      ]}
    >
    {LeftIcon && (
        <View>
          <LeftIcon />
        </View>
      )}
      {LeftIcon &&title&&(<View style={{width:10}}/>)}
      {title && (
        <Text
          style={{
            
            fontSize: 14,
            color: active? "#fff": style&&style.color?style.color:'black',

          }}
        >
          {title}
        </Text>
      )}
      {Icon &&title&&(<View style={{width:10}}/>)}
      {Icon && (
        <View style={{ marginLeft: 0 }}>
          <Icon />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;