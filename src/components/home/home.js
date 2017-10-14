import React from "react";
import { FlatList, TouchableOpacity} from "react-native";
import { Container, Body, Content, Header, Title, Text, View, Thumbnail } from "native-base";
import { connect } from "react-redux";

import { fetchDataThunk } from "../../redux/actions/fechActions"
import styles from "../../../assets/css/styles";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    componentWillMount() {
        const { apiurl } = this.props;
        this.props.fetchDataThunk(apiurl,"Home");
    }
    
    _onRefresh(){
        this.setState({
            refreshing: true,
        });
        this.props.fetchDataThunk(this.props.apiurl, "Home");
        this.setState({
            refreshing: false
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        const { data , month } = this.props;
        
        return (
            <Container>
                <Header backgroundColor="#00AA8D" androidStatusBarColor='#008975'>
                    <Body style={[styles.flex1, styles.headerBody]}>
                        <Title>Mã giám giá tháng {month}</Title>
                    </Body>
                </Header>
                <Content padder style={[styles.flex1]}>
                    <FlatList
                        data={data.home}
                        renderItem={
                            ({ item }) => (
                                <TouchableOpacity 
                                    style={{ padding: 5, marginBottom: 15, flex: 1}}
                                    onPress={() => { navigate('Detail', { url: item.url, name: item.name})}}
                                    >
                                    <View style={{flex:1}}>
                                        <Thumbnail square source={{ uri: item.image }} style={[styles.imagehome]} />
                                        <Text>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )   
                        }
                        keyExtractor={item => item.id}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        horizontal={false}
                        numColumns={2}
                    />
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        apiurl: state.ApiUrl,
        data: state.DataHome,
        month: state.today.month
    };
}

export default connect(mapStateToProps, {fetchDataThunk})(Home);