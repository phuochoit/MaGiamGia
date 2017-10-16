import React from "react";
import { Clipboard } from "react-native";
import { Container, Body, Button, Text, View, H3, CardItem, Card, H2, Toast} from "native-base";
import { connect } from "react-redux";
import HeaderApp from "../header";
import styles from "../../../assets/css/styles";

class DetailCode extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        const { navigate, state, goBack } = this.props.navigation;      
        const title_menu = "Mã Giám Giá " + state.params.titleheader;
        return (
            <Container>
                
                <HeaderApp navigation={this.props.navigation} menuleft="1" menuright="1" menutitle={title_menu} /> 

                <View style={{ padding: 10, flex: 1}}>
                    <Card>
                        <CardItem header style={{ flex: 1 }}>
                            <H3>{state.params.name}</H3>
                        </CardItem>
                        <CardItem style={{flex:3}}>
                            
                        </CardItem>
                        <CardItem footer >
                            <Body style={{ flex: 1, alignItems: "center" }}>
                                <H2 style={{marginBottom:10}}>{state.params.code}</H2>
                                <Button 
                                full 
                                    onPress={() =>  {
                                        Clipboard.setString(state.params.code);
                                        Toast.show({
                                            text: 'Đã sao chép mã ' + state.params.code + ' thành công!',
                                            position: 'bottom',
                                            type: 'success',
                                            duration: 2000
                                        });
                                    } }>
                                    <Text>Copy Mã Giảm Giá</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </Container>
        );
    }
}

export default DetailCode;