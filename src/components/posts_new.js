import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input className="form-control"
					type="text"
					{...field.input}
				/>
			</div>
		);
	}

	onSubmit(values) {
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field 
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}

}

function validate() {
	const errors = {};

	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);




// import React, { Component } from 'react';

// class PostsNew extends Component {

// 	render() {
// 		return (
// 			<div>
// 				Posts New!
// 			</div>
// 		);
// 	}

// }

// export default PostsNew;