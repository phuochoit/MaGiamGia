import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent';

const mapStateToProps = (state) => {
    console.log('state---', state);
    return {}
};

const mapDispatchToProps = (dispatchstate) => {
    return {}
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;