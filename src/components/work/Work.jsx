import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import rest from '../../rest.svg';
import rec from '../../rec.svg';
import todo from '../../todo.svg';
import hawk from '../../hawk.svg';
import phone from '../../phone.svg';
import tetris from '../../tetris.svg';
import './work.css';


const StyledCard = styled(Card)`
  background-color: #11232f;
  color: #fff;
  text-align: center;
`;

const StyledCardTitle = styled(Card.Title)`
  color: #ff7545;
  font-family: 'Times New Roman', Times, serif;
`;

function Home(){
    const cardContent = [
        {
          title: 'Restaurant Recommendation System',
          text: ' Implemented a personalized restaurant recommendation system leveraging machine learning algorithms to analyze user preferences and delivery efficient. ',
          image: rec
          
        },
        {
          title: 'Trail Hawk',
          text: 'A decentralized dAPP made using WEB3 Protocols to help women ensure safety by updating their location in times of need and unsafe situations to trusted people.',
          image: hawk,
        },
        {
          title: 'Cuisine Classification',
          text: 'A cuisine classification system employing machine learning techniques to accurately identify and categorize diverse cuisines based on characteristics. ',
          image: rest,
        },
        {
          title: 'Decentralized To-do List',
          text: 'A decentralized to-do list application using blockchain technology, empowering users with a secure and transparent task management system. ',
          image: todo,
        },
        
        {
          title: 'Used Phone Price Prediction',
          text: 'Exploratory data analysis (EDA) on the dataset and a predictive model for used phone prices utilizing machine learning algorithms.',
          image: phone,
        },
        {
          title: 'Tetris Game',
          text: 'A dynamic Tetris game with engaging gameplay and responsive design, with classic block-matching challenges and real-time scoring. ',
          image: tetris,
        },
       
      ];
    
  
    return(
        <div className='work' id='mywork'>
            < div className='first '>
                
                <div className='intro'>
                    <h5 style={{fontFamily:'serif', fontWeight:'600'}}>My recent work</h5>
                    <h6 style={{fontFamily:'serif', fontSize:'20px', color:'black'}}>These are some of the recent projects I have worked on. </h6>
                    
                </div>
                
                <div className="project">
                <Row xs={1} md={3} className="g-4">
                  {cardContent.map((content, idx) => (
                    <Col key={idx}>
                      <StyledCard>
                        <Card.Img src={content.image} style={{width:'100%'}}/>
                        <Card.Body>
                          <StyledCardTitle>{content.title}</StyledCardTitle>
                          <Card.Text>{content.text}</Card.Text>
                        </Card.Body>
                      </StyledCard>
                    </Col>
                  ))}
                </Row>
                <h5 style={{fontFamily:'serif', fontWeight:'600', paddingTop:'2rem'}}><a href='https://github.com/tanuushree' >Check out some more!</a></h5>
                </div>
            </div>
        </div>
    );

}

export default Home;