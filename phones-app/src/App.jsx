import { Component } from "react";
import { phones } from "./data/db";
import PhoneCard from "./components/phone-card";

class App extends Component {
  state = {
    phones: [],
    cardVisibility: false,
  };

  componentDidMount() {
    this.setState({ phones: phones });
  }

  openCard = () => {
    this.setState({ cardVisibility: true });
  };

  closeCard = () => {
    this.setState({ cardVisibility: false });
  };

  removePhone = (id) => {
    const { phones } = this.state;
    // phones.splice(id, 1);
    const filteredPhones = phones.filter((phone) => phone.id !== id);
    console.log(filteredPhones);
    this.setState({ phones: filteredPhones });
  };

  render() {
    const { phones, cardVisibility } = this.state;
    return (
      <div className="phones">
        <div className="container">
          <h2 className="text-center">Phones Market</h2>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary my-4" onClick={this.openCard}>
                Add a phone
              </button>
              {cardVisibility ? <PhoneCard closeCard={this.closeCard} /> : ""}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
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
                      <td>{index + 1}</td>
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
                          onClick={() => this.removePhone(phone.id)}
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
