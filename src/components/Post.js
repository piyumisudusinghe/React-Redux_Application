import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';
import PropTypes from 'prop-types'; 

class Post extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost); 
        }
    }


    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Post</h1>
                {postItems}
            </div>
        );
    }
}

Post.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object  
}

const mapStateToProps = state => ({
    posts:state.posts.items,
    newPost:state.posts.item
});
//conncet component to the redux store
export default connect (mapStateToProps, {fetchPosts}) (Post);
