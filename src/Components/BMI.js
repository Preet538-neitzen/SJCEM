
import React, { Component } from "react";


class BMI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            weight: "",
            height: "",
            bmi: "",
            message: "",
            time: new Date().toLocaleTimeString()
        };
        //binding the methods used to this
        this.handleSubmit = this.handleSubmit.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.ticker = this.ticker.bind(this);
        this.getBMI = this.getBMI.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }

    componentDidMount() {
        setInterval(this.ticker, 1000);
    }

    ticker() {
        this.setState({ time: new Date().toLocaleTimeString() });
    }

    heightChange(e) {
        this.setState({ height: e.target.value });
        e.preventDefault();
    }

    weightChange(e) {
        this.setState({ weight: e.target.value });
        e.preventDefault();
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ name: e.target.value });
    }

    getBMI() {
        this.calculateBMI();
    }

    calculateBMI() {
        let bmi = this.state.weight / this.state.height / this.state.height;

        this.setState({
            bmi: bmi.toFixed(1)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.calculateBMI();
    }

    render() {
        const { name, weight, height, bmi } = this.state;
        const buttonDisabled = !name || !weight || !height;

        return (
            <div class="hello">
                <div className="">
                    <h2>BMI Calculator</h2>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                    
                    </div>
                    <div class="col-md-12">
                        <div class="form-group position-relative">
                            <label>Weight <span class="text-danger">*</span></label>
                            <i class="mdi mdi-email ml-3 icons"></i>
                            <input  type="number"
                        name="weight" 
                        class="make"
                        step="0.1"
                        data-testid="weight-input"
                        value={this.state.weight}
                        onChange={this.weightChange} class="form-control pl-5" placeholder="Enter weight :"/>
                        </div> 
                    </div>
                    <div class="col-md-12">
                        <div class="form-group position-relative">
                            <label>Height(in meter)</label>
                            <i class="mdi mdi-book ml-3 icons"></i>
                            <input  type="number"
                        name="height"
                        class="make"
                        step ="0.1"
                        data-testid="height-input"
                        value={this.state.height}
                        onChange={this.heightChange} class="form-control pl-5" placeholder="Enter height :"/>
                        </div>                                                                               
                    </div>


{/* <label class="make">Enter your weight in kgs:</label>
                    <input
                        type="number"
                        name="weight" 
                        class="make"
                        step="0.1"
                        data-testid="weight-input"
                        value={this.state.weight}
                        onChange={this.weightChange}
                    />
                    <br />
                    <label class="make">Enter your height in metres:</label>
                    <input
                        type="number"
                        name="height"
                        class="make"
                        step ="0.1"
                        data-testid="height-input"
                        value={this.state.height}
                        onChange={this.heightChange}
                    /> */}
                    <br />
                    <input
                        type="submit"
                        class="make"
                        data-testid="submit-button"
                       
                        value="Submit"
                    />
                    <br />
                    <br />
                   
                    
                    <div data-testid="bmi-score">
                        Your BMI is {this.state.bmi}
                    </div>
                    <br />
                    <table className="bmirange">
                        <tbody>
                            <tr
                                data-testid="bmi-row"
                                className={bmi >= 30 ? "your-bmi" : ""}
                            >


<td>Obese:</td>
                                <td>30 or more</td>
                            </tr>
                            <tr
                                data-testid="bmi-row"
                                className={
                                    bmi >= 25 && bmi <= 29.9 ? "your-bmi" : ""
                                }
                            >
                                <td>Overweight:</td>
                                <td>25 to 29.9</td>
                            </tr>
                            <tr
                                data-testid="bmi-row"
                                className={
                                    bmi >= 18.5 && bmi <= 24.9 ? "your-bmi" : ""
                                }
                            >
                                <td>Normal:</td>
                                <td>18.5 to 24.9</td>
                            </tr>
                            <tr
                                data-testid="bmi-row"
                                className={
                                    bmi > 0 && bmi <= 18.4 ? "your-bmi" : ""
                                }
                            >
                                <td>Underweight:</td>
                                <td>18.4 and below</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}
export default BMI;