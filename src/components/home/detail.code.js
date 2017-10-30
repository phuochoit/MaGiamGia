import React from "react";
import { Clipboard } from "react-native";
import { Container, Body, Button, Text, View, H3, CardItem, Card, H2, Toast } from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import HeaderApp from "../header";
import IsConnected from "../isConnected";
import { checkConnectedDataThunk } from "../../redux/actions/connectedActions";
import { styles, backgroundF94D1B } from "../../../assets/css/styles";
import { AdMobBannerConetnet } from "../admob";

class DetailCode extends React.Component {
    constructor(props) {
        super(props);
        this.props.checkConnectedDataThunk();
    }

    render() {
        const { navigate, state, goBack } = this.props.navigation;
        const title_menu = "Mã Giám Giá " + state.params.titleheader;
        const { isConnected } = this.props;

        if (!isConnected) {
            return (<IsConnected navigation={this.props.navigation} menuleft="1" menuright="1" menutitle={title_menu} />);
        }

        return (
            <Container>

                <HeaderApp navigation={this.props.navigation} menuleft="1" menuright="1" menutitle={title_menu} />

                <View style={{ padding: 10, flex: 1 }}>
                    <Card>
                        <CardItem header style={{ flex: 1 }}>
                            <H3>{state.params.name}</H3>
                        </CardItem>
                        <CardItem style={{ flex: 3 }}>
                            <AdMobBannerConetnet bannerSize="mediumRectangle" />
                        </CardItem>
                        <CardItem footer >
                            <Body style={{ flex: 1, alignItems: "center" }}>
                                <Button
                                    full
                                    style={{ backgroundColor: backgroundF94D1B}}
                                    onPress={() => {
                                        Clipboard.setString(state.params.code);
                                        Toast.show({
                                            text: 'Đã sao chép mã ' + state.params.code + ' thành công!',
                                            position: 'bottom',
                                            type: 'success',
                                            duration: 2000
                                        });
                                    }}>
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

function mapStateToProps(state) {
    return {
        isConnected: state.isConnected.isConnected
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ checkConnectedDataThunk: checkConnectedDataThunk }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DetailCode);