import React from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
    return (
        <React.Fragment>
            
            <div className="container-fluid p-0" style={{ paddingTop: '6rem' }} >
              <HomeBanner/>
                <div className="container">
                    <FilterBar/>
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;
