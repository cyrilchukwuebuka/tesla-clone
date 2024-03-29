import React from 'react';
import styled from 'styled-components';
import Section from '../../components/section/Section';

function Home() {
    return (
        <Container>
            <Section 
                title='Model S'
                description='Order online for Touchless Delivery'
                backgroundImg = 'model-s.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Model Y'
                description='Order online for Touchless Delivery'
                backgroundImg='model-y.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Model X'
                description='Order online for Touchless Delivery'
                backgroundImg='model-x.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Model 3'
                description='Order online for Touchless Delivery'
                backgroundImg='model-3.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                backgroundImg='solar-panel.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn More'
            />
            <Section 
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof'
                backgroundImg='solar-roof.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn More'
            />
            <Section 
                title='Accessories'
                description=''
                backgroundImg='accessories.jpg'
                leftBtnText='Shop now'
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`