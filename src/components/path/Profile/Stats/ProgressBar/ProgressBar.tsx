import React from 'react';
import { testJS, textTasks } from '../../../../../TaskData/TaskData';
import './ProgressBar.scss'


interface ProgressBarProps{
  progressBarLvl: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progressBarLvl = 8 }) => {
  const level8: number[] = [];
  const level7: number[] = [];
  const level6: number[] = [];

  const levels: { [key: number]: number[] } = {
    8: level8,
    7: level7,
    6: level6,
  };

  // Получаем строку данных из localStorage
  const savedUserDataString = localStorage.getItem('userData')
  const savedUserData = savedUserDataString !== null ? JSON.parse(savedUserDataString) : null

  // Общий массив
  const generalArray = [...testJS, ...textTasks]

  // Получаем общее кол-во тасков с lvl
  const level = generalArray.filter(obj => obj.level === progressBarLvl).length;

  savedUserData.idCompletedTasks.forEach((num: number) => {
    const firstDigit = parseInt(num.toString()[0]);
    if (firstDigit === 8) {
      level8.push(num);
    }
    if (firstDigit === 7) {
      level7.push(num);
    }
    if (firstDigit === 6) {
      level6.push(num);
    }
  });

  // Получаем % выполненых таксков

  function procentageFunc(lvl: number[]): number{
    return Math.floor((lvl.length / level) * 100)
  }

  const proc = procentageFunc(levels[progressBarLvl] || []);  

  return(
    <div className='progress-bar'>
      <h3>Progress {progressBarLvl} lvl</h3>
      <div className='progress-bar__wrapper'>
        <div className='progress-bar__inner' style={{ width: `${proc === 0 ? 10 : proc}%` }}><p>{proc}%</p></div>
      </div>
    </div>
  )
}

export default ProgressBar

// Что можно добавить в проект:

//1. Редактор профиля
//2. Логику по использованию подсказок и ответов в тасках(если ты используешь подсказку то -2 очка из общих очков задачи)
//3. Изменять тему приложения (тёмный - светлый)
//4. Изменять тему редактора кода(чтобы пользователь мог выбрать цвет редактора такой, какой ему хочеться)
//5. Добавить таймер на решение задачи, и в статистику выводить общее время в решении всех задач и среднее время
//6. Отслеживать количество правильных и неправильных ответов на тасках
//7. Добавить сохранение написанного кода в редакторе кода (LocalStorage) +
//8. Добавить паузу на таймер
//9. Возможно, поискать полезную API для приложения
//10. Добавить вкладку *Выполненые задачи*
//11. Добавить *Достижения*
//12. Добавить фильтр (Array, String, Number, Boolean)
//13. Сделать таймер *Пуск-Стоп*(можно устанавливать время, сколько ты хочешь провести времени по типу как google-таймер)
//14. -
//15. -