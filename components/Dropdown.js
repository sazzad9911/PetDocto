import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    ScrollView,
    Modal,
    Image
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
import { AntDesign } from "@expo/vector-icons";
import OutsideView from "react-native-detect-press-outside";
import { primaryColor, textColor } from './../assets/colors';
import { styles } from "../assets/styles";



const Dropdown = ({ style, value, onChange, placeholder, DATA }) => {
    const [Value, setValue] = React.useState();
    const [Data, setData] = React.useState();
    const [Focus, setFocus] = React.useState(false);
    const [Visible, setVisible] = React.useState(false);

    React.useEffect(() => {

        setValue(value);
    }, [value]);

    const styles = StyleSheet.create({
        viewBox: {
            minWidth: 100,
        },
        input: {
            borderRadius: 5,
            borderColor: Focus ? "#7267D1" : "#7267D1",
            borderWidth:2,
            padding: 5,
            paddingHorizontal: 10,
            height: 45,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        container: {
            backgroundColor: "#f5f5f5",
            width: "100%",
            paddingHorizontal: 10,
            borderRadius: 5,
        },
        text: {
            fontSize: 15,
            marginRight: 10,
            color: textColor
        },
    });
    const childRef = React.useRef();
    return (
        <View>
            <View style={[styles.viewBox, style]}>
                <TouchableOpacity
                    onPress={() => {
                        setFocus(!Focus);
                    }}
                    style={styles.input}
                >
                    <Text numberOfLines={1} style={[styles.text, { color: "#707070" }]}>
                        {Value ? Value : placeholder}
                    </Text>
                    <AntDesign
                        style={{
                            justifySelf: "flex-end",
                        }}
                        name="down"
                        size={20}
                        color="#707070"
                    />
                </TouchableOpacity>
            </View>
            <Modal
                transparent={true}
                animationType="fade"
                visible={Focus}
                onRequestClose={() => {
                    setFocus(!Focus);
                }}
            >
                <OutsideView
                    style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.21)" }}
                    childRef={childRef}
                    onPressOutside={() => {
                        setFocus(false);
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Animated.View
                            ref={childRef}
                            entering={FadeIn}
                            style={{
                                maxHeight: 320,
                                width: "90%",
                                backgroundColor: 'white',
                                borderRadius: 5,
                                
                            }}

                        >

                            <ScrollView>
                                {Array.isArray(DATA) &&
                                    DATA.map((doc, i) => (
                                        <TouchableOpacity style={{
                                            width: '100%',
                                            height: 70,
                                            marginTop: 2,
                                            paddingHorizontal: 10,
                                            justifyContent: "center",
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#7267D1',
                                        }}
                                            onPress={() => {
                                                setValue(doc);
                                                setFocus(false);
                                                if (onChange) {
                                                    onChange(doc);
                                                }
                                            }}
                                            key={i}
                                        >
                                        <View style={{flexDirection:'row'}}>
                                        <Image style={{
                                            height: 55,
                                            width: 55,
                                            borderRadius: 27.5,
                                            margin: 5,
                                        }} source={{ uri: 'https://img.freepik.com/premium-photo/bengal-cat-head-with-green-eyes-close-up-white-background_340015-921.jpg' }} />
                                            <View style={{paddingVertical:10}}>
                                                <Text style={{fontSize:15,color:'#7267D1',}}> {doc}</Text>
                                                <Text style={{fontSize:10,color:'#7267D1',}}> Age:1.5 years</Text>
                                            </View>
                                        </View>

                                        </TouchableOpacity>
                                    ))}
                            </ScrollView>
                        </Animated.View>
                    </View>
                </OutsideView>
            </Modal>
        </View>
    );
};

export default Dropdown;