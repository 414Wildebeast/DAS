import React, { Component } from 'react';
import { Container, Segment, Grid, Header, Card, Checkbox, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Grid centered>
          <Grid.Row />

          <Grid.Row><Grid.Column width={12}>
            <Segment textAlign='center'><Header>DAS</Header></Segment>
          </Grid.Column></Grid.Row>

          <Grid.Row stretched>
            <Grid.Column width={6}>
              <Segment attached='top' content='Alert Type:' compact />
                <Segment attached='bottom'>
                  <Card fluid header='Real' />
                </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment attached='top' content='Options:' compact />
              <Segment attached='bottom'>
                <Card fluid header='Test' />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row stretched>
            <Grid.Column width={6}>
              <Segment attached='top' content='Disaster:' compact />
              <Segment attached='bottom'>
                <Card fluid header='Tsunami' />
                <Card fluid header='Flash flood' />
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment attached='top' content='Options:' compact />
              <Segment attached='bottom'>
                <Card fluid header='Fire' />
                <Card fluid header='Asteroid' />
                <Card fluid header='Missile' />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row><Grid.Column width={12}>
            <Segment attached='top'>
              <Header textAlign='left'>Mediums to send out on:</Header>
            </Segment>
            <Segment attached='bottom'>
              <Grid columns={6}><Grid.Row>
                <Grid.Column><Checkbox label='All' /></Grid.Column>
                <Grid.Column><Checkbox label='Sirens' /></Grid.Column>
                <Grid.Column><Checkbox label='TV' /></Grid.Column>
                <Grid.Column><Checkbox label='Radio' /></Grid.Column>
                <Grid.Column><Checkbox label='Text' /></Grid.Column>
                <Grid.Column><Checkbox label='Push notification' /></Grid.Column>
              </Grid.Row></Grid>
            </Segment>
          </Grid.Column></Grid.Row>

          <Grid.Row><Grid.Column width={12}>
            <Segment attached='top'>
              <Header textAlign='left'>Affected areas:</Header>
            </Segment>
            <Segment attached='bottom'>
              <Grid columns={7}><Grid.Row>
                <Grid.Column><Checkbox label='All' /></Grid.Column>
                <Grid.Column><Checkbox label='Big Island' /></Grid.Column>
                <Grid.Column><Checkbox label='Maui' /></Grid.Column>
                <Grid.Column><Checkbox label='O`ahu' /></Grid.Column>
                <Grid.Column><Checkbox label='Kaua`i' /></Grid.Column>
                <Grid.Column><Checkbox label='Moloka`i' /></Grid.Column>
                <Grid.Column><Checkbox label='Lana`i' /></Grid.Column>
              </Grid.Row></Grid>
            </Segment>
          </Grid.Column></Grid.Row>

          <Grid.Row><Grid.Column width={12} textAlign='center'>
            <Button size='large' content='Submit' />
          </Grid.Column></Grid.Row>

        </Grid>
      </Container>
    );
  }
}

export default App;
