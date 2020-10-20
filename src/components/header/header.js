/* eslint-disable no-unused-vars */
import React, { useEffect, useState }  from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav , Form , Button } from 'react-bootstrap';
import { If, Then, Else } from '../if/if';

import './header.scss';

const Header = (props) => {

  return (
      <Nav className="navHeader">

          <Link to="/">Home</Link>
          
        <Nav.Item>
          {/* <Form >
            <Form.Label>
              <Form.Control
              id="name"
                name="text"
                placeholder="username"
              />
            </Form.Label>

            <Form.Label>
              <Form.Control
              id="pass"
                name="password"
                placeholder="password"
                type="password"
              />
            </Form.Label>
            <If >
              <Then>
                <Button  variant="primary">sign up</Button>{' '}
              </Then>
              <Else>
                <Button variant="primary">log in</Button>{' '}
              </Else>
            </If>
            </Form> */}
          </Nav.Item>
          <div>
          {props.SignForm}
        </div>
        </Nav>
  );
};


export default Header;
