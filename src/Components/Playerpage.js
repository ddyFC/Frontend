import React from 'react';
import styled from 'styled-components';
import './CSS/Player.css';

const PageUl = styled.ul`
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
  width: 50%;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 50px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

const Playerpage = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav>
            <PageUl className="pagination">
                {pageNumbers.map((number) => (
                    <PageLi key={number} className="page-item">
                    <PageSpan onClick={() => paginate(number)} className="page-link">
                        {number}
                    </PageSpan>
                    </PageLi>
                ))}
            </PageUl>
            </nav>
        </div>
    );
    
};
export default Playerpage;