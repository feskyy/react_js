import React from 'react';
import UserCard from './UserCard';
import Button from './Button';
import './App.css';

function App() {
  const users = [
    { name: 'Sasha', email: 'sasha@gmail.com'},
    { name: 'Mat', email: 'matressa@gmail.com'}, 
    { name: 'Anastasia', email: 'annast@icloud.com'},
    { name: 'Ketty', email: 'missketty@mail.com'}
  ]

  return (
    <div className='App'>
      <h1>Лист пользователей</h1>

      <div className='users-list'>
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
          />
        ))}
      </div>

      <div  className='buttons'>
        <Button text="Добавить"/>
        <Button text="Удалить"/>
        <Button text="Сохранить"/>
      </div>
    </div>
  );
}

export default App;



