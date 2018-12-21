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
    Row,
    Col,
    Button
} from 'framework7-react';

export default () => (
  <Page>
    <Navbar>
      <NavTitle>Login</NavTitle>
    </Navbar>

    <BlockTitle>Fill Buttons</BlockTitle>
    <Block>

      <Row tag="p">
        <Col tag="span" width="10">
        </Col>
        <Col tag="span" width="80">
          <Button fill href="/developer-details/"> Developer page </Button>
        </Col>
        <Col tag="span" width="10">
        </Col>
      </Row>

      <Row tag="p">
        <Col tag="span" width="10">
        </Col>
        <Col tag="span" width="80">
          <Button fill href="/expert-search/"> Manager page </Button>
        </Col>
        <Col tag="span" width="10">
        </Col>
      </Row>
    </Block>


  </Page>
);
