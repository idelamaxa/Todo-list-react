import React from "react";

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			text: "",
			items: []
		};
	}

	handleData(e) {
		this.setState({
			text: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault(e);
		//validacion
		if (this.state.text.length <= 0) {
			return alert("El campo esta vacío");
		}

		const newItem = {
			text: this.state.text
		};

		this.setState({
			items: this.state.items.concat(newItem)
		});
	}

	removeItem(index, e) {
		const itemes = this.state.items;
		itemes.splice(index, 1);
		//alert(index);
		this.setState({ itemes });
	}

	render() {
		const list = this.state.items.map((item, index) => (
			<li key={index}>
				<button onClick={e => this.removeItem(index, e)}>X</button>
				{item.text}
			</li>
		));

		return (
			<div>
				<h1>Todo List</h1>
				<form onSubmit={e => this.handleSubmit(e)}>
					<input
						type="texto"
						value={this.state.text}
						onChange={e => this.handleData(e)}
						placeholder="Agregar tarea"
					/>
					<button className="btn btn-success">
						Add {this.state.items.length + 1}
					</button>
				</form>
				<h4>Lista </h4> <br />
				<ul>{list}</ul>
				<p>Total tareas {this.state.items.length}</p>
			</div>
		);
	}
}

export default TodoList;
