import styled from 'styled-components'

export const HobbiesContainer = styled.div`
    height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #757575;

    @media screen and (max-width: 1200px) {
        height: 1800px;
    }

    @media screen and (max-width: 760px) {
        height: 3200px;
    }
`

export const HobbiesWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const Title = styled.p`
    color: black;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 36px;
    margin-top: 0px;
    text-align: right;
    align-self: flex-start;
    margin-left: 12%;
`

export const TopLine = styled.p`
    color: #DEC11B;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 25px;
`

export const HobbiesCard = styled.div`
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        // cursor: pointer;
    }
`


export const HobbiesIcon = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;

    /*
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);

    &:hover {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
        transition: 0.3s all ease-in-out;
    }
    */
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
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
`

export const HobbiesP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
    
    
`