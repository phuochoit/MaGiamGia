//react redux
import { connect } from 'react-redux';

//componet
import IsConnectedComponent from '../components/isConnected';

// action
import { fetchNetConnected } from "../actions/actionConnected";

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
    }
};
const IsConnectedContainer = connect(mapStateToProps, mapDispatchToProps)(IsConnectedComponent);
export default IsConnectedContainer;