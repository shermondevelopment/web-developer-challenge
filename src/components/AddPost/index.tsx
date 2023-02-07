import React from 'react'

/* styles */
import * as S from './style'

/* icons */
import { RxImage } from 'react-icons/rx'

/* components */
import PostContainer from '../PostContainer'
import Input from '../Input'
import InputTextArea from '../InputTextArea'
import Button from '../Button'

const AddPost = (): React.ReactElement => {
  return (
    <PostContainer>
      <S.PostAreaAddFigure>
        <S.PostAreaSelectFigure>
          <RxImage size={24} />
        </S.PostAreaSelectFigure>
        <S.PostAreaInputs>
          <S.PostAreaInput>
            <Input placeholder="Digite seu nome" />
          </S.PostAreaInput>
          <S.PostAreaInput>
            <InputTextArea placeholder="Mensagem" />
          </S.PostAreaInput>
        </S.PostAreaInputs>
        <S.PostAreaButton>
          <Button label="Descartar" isLink />
          <Button label="Publicar" isEnable={false} />
        </S.PostAreaButton>
      </S.PostAreaAddFigure>
    </PostContainer>
  )
}

export default AddPost
