import styled from 'styled-components'

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #373737; // #757575

    padding: 30px 0;

    @media only screen and (max-width: 760px) {
        padding-top: 30px;
        padding-bottom: 40px;
    }
`

export const SkillsWrapper = styled.div`
    // max-width: 1200px;
    // margin: 0 auto;
    margin: 20px 0;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    justify-content: center;

    @media only screen and (max-width: 1200px) {
        grid-template-columns: auto auto;
    }

    @media only screen and (max-width: 760px) {
        grid-template-columns: auto auto;
        padding: 0 20px;
        margin-top: 35px;
        grid-gap: 10px;
    }
`

export const Title = styled.p`
    color: #52A3FF; // black;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    text-align: right;

    margin-bottom: 50px;

    @media only screen and (max-width: 1200px) {
        margin-bottom: 40px;
    }

    @media only screen and (max-width: 760px) {
        margin: 0 0;
    }
`

export const TopLine = styled.p`
    color: #52A3FF; // #52A3FF; //#DEC11B;
    font-size: 18px;
    line-height: 17px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 10px;// 90px; // margin: -50px 0 50px 0; // 
    padding: 0 40px 0 40px;
    align-self: center;
    text-align: center;

    @media only screen and (max-width: 480px) {
        font-size: 18px;
        padding: 0 5px;

    }
`

export const SkillsCard = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 305px;
    width: 280px;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    margin-top: 8px;

    @media only screen and (max-width: 760px) {
        margin-top: auto;
    }

    @media only screen and (max-width: 480px) {
        height: 230px;
        width: 170px;
        padding: 5px;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        // cursor: pointer;
    }
`

export const SkillsIcon = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;

    @media only screen and (max-width: 480px) {
        height: 100px;
        width: 100px;
    }
`

export const SkillsH1 = styled.h1`
    font-size: 3.5rem;
    color: #f9f9f9;
    margin-bottom: 40px;
    // margin-top: 40px;

    @media only screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const SkillsH2 = styled.h2`
    color: gold;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top: 10px;

    text-align: center;

    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const SkillsP = styled.p`
    color: #f9f9f9;

    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 10px;
    align-items: center;

    // padding-left: 15px;
    // padding-right: 15px;

    @media only screen and (max-width: 480px) {
        font-size: 15px;
        margin-bottom: 3px;
    }
`
export const SkillsPBold = styled.p`
    color: #f9f9f9;

    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 10px;
    align-items: center;

    font-weight: bold;

    padding-left: 15px;
    padding-right: 15px;
`