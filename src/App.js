import React, { Component } from 'react';
import { Container, Segment, Grid, Header, Card } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Grid centered>
          <Grid.Row/>
          <Grid.Column width={12}>
            <Segment textAlign='center'><Header>DAS</Header></Segment>
          </Grid.Column>
          <Grid.Row stretched>
            <Grid.Column width={6}>
              <Segment attached='top' content='Alert Type:' compact/>
              <Segment attached='bottom'></Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment attached='top' content='Options:' compact/>
              <Segment attached='bottom'>
                <Card fluid header='Real'/>
                <Card fluid header='Test'/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column width={6}>
              <Segment attached='top' content='Disaster:' compact/>
              <Segment attached='bottom'></Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment attached='top' content='Options:' compact/>
              <Segment attached='bottom'>
                <Card fluid header='Tsunami'/>
                <Card fluid header='Flash lood'/>
                <Card fluid header='Fire'/>
                <Card fluid header='Asteroid'/>
                <Card fluid header='Missile'/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
