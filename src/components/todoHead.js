import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
padding-top:48px;
padding-left:32px;
padding-right:32px;
padding-bottom: 24px;

h1{
    margin:0;
    font-size:2rem;
    color:#343a40;
}
.day{
    margin-top: 4px;
    color: #868e96;
    font-size:21px;
}
.task-left{
    color:#20c997;
    font-size:18px;
    margin-top:40px;
    font-weight:bold;
}
`;

function todoHead(){

    return(
     <TodoHeadBlock>
     <div className="day">2020년 7월 14일</div>
     <div className="task-left"> 할 일 2개 남음</div>
     </TodoHeadBlock>

    );
}
export default todoHead;