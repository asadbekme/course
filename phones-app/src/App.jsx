import { Component } from "react";
import { phones } from "./data/db";

class App extends Component {
  state = {
    phones: [],
  };

  componentDidMount() {
    this.setState({ phones: phones });
  }

  removePhone = (id) => {
    const { phones } = this.state;
    phones.splice(id, 1);
    // const filteredPhones = phones.filter((phone) => phone.id !== id);
    // console.log(filteredPhones);
    this.setState({ phones });
  };

  render() {
    return (
      <div className="phones">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center my-4">Phones Market</h2>
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>N</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Brand</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {phones.map((phone, index) => (
                    <tr key={phone.id}>
                      <td>{phone.id}</td>
                      <td>{phone.title}</td>
                      <td>${phone.price}</td>
                      <td>{phone.rating}</td>
                      <td>{phone.brand}</td>
                      <td>
                        <img
                          style={{ width: "40px", height: "30px" }}
                          src={phone.thumbnail}
                          alt="Phone image"
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => this.removePhone(index)}
                          className="btn btn-danger btn-sm"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
