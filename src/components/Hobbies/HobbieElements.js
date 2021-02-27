import styled from 'styled-components'

export const HobbiesContainer = styled.div`
    height: flex; // 1100px
    padding: 100px 0 100px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #373737;
    // max-width: 100vw;
`

export const HobbiesWrapper = styled.div`
    // max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    grid-gap: 16px;
    // padding: 0 50px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: auto auto;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: auto;
        padding: 0 20px;
    }
`

export const Title = styled.p`
    color: #52A3FF; //black
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 22px;
    margin-top: 0px;

    align-self: start;
    margin-left: 12%;
`

export const HobbiesSubtitleContainer = styled.div`
    display: flex;
    align-self: start;
    margin-left: 12%;
`

export const Subtitle = styled.p`
    color: #d9d9d9;
    font-size: 15px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 25px;
    margin-top: 0px;
`

export const HobbiesPointerTitle = styled.div`
    font-size: 15px;
    line-height: 16px;
    color: gold;
    margin-right: 10px;
    align-self: start;
`

export const TopLine = styled.p`
    color: #DEC11B; // #52A3FF; //#DEC11B;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 5px;
    margin-top: 25px;

    @media screen and (max-width: 400px) {
        max-width: 200px;
        text-align: center;
    }
`

export const HobbiesCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
`

export const HobbiesCardHover = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 10px;
    transition: all 0.2s ease-in-out;

    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
`

export const HobbiesHoverImageContainer = styled.div`
    display: flex;
    align-items: left;
    cursor: pointer;
`

export const HobbiesPointer = styled.div`
    color: gold;
    margin-left: -30px;
    margin-right: 20px;
`

export const HobbiesIcon = styled.img`
    height: 240px;
    width: 280px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
    border: 3px outset #52A3FF;
`

export const HobbiesH1 = styled.h1`
    font-size: 2.5rem;
    color: #f9f9f9;
    margin-bottom: 40px;
    // margin-top: 40px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const HobbiesH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
    text-align: center;
    color: gold;
`

export const HobbiesP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
    color: white;
`

export const LineContainer = styled.div`
    margin-bottom: 16px;
`

export const Line = styled.hr`
    margin-left: -25vw;
    margin-right: -50vw;
    border: 1px solid gold;
    max-width: 74.5vw;
`