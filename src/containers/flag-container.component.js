import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries } from '../actions/actions-countries';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getCountries());
    }
    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <CountryFlagList countries={this.props.countries} />
            </div>
        )
    }
}
const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);