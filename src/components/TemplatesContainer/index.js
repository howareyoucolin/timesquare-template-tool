import React from 'react';
import templateApi from '~src/includes/templateApi';
import Card from './Card';
import Search from './Search';
import './templatesContainer.scss';

class TemplatesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      templates: [],
    };
  }

  async componentDidMount() {
    const { data } = await templateApi.get();
    this.setState({
      loaded: true,
      templates: data,
    });
  }

  render() {
    return (
      <div className="TemplatesContainer">
        <Search />

        <div className="templates">
          {!this.state.loaded ? (
            <div>Loading ...</div>
          ) : (
            this.state.templates.map(template => {
              const { id } = template;
              return <Card key={id} {...template} />;
            })
          )}
        </div>
      </div>
    );
  }
}

export default TemplatesContainer;
