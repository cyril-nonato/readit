import React, {useState} from 'react';

import * as S from './select-sub-readit.styles'
import SelectSubReaditItem from '../select-sub-readit-item/select-sub-readit-item.component';

const SelectSubreadit = ({ lists,  handleIconAndId, postData }) => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <S.Container>
      <S.Select onClick={handleToggle}>
        <S.Input>
          <S.Icon icon={postData.icon} />
          <S.Name>{postData.subReadit}</S.Name>
        </S.Input>
        <S.ArrowDownIcon />
      </S.Select>
      <S.Lists>
        {
          toggle &&
          lists.map(item => 
            <SelectSubReaditItem handleToggle={handleToggle}
            handleIconAndId={handleIconAndId} item={item} key={item.id} />
          )
        }
      </S.Lists>
    </S.Container>

  );
}

export default SelectSubreadit;