//react redux
import { connect } from 'react-redux';

//componet
import TopProductDetailComponent from '../components/home/topProductDetailComponent';

// action
import { fetchNetConnected } from "../actions/actionConnected";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        }
    }
};
const TopProductDetailContainer = connect(mapStateToProps, mapDispatchToProps)(TopProductDetailComponent);
export default TopProductDetailContainer;