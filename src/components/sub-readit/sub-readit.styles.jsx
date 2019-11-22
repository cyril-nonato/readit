import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 30px;
  height: 30px;
  margin-right: 2rem;
`;

export const Name = styled.span`
  font-size: 1.4rem;
  font-weight: bolder;
`