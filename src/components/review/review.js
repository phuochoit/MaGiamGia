import React from "react";
import { FlatList, Image, TouchableOpacity} from "react-native";
import { Container, Grid, Card, Button, CardItem, Text, View, Title} from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { concat, isUndefined, lowerCase, isNull } from "lodash";

// import style app
import HeaderApp from "../header";
import Isloading from "../isloading";
import IsConnected from "../isConnected";
import { getDataByParams } from "../../api";
import { checkConnectedDataThunk } from "../../redux/actions/connectedActions";
import styles from "../../../assets/css/styles";

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isReady: false,
            data: [],
            page: 1
        };

        this.props.checkConnectedDataThunk();
    }

    componentDidMount() {
        const { apiurl, weburl } = this.props;
        let url = { url: weburl + "review/page/" + this.state.page};
        getDataByParams(this.props.apiurl + 'getListTutorial.php' , url).then((temp) => {
            if (!isUndefined(temp)) {
                this.setState({
                    data: temp,
                    isReady: true,
                    page: this.state.page + 1
                });
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isConnected && isNull(this.state.data)) {
            const { apiurl, weburl } = this.props;
            let url = { url: weburl + "review/page/" + this.state.page };
            getDataByParams(this.props.apiurl + 'getListTutorial.php', url).then((temp) => {
                if (!isUndefined(temp)) {
                    this.setState({
                        data: temp,
                        isReady: true,
                        page: this.state.page + 1
                    });
                }
            });
        }
    }


    _onRefresh() {
        this.setState({
            refreshing: true,
        });
        let url = { url: this.props.weburl + "review/page/1" };
        getDataByParams(this.props.apiurl + 'getListTutorial.php', url).then((temp) => {
            if (!isUndefined(temp)) {
                this.setState({
                    data: temp,
                    refreshing: false,
                    page: 2
                });
            }
        });

    }

    _onEndReached(){
        let url = { url: this.props.weburl + "review/page/" + this.state.page };
        getDataByParams(this.props.apiurl + 'getListTutorial.php', url).then((temp) => {
            if (!isUndefined(temp)) {
                this.setState({
                    data: concat(this.state.data, temp),
                    page: this.state.page + 1
                });
            }
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { isConnected } = this.props;

        if (!isConnected) {
            return (<IsConnected navigation={this.props.navigation} menuleft="0" menuright="0" menutitle="Review đơn hàng"/>);
        }

        if (!this.state.isReady) {
            return (<Isloading navigation={this.props.navigation} menuleft="0" menuright="0" menutitle="Review đơn hàng"/>);
        }

        

        return (
            <Container>
                
                <HeaderApp navigation={this.props.navigation} menuleft="0" menuright="0" menutitle="Review đơn hàng" /> 
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <Grid style={{ marginHorizontal: 10 }}>
                            <Card>
                                <TouchableOpacity
                                    onPress={() => { navigate('DetailReview', { url: item.url, title: item.title }) }}
                                >
                                    <CardItem header>
                                        <Title style={[styles.tile]}>{item.title}</Title>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={{ uri: item.thumbnail }} style={[styles.imagefullwidth]} />
                                    </CardItem>
                                    <CardItem footer>
                                        <Text>
                                            {item.content}
                                            <Text style={[styles.tile]}>[Xem tiếp]</Text>
                                        </Text>
                                    </CardItem>
                                </TouchableOpacity>
                            </Card>
                        </Grid>
                        )}
                    keyExtractor={item => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onEndReached.bind(this)}
                />
            </Container>
        );
    }
}
function mapStateToProps(state){
    return {
        apiurl: state.ApiUrl,
        weburl: state.WebUrl,
        isConnected: state.isConnected.isConnected
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ checkConnectedDataThunk: checkConnectedDataThunk }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Review);