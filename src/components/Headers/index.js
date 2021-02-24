import React from 'react'
import {
    HeaderContainer,
    HeaderTextWrapper,
    HeaderText
} from './HeaderElements'

const Header = ({header, id}) => {
    return (
        <>
            <HeaderContainer id={id}>
                <HeaderTextWrapper>
                    <HeaderText>
                        {header}
                    </HeaderText>
                </HeaderTextWrapper>
            </HeaderContainer>
        </>
    )
}

export default Header
