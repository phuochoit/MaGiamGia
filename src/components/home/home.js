import React from "react";
import { FlatList, TouchableOpacity, Image } from "react-native";
import { Container, Grid, Card, CardItem} from "native-base";
import { connect } from "react-redux";
import { capitalize } from "lodash";
import { bindActionCreators } from "redux";

import Isloading from "../isloading";
import IsConnected from "../isConnected";
import HeaderApp from "../header";
import { getData } from "../../api";
import { checkConnectedDataThunk } from "../../redux/actions/connectedActions";
import styles from "../../../assets/css/styles";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isReady: false,
            data: [],

        };
        this.props.checkConnectedDataThunk();
    }
    
    componentWillMount() {
        getData(this.props.apiurl).then((temp) => {
            this.setState({
                data: temp,
                isReady: true
            });
        });

    }

    _onRefresh() {
        this.setState({
            refreshing: true,
        });

        getData(this.props.apiurl).then((temp) => {
            this.setState({
                data: temp,
                refreshing: false
            });
        });

    }
    render() {
        const { navigate } = this.props.navigation;
        const { month, isConnected } = this.props;
        const title_menu = "Mã giám giá tháng " + month;
        if (!isConnected){
            return (<IsConnected />);
        }

        if (!this.state.isReady) {
            return (<Isloading />);
        }
        return (
            <Container>
                <HeaderApp navigation={this.props.navigation} menuleft="0" menuright="0" menutitle={title_menu} />
                <FlatList
                    style={{ marginVertical: 10 }}
                    data={this.state.data}
                    renderItem={
                        ({ item }) => (

                            <Grid style={{ marginHorizontal: 5 }}>
                                <Card>
                                    <TouchableOpacity
                                        onPress={() => { navigate('Detail', { url: item.url, name: capitalize(item.name) }) }} >
                                        <CardItem style={{ justifyContent: "center" }}>
                                            <Image square source={{ uri: item.image }} style={[styles.imagehome]} />
                                        </CardItem>
                                    </TouchableOpacity>
                                </Card>
                            </Grid>

                        )
                    }
                    keyExtractor={item => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    horizontal={false}
                    numColumns={2}
                />

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        apiurl: state.ApiUrl,
        month: state.today.month,
        isConnected: state.isConnected.isConnected
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ checkConnectedDataThunk: checkConnectedDataThunk}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);