import { connect } from 'react-redux';
import HomeComponent from '../../components/home/HomeComponent';

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatchstate) => {
    return {}
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;