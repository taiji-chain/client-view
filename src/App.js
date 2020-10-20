import React, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './components/Home';
import CurrencyBalance from './components/CurrencyBalance';
import CurrencyTransaction from './components/CurrencyTransaction';
import KycCreated from './components/KycCreated';
import KycUpdated from './components/KycUpdated';
import KycInfo from './components/KycInfo';
import KycEvent from './components/KycEvent';
import Success from './components/Success';
import Failure from './components/Failure';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Form from './components/Form';
import PrivacyPolicy from './components/PrivacyPolicy';

export const history = createBrowserHistory();

class App extends Component {

    state = {
        address: '',
        amount: '',
        currency: 'taiji',
        unit: 'TAIJI',
        currencyMap: undefined,
        transactions: undefined
    };

    handleChange = name => event => {
        //console.log(name, event.target.value);
        this.setState({
            [name]: event.target.value,
        });
    };

    getBalance = async (e) => {
        e.preventDefault();
        //console.log('address', this.state.address);
        const api_call = await fetch(`/faucet/${this.state.address}`);
        const data = await api_call.json();
        //console.log(data);
        if (data) {
            this.setState({
                currencyMap: data
            });
        } else {
            this.setState({
                currencyMap: undefined
            });
        }
    };

    postFaucet = async (e) => {
        e.preventDefault();
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: this.state.amount,
                currency: this.state.currency,
                unit: this.state.unit
            })
        };

        const api_call = await fetch(`/faucet/${this.state.address}`, settings)
        const data = await api_call.json();
        if (data) {
            this.setState({
                currencyMap: data
            });
        } else {
            this.setState({
                currencyMap: undefined
            });
        }
    };

    getTransaction = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`/faucet/${this.state.address}/${this.state.currency}`);
        const data = await api_call.json();
        //console.log(data);
        if (data) {
            this.setState({
                transactions: data
            });
        } else {
            this.setState({
                transactions: undefined
            });
        }
    };


    render() {
        return (
            <BrowserRouter>
                <ResponsiveDrawer>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/form/:formId" component={Form} />
                        <Route path="/currencyBalance" component={CurrencyBalance} />
                        <Route path="/currencyTransaction" component={CurrencyTransaction} />
                        <Route path="/kycCreated" component={KycCreated} />
                        <Route path="/kycUpdated" component={KycUpdated} />
                        <Route path="/kycInfo" component={KycInfo} />
                        <Route path="/kycEvent" component={KycEvent} />
                        <Route path="/success" component={Success} />
                        <Route path="/failure" component={Failure} />
                        <Route path="/privacy" component={PrivacyPolicy} />
                    </Switch>
                </ResponsiveDrawer>
            </BrowserRouter>
        );
    }
}

export default App;
