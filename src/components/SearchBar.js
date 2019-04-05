import React from 'react';
import { connect } from 'react-redux';
import { enterSearchTerm } from '../actions';

class SearchBar extends React.Component {

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.props.searchTerm);
  }

  onInputChange = e => {
    this.props.enterSearchTerm( e.target.value );
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text"
                   value={this.props.searchTerm}
                   onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
}

export default connect(mapStateToProps, { enterSearchTerm })(SearchBar);
