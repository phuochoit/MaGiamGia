import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Container, Body, Icon, Button, Text, View, H3, CardItem, Card, Grid, Input } from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { upperFirst, split, isNull } from "lodash";
import { FontAwesome, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';


import Isloading from "../isloading";
import HeaderApp from "../header";
import IsConnected from "../isConnected";
import { postData } from "../../api";
import { checkConnectedDataThunk } from "../../redux/actions/connectedActions";
import { styles, Color1C57FB, ColorFFF} from "../../../assets/css/styles";
import { AdMobBanner_AdMob } from "../admob";


class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail_Data: [],
            isReady: false,
        }
        this.props.checkConnectedDataThunk();
    }

    componentDidMount() {
        const { state } = this.props.navigation;
        const param = { url: state.params.url };
        postData(this.props.apiurl + 'getListVoucher.php', param).then((temp) => {
            this.setState({
                detail_Data: temp,
                isReady: true
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isConnected && isNull(this.state.detail_Data)) {
            const { state } = this.props.navigation;
            const param = { url: state.params.url };
            postData(this.props.apiurl + 'getListVoucher.php', param).then((temp) => {
                this.setState({
                    detail_Data: temp,
                    isReady: true
                });
            });
        }
    }

    render() {
        const { navigate, state, goBack } = this.props.navigation;
        const { isConnected } = this.props;
        const params_name = upperFirst(state.params.name);
        const name = split(params_name, 'tháng');
        const title_menu = "Mã Giám Giá " + name[0];

        if (!isConnected) {
            return (<IsConnected navigation={this.props.navigation} menuleft="1" menuright="1" menutitle={title_menu} />);
        }

        if (!this.state.isReady) {
            return (<Isloading navigation={this.props.navigation} menuleft="1" menuright="1" menutitle={title_menu} />);
        }
        return (
            <Container>
                <HeaderApp navigation={this.props.navigation} menuleft="1" menuright="1" menutitle={title_menu} />
                <FlatList
                    style={{ marginVertical: 10 }}
                    data={this.state.detail_Data}
                    renderItem={
                        ({ item }) => (
                            <Grid style={{ marginHorizontal: 5, flex: 1 }}>
                                <Card style={[styles.flex1]}>
                                    <Button full color={Color1C57FB}>
                                        <H3 style={[styles.textColorFFF]}>Giảm - {item.discount} </H3>
                                    </Button>
                                    <TouchableOpacity
                                        onPress={() => { navigate('DetailCode', { code: item.code, name: item.title, titleheader: name[0] }) }}
                                    >
                                        <CardItem style={{ flex: 1, paddingBottom: 0 }} header >
                                            <H3 style={[styles.tile, styles.font18]}>{item.title}</H3>
                                        </CardItem>
                                        <CardItem style={{ flex: 1, paddingTop: 5 }}>
                                            <Body>
                                                <Text style={[styles.text_icon_home_detail]}>
                                                    <MaterialIcons name="date-range" size={14} style={[styles.icon_home_deatai]} /> 
                                                    <Text style={[styles.text_icon_home_detail]}>  Hạn dùng: </Text>
                                                <Text style={[styles.text_icon_home_detail_detail]}> {item.expires}</Text>
                                                </Text>
                                                <Text style={[styles.text_icon_home_detail]}>
                                                    <FontAwesome name='industry' size={14} style={[styles.icon_home_deatai]} />
                                                    <Text style={[styles.text_icon_home_detail]}>  Ngành hàng: </Text>
                                                    
                                                <Text style={[styles.text_icon_home_detail_detail]}> {item.cat}</Text>
                                                </Text>
                                                <Text style={[styles.text_icon_home_detail]}>
                                                    <SimpleLineIcons name='note' size={14} style={[styles.icon_home_deatai]} />
                                                    <Text style={[styles.text_icon_home_detail]}>  Lưu ý: </Text>
                                                <Text style={[styles.text_icon_home_detail_detail]}>  {item.note}</Text>
                                                </Text>
                                            </Body>
                                        </CardItem>
                                    </TouchableOpacity>
                                </Card>
                            </Grid>
                        )
                    }
                    keyExtractor={item => item.id}
                />

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        apiurl: state.ApiUrl,
        isConnected: state.isConnected.isConnected
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ checkConnectedDataThunk: checkConnectedDataThunk }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Detail);