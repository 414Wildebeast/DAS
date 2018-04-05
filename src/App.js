import React, { Component } from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';

import FirstRow from './components/FirstRow';
import SecondRow from './components/SecondRow';
import ThirdRow from './components/ThirdRow';
import FourthRow from './components/FourthRow';

class App extends Component {
  render() {
    return (
      <Container>
        <Grid centered>
          <Grid.Row />
          <FirstRow />
          <SecondRow/>
          <ThirdRow/>
          <FourthRow/>

          <Grid.Row><Grid.Column width={12} textAlign='center'>
            <Button size='large' content='Submit' />
          </Grid.Column></Grid.Row>

        </Grid>
      </Container>
    );
  }
}

export default App;
