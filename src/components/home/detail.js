import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Container, Body, Icon, Button, Text, View, H3, CardItem, Card, Grid, Input } from "native-base";
import { connect } from "react-redux";
import { upperFirst, split } from "lodash";

import { postData } from "../../api";
import Isloading from "../isloading";
import HeaderApp from "../header";

import styles from "../../../assets/css/styles";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail_Data: [],
            isReady: false,
        }
    }
    componentWillMount() {
        const { state } = this.props.navigation;
        const param = { url: state.params.url };
        postData(this.props.apiurl + 'getListVoucher.php', param).then((temp) => {
            this.setState({
                detail_Data: temp,
                isReady: true
            });
        });
    }

    render() {
        const { navigate, state, goBack } = this.props.navigation;
        const params_name = upperFirst(state.params.name);
        const name = split(params_name, 'tháng');
        const title_menu = "Mã Giám Giá " + name[0];
        if (!this.state.isReady) {
            return (<Isloading />);
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
                                    <Button full success>
                                        <H3 style={{ color: '#fff' }}>Giảm - {item.discount} </H3>
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
                                                    <Icon name='home' style={[styles.icon_home_deatai]} />
                                                    Hạn dùng:
                                                <Text style={[styles.text_icon_home_detail_detail]}>{item.expires}</Text>
                                                </Text>
                                                <Text style={[styles.text_icon_home_detail]}>
                                                    <Icon name='home' style={[styles.icon_home_deatai]} />
                                                    Ngành hàng:
                                                <Text style={[styles.text_icon_home_detail_detail]}>{item.cat}</Text>
                                                </Text>
                                                <Text style={[styles.text_icon_home_detail]}>
                                                    <Icon name='home' style={[styles.icon_home_deatai]} />
                                                    Lưu ý:
                                                <Text style={[styles.text_icon_home_detail_detail]}>{item.note}</Text>
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
    }
}
export default connect(mapStateToProps)(Detail);