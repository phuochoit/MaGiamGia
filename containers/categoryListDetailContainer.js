//react redux
import { connect } from 'react-redux';

//componet
import CategoryListDetailComponent from "../components/category/categoryListDetailComponent";

// action
import { FetchListCategoryAction, FetchTabListCategoryAction, FetchRefreShingTabCouponListAction} from "../actions/actionListDetailCategory";
import { fetchNetConnected } from "../actions/actionConnected";

const mapStateToProps = (state) => {
    return {
        categoryListDetail: state.categoryListDetail,
        isConnected: state.isConnected.isConnected,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        _onFetchListCategory: (action) => {
            dispatch(FetchListCategoryAction(action))
        },
        _onFetchTabListCategory: (action) => {
            dispatch(FetchTabListCategoryAction(action))
        },
        _onFetchRefreShingTabListCategory: (action) => {
            dispatch(FetchRefreShingTabCouponListAction(action))
        },
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        }
    }
};
const CategoryListDetailContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryListDetailComponent);
export default CategoryListDetailContainer;