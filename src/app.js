import React, {Component} from 'react';
import ArticleList from './components/article-list';
import Select from 'react-select';
import DatePicker from './components/datepicker';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

class App extends Component {
    state = {
        selected: null,
        dateSelected: null
    };

    render() {
        console.log('---', this.state);
        return (
            <section className="articles container">
                <div className="row">
                    <main className="articles__list col-sm-8">
                        <ArticleList articles={this.props.articles}/>
                    </main>
                    <aside className="articles__aside col-sm-4">
                        <div className="articles__search">
                            <Select options={this.options}
                                    value={this.state.selected}
                                    onChange={this.changeSelection}
                                    placeholder="Выберите..."
                                    isMulti />
                        </div>
                        <DatePicker />
                    </aside>
                </div>
            </section>
        )
    }

    get options() {
        return this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
    }

    changeSelection = selected => this.setState({ selected });
}

export default App;
