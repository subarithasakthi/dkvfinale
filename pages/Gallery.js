import React from 'react'
import { Container, Grid , Image, Segment } from 'semantic-ui-react'


export default function Gallery() {
  return (

  <Container>
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h3>
            Event Name: 
            </h3>
            <h3>
            Event Details:
            </h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          <Image
    src='/logo192.png'
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
  />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
          <Image
    src='/logo192.png'
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
  />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
          <Image
    src='/logo192.png'
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
  />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container> )

}
