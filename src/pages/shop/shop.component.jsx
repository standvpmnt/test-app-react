import React from "react";
// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import { Route } from "react-router-dom";
// import CollectionPage from "../collection/collection.component";
import CollectionPageContainer from "../collection/collection.container";
// import {
//   firestore,
//   convertCollectionSnapshotToMap,
// } from "../../firebase/firebase.utils";
// import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import // selectIsCollectionFetching,
// selectIsCollectionsLoaded,
"../../redux/shop/shop.selectors";
// import { updateCollections } from "../../redux/shop/shop.actions";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  // state = { loading: true };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // collectionRef.get().then(snapshot => {
    //   // collectionRef.onSnapshot(async snapshot => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    //   // }
    // });
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/starting-react/databases/(default)/documents/collections"
    // )
    //   .then(response => response.json)
    //   .then(collections => console.log(collections));
  }

  render() {
    // const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    // const { match, isCollectionLoaded } = this.props;
    const { match } = this.props;

    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // render={props => (
          // <CollectionsOverviewWithSpinner
          //   isLoading={isCollectionFetching}
          //   {...props}
          // />
          // )}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // render={props => (
          //   <CollectionPageWithSpinner
          //     isLoading={!isCollectionLoaded}
          //     {...props}
          //   />
          component={CollectionPageContainer}
          // )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  // updateCollections: collectionsMap =>
  //   dispatch(updateCollections(collectionsMap)),
});

const mapStateToProps = createStructuredSelector({
  // isCollectionFetching: selectIsCollectionFetching,
  // isCollectionLoaded: selectIsCollectionsLoaded,
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
