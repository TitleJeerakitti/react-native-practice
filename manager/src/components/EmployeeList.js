import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import {
    fetchEmployeeList
} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {  // at the start of this file will run this method
        this.props.fetchEmployeeList();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still old set of props
        // P.S. we can use both of this.props and this.nextProps

        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = ({ home }) => {
    // this transform object to arrays
    const employees = _.map(home, (val, uid) => {
        return { ...val, uid };
    });

    // const test = { text: 'eiei0' }; --> normal form

    return { employees };
};

export default connect(mapStateToProps, { fetchEmployeeList })(EmployeeList);
