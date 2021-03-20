import styled from 'styled-components'

export const HobbiesContainer = styled.div`
    height: flex; // 1100px
    padding: 40px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #373737;
    // max-width: 100vw;

    @media screen and (max-width: 480px) {
        padding: 30px 0 40px 0;
    }

`

export const HobbiesWrapper = styled.div`
    // max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    grid-gap: 20px;
    // padding: 0 50px;
    justify-content: center;

    @media screen and (max-width: 1200px) {
        grid-template-columns: auto auto;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: auto; //auto auto; //
        padding: 0 20px;
        // grid-gap: 5px;
    }
`

export const Title = styled.p`
    color: #52A3FF; //black
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 0px;

    align-self: start;
    margin-left: 12%;
`

export const Title2 = styled.p`
    color: gold; //black
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 12px;
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
    margin-bottom: 10px;
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
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 5px;
    margin-top: 20px;

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
    // padding: 0 5px;

    cursor: pointer;

    &:hover {
        transform: scale(1.01);
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

    // @media screen and (max-width: 480px) {
    //     margin-left: -5px;
    //     margin-right: 20px;
    //     font-size: 15px;
    // }
`

export const HobbiesIcon = styled.img`
    height: 240px;
    width: 280px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
    border: 3px outset #52A3FF;

    @media screen and (max-width: 400px) {
        // height: 120px;
        // width: 150px;
    }
`

export const HobbiesH1 = styled.h1`
    font-size: 2.5rem;
    color: #f9f9f9;
    margin-bottom: 40px;
    // margin-top: 40px;

    @media screen and (max-width: 480px) {
        // font-size: 2rem;
    }
`

export const HobbiesH2 = styled.h2`
    font-size: 22px;
    text-align: center;
    color: gold;

    @media screen and (max-width: 480px) {
        // font-size: 18px;
        // line-height: 0.9;
        // margin-bottom: 5px;
    }
`

export const HobbiesP = styled.p`
    font-size: 18px;
    text-align: center;
    color: white;

    @media screen and (max-width: 480px) {
        // font-size: 15px;
        // line-height: 0.9;
        margin-bottom: 10px;
    }
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