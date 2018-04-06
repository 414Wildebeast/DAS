import React, { Component } from 'react';
import { Grid, Button, Header, Checkbox, Segment, TextArea, Dropdown, Form, Modal } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'TEST',
      color: 'green',
      message: '',
      mediums: [],
      areas: [],
    };
  }

  render() {
    return (
      <Grid stackable container>
        <Grid.Row/>
        <Grid.Row stretched>
          <Grid.Column width={8}>
            <Segment.Group>
              <Segment color={this.state.color} tertiary inverted content='Message'/>
              <Segment>
                <Dropdown search selection placeholder='Templates' onChange={this.dropdownChange}
                          options={[
                            { text: 'Tsunami', value: 'tsunami' },
                            { text: 'Flash Flood', value: 'flood' },
                            { text: 'Fire', value: 'fire' },
                            { text: 'Asteroid', value: 'asteroid' },
                            { text: 'Missile', value: 'missile' },
                            { text: 'None', value: '' },
                          ]}/>
                <br/>
                <Form>
                  <TextArea rows={10} autoHeight value={this.state.message} onChange={this.textareaChange}/>
                </Form>
              </Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column width={8}>
            <Segment.Group>
              <Segment color={this.state.color} inverted tertiary content='Mediums'/>
              <Segment>
                <Grid columns={5}>
                  <Grid.Column><Checkbox label='All'/></Grid.Column>
                  <Grid.Column><Checkbox label='Sirens'/></Grid.Column>
                  <Grid.Column><Checkbox label='TV'/></Grid.Column>
                  <Grid.Column><Checkbox label='Radio'/></Grid.Column>
                  <Grid.Column><Checkbox label='Text'/></Grid.Column>
                </Grid>
              </Segment>
            </Segment.Group>

            <Segment.Group>
              <Segment color={this.state.color} inverted tertiary content='Areas'/>
              <Segment>
                <Grid columns={5}>
                  <Grid.Column><Checkbox label='All'/></Grid.Column>
                  <Grid.Column><Checkbox label='Big Island'/></Grid.Column>
                  <Grid.Column><Checkbox label='Maui'/></Grid.Column>
                  <Grid.Column><Checkbox label='O`ahu'/></Grid.Column>
                  <Grid.Column><Checkbox label='Kaua`i'/></Grid.Column>
                  <Grid.Column><Checkbox label='Moloka`i'/></Grid.Column>
                  <Grid.Column><Checkbox label='Lana`i'/></Grid.Column>
                </Grid>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column width={3} floated='left'>
            <Segment.Group horizontal>
              <Segment color={this.state.color} inverted>
                <Header as='h1' content={this.state.header}/>
              </Segment>
              <Segment>
                <Header as='h1' content={<Checkbox slider onChange={this.sliderChange}/>}/>
              </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={5} floated='right'>
            <Modal trigger={<Button floated='right' size='massive' content='Submit' color={this.state.color}
                                    onClick={this.submit}/>}>
              <Modal.Content>
                ' '
              </Modal.Content>
            </Modal>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }

  dropdownChange = (event, props) => {
    let message = '';
    switch (props.value) {
      // @formatter:off
      case 'tsunami': message = 'A tsunami is estimated to hit LOCATION_A at TIME. Please evacuate to LOCAION_B'; break;
      case 'flood' : message = 'Flash flood warning for LOCATION. Please avoid LOCATION until further notice.'; break;
      case 'fire' : message = 'There is a fire at LOCATION. Please avoid driving on STREET_LIST.'; break;
      case 'asteroid' : message = 'Stay one ass-ter-roid comin\' in hot. We fucked bois'; break;
      case 'missile' : message = 'Today\'s weather is missile.'; break;
      default: break;
      // @formatter:on
    }
    this.setState({ message });
  };

  textareaChange = (event, props) => { this.setState({ message: props.value }); };

  sliderChange = () => {
    const header = this.state.header === 'REAL' ? 'TEST' : 'REAL';
    const color = this.state.color === 'red' ? 'green' : 'red';
    this.setState({ header, color });
  };
}

export default App;
