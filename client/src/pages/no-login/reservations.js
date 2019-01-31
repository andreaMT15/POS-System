import React from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { distanceInWordsToNow } from "date-fns";

class Reservations extends React.Component {
    state = {
        restaurantID: "",
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        partySize: ""
    };
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        // console.log(`${name}: ${value}`);
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log("handleFormSubmit");
        const submit = {
            restaurantID: this.state.restaurantID,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            date: this.state.date,
            time: this.state.time,
            partySize: this.state.partySize
        };
        console.log("Res", submit);

        API.createReservation(submit)
            .then(res => {
                console.log("res", res);
                this.setState({ restaurantID: "", name: "", email: "", phone: "", date: "", time: "", partySize: "" });
                // console.log(this.state);
            })
            .catch(err => console.log("err", err));

        console.log("handleFormSubmit");

        // API.getReservation().then(res => console.log("res", res)).catch(err => console.log("err", err));
    };

    render() {
        const restID = sessionStorage.getItem("restID");

        if (restID && typeof restID == "string") {
            this.state.restaurantID = restID;
        };

        return (
            <div>
                <form>
                    <Input
                        onChange={this.handleInputChange}
                        name="restaurantID"
                        placeholder="Restaurant Name"
                        value={this.state.restaurantID}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="First &amp; Last Name"
                        value={this.state.name}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="phone"
                        type="number"
                        placeholder="Phone"
                        value={this.state.phone}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="date"
                        type="String"
                        placeholder="Date"
                        value={this.state.date}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="time"
                        type="number"
                        placeholder="Time"
                        value={this.state.time}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="partySize"
                        type="number"
                        placeholder="Party Size"
                        value={this.state.partySize}
                    />
                    <FormBtn onClick={this.handleFormSubmit}>
                        Create New Reservation
          </FormBtn>
                </form>
            </div>
        );
    }
}

export default Reservations;
