import {MenuItems} from './MenuItems'

import React from 'react';
import styled from 'styled-components';

import {Ul} from './styles'


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       {MenuItems.map((item, index) => {
                    return (
                        <li key={index}><a href={item.url}>
                            {item.title}
                            </a>
                            </li>
                    )
                })}
    </Ul>
  )
}

export default RightNav
