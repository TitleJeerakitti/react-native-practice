import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Header, Input, Checkbox, Footer } from './common';
import { 
    listCreate,
    listCheck,
    listRemove,
    listRemoveComplete
} from '../actions';

class Home extends Component {
    state = {
        text: '',
    }

    pressSubmit = () => {
        const {text} = this.state;
        this.props.listCreate(text);
        this.setState({text: ''})
    }

    onChangeText = (text) => {
        this.setState({text})
    }

    renderItem = (item, i) => {
        const { text, complete } = item;
        
        return (
            <Checkbox 
                key={i}
                label={text}
                complete={complete}
                onPress={() => this.props.listCheck(i)}
                onPressDelete={() => this.props.listRemove(i)}
            />
        )
    }

    render() {
        // console.log(this.props.items)
        const { text } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    barStyle="light-content"
                />
                <Header>Todo List</Header>
                <Input 
                    placeholder='Enter an item!'
                    value={text}
                    onChangeText={this.onChangeText.bind(this)}
                    onSubmitEditing={this.pressSubmit.bind(this)}
                />
                <ScrollView>
                    {this.props.items.map(this.renderItem)}
                </ScrollView>
                <Footer
                    onPress={() => this.props.listRemoveComplete()}
                >
                    Remove complete items
                </Footer>
            </View>
        );
    }
}

const mapStateToProps = ({ home }) => {
    const { items } = home;
    return { items };
};

export default connect(mapStateToProps, {
    listCreate,
    listCheck,
    listRemove,
    listRemoveComplete,
})(Home);