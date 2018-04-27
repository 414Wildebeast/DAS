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
      showAll: true,
      showSiren: true,
      showTv: true,
      showRadio: true,
      showText: true,
      showModal: false,
      modes: [],
      locations: [],
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
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
                    {this.state.showAll ?
                        <Grid.Column>
                          <Checkbox onChange={this.handleModes} label='All'
                                    checked={this.state.modes.includes('All')}/>
                        </Grid.Column> : ''}
                    {this.state.showSiren ?
                        <Grid.Column>
                          <Checkbox onChange={this.handleModes} label='Sirens'
                                    checked={this.state.modes.includes('Sirens')}/>
                        </Grid.Column> : ''}
                    {this.state.showTv ?
                        <Grid.Column>
                          <Checkbox onChange={this.handleModes} label='TV'
                                    checked={this.state.modes.includes('TV')}/>
                        </Grid.Column> : ''}
                    {this.state.showRadio ?
                        <Grid.Column>
                          <Checkbox onChange={this.handleModes} label='Radio'
                                    checked={this.state.modes.includes('Radio')}/>
                        </Grid.Column> : ''}
                    {this.state.showText ?
                        <Grid.Column>
                          <Checkbox onChange={this.handleModes} label='Text'
                                    checked={this.state.modes.includes('Text')}/>
                        </Grid.Column> : ''}
                  </Grid>
                </Segment>
              </Segment.Group>


              <Segment.Group>
                <Segment color={this.state.color} inverted tertiary content='Areas'/>
                <Segment>
                  <Grid columns={5}>
                    <Grid.Column><Checkbox onChange={this.handleLocations} label='All'
                                           checked={this.state.locations.includes('All')}/></Grid.Column>
                    <Grid.Column><Checkbox onChange={this.handleLocations} label='Big Island'
                                           checked={this.state.locations.includes('Big Island')}/></Grid.Column>
                    <Grid.Column><Checkbox onChange={this.handleLocations} label='Maui'
                                           checked={this.state.locations.includes('Maui')}/></Grid.Column>
                    <Grid.Column><Checkbox onChange={this.handleLocations} label='O`ahu'
                                           checked={this.state.locations.includes('O`ahu')}/></Grid.Column>
                    <Grid.Column><Checkbox onChange={this.handleLocations} label='Kaua`i'
                                           checked={this.state.locations.includes('Kaua`i')}/></Grid.Column>
                    <Grid.Column><Checkbox onChange={this.handleLocations} label='Moloka`i'
                                           checked={this.state.locations.includes('Moloka`i')}/></Grid.Column>
                    <Grid.Column><Checkbox onChange={this.handleLocations} label='Lana`i'
                                           checked={this.state.locations.includes('Lana`i')}/></Grid.Column>
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
                <Modal.Content isOpen={this.state.showModal}>
                  <textfield> Form Submitted</textfield>
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid.Row>
          {this.state.showBob ? 'Bob' : ''}
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

  handleModes = (event, props) => {
    let modes = this.state.modes;
    if (props.label === 'All') modes = props.checked ? ['All', 'Sirens', 'TV', 'Radio', 'Text'] : [];
    else if (props.checked) modes.push(props.label);
    else modes = modes.filter(mode => mode !== props.label);
    this.setState({ modes });
  };

  handleLocations = (event, props) => {
    let locations = this.state.locations;
    if (props.label === 'All') locations = props.checked ?
        ['All', 'Big Island', 'Maui', 'O`ahu', 'Kaua`i', 'Moloka`i', 'Lana`i'] : [];
    else if (props.checked) locations.push(props.label);
    else locations = locations.filter(location => location !== props.label);
    this.setState({ locations });
  };

  sliderChange = () => {
    const header = this.state.header === 'REAL' ? 'TEST' : 'REAL';
    const color = this.state.color === 'red' ? 'green' : 'red';
    this.setState({ header, color });
  };
}

export default App;