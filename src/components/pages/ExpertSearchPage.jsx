import React from 'react';

import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    ListInput,
    Row,
    Col,
    Input,
    Icon,
    Chip,
    Label,
    Button
} from 'framework7-react';
import Autosuggest from 'react-autosuggest';


// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },{
    name: 'C++',
    year: 2012
  },{
    name: 'C#',
    year: 2012
  },{
    name: 'Java',
    year: 2012
  },{
    name: 'JavaScript',
    year: 2012
  },{
    name: 'RxJava',
    year: 2012
  },
  {
    name: 'RxJavaScript',
    year: 2012
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);



export default class extends React.Component {

  // var fruits;

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };
  }

  componentDidMount(){
    this.$f7ready((app) => {
      var autocomplete = app.autocomplete.create({
        // inputEl:"#autocomplete-dropdown",
        openIn:"dropdown",
        source: async function(query, render){
          console.log(query);
        }
      });

    });
  }

  onChange = (event, { newValue }) => {
    console.log("HELO");
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  render() {
    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };
    return (
      <Page>
        <Navbar title="Expert search" backLink="Back"  > </Navbar>
        <BlockTitle>Expert search based on skill details</BlockTitle>
        <Block>

          <List noHairlinesMd>
            <ListItem>
              <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                />
            </ListItem>

            <ListItem>
            <Label>Name</Label>
              <Input
                type="text"
                placeholder="Skill name"
                id="autocomplete-dropdown"
                onChange={(e) => console.log(e.target.value)}
                // onChange = this.onChange
              >
              </Input>

            </ListItem>
            <ListItem>
              <Block>
                <Chip text="Example Chip" />
                <Chip text="Another Chip" />
                <Chip text="One More Chip" />
                <Chip text="Fourth Chip" />
                <Chip text="Last One" />
              </Block>
            </ListItem>

            <ListItem>
              <Input
                label="Skill name"
                type="text"
                placeholder="Skill name"
                clearButton
              >
              </Input>

            </ListItem>
            <ListItem>
              <Block>
                <Chip text="Example Chip" />
                <Chip text="Another Chip" />
                <Chip text="One More Chip" />
                <Chip text="Fourth Chip" />
                <Chip text="Last One" />
              </Block>
            </ListItem>

            <ListItem>
            <Input
              label="Phone"
              type="text"
              placeholder="Your phone number"
              clearButton
            >
              <Icon icon="demo-list-icon" slot="media"/>
            </Input>
            </ListItem>

          </List>

        </Block>

        <BlockTitle>Expert search based on user details</BlockTitle>
        <Block>

        </Block>

      </Page>
    )
  }

};
