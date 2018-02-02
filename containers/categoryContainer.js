//react redux
import { connect } from 'react-redux';

//componet
import CategoryComponent from "../components/category/categoryComponent";

// action
import { FetchCategoryAction } from "../actions/actionCategory";

const mapStateToProps = (state) => {
    console.log('state', state );
    return {
        category: state.category,
        isConnected: state.isConnected.isConnected,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        _onFetchCategory: () => {
            dispatch(FetchCategoryAction())
        }
    }
};
const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);
export default CategoryContainer;