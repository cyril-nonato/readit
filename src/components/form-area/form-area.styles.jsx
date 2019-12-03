import styled, {css} from 'styled-components'

const labelTop = css`
  top: .25rem;
  font-size: .9rem;
`;

const afterLabelNone = css `
  display: none;
`;



const labelPos = props => {
  if(props.value) {
    return labelTop;
  }
  return null;
};

const afterLabelDisplay = props => {
  if(props.value) {
    return afterLabelNone;
  }

  return null;
}

export const Container = styled.div`
  margin: 1.5rem 0;
  position: relative;
  font-size: 1.4rem;
`;


export const Label = styled.label`
  position: absolute;
  top: 1.25rem;
  left: 1rem;
  font-size: 1.1rem;
  color: ${props => props.theme.input.label};
  transition: all .2s ease-in;
  text-transform: uppercase;
  font-weight: bold;
  z-index: 5;

  &::after {
    content: '';
    top: inherit;
    display: inline-block;
    margin-left: .75rem;
    position: relative;
    top: .25rem;
    height: .5rem;
    width: .5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.input.after};
  }
`;

export const Input = styled.textarea`
  border: .5px solid ${props => props.theme.input.border};
  padding: 1.5rem 1rem .75rem 1rem;
  display: inline-block;
  width: inherit;
  font-size: 1.4rem;
  font-family: inherit;
  border-radius: 5px;
  width: 100%;
  color: ${props => props.theme.text};
  background-color: transparent;
  
  ~ ${Label} {
    ${labelPos}

    ::after {
      ${afterLabelDisplay}
    }
  }

  &:hover ~ ${Label},
  &:focus ~ ${Label} {
    top: .25rem;
    font-size: .9rem;

    ::after {
      display: none;
    }
  };
`;
