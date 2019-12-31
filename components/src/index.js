import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
const App = () => {
  //faker.setLocale("en_US");
  faker.locale = "en_US";
  const start = new Date(2012, 0, 1);
  const ender = new Date();
  let rows = [];
  for (let i = 0; i < 6; i++)
  {
    rows.push(
      <ApprovalCard>
        <CommentDetail blogger={faker.name.firstName()}
                             time={randomDate(start, ender).toUTCString()}
                             entry={faker.lorem.sentence()}
                             img={faker.image.avatar()}/>
      </ApprovalCard>
     );
  }
  return (

    <div className="ui container comments">
      {rows}

    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
