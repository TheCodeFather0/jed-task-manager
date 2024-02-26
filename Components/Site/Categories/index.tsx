import { ILesson } from '@/interface'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

interface ILangData {
  title: string;
  lessons: string[]; // Assuming lessons is an array of strings
}

interface IProps {
  data: ILangData[],
  activeLang: string,
}

const Categories = ({ activeLang, data }: IProps) => {
  const [currentLesson, setCurrentLesson] = useState<any[]>([]);

  useEffect(() => {
    const lang = data.find(({ title }) => title === activeLang);
    setCurrentLesson(lang ? lang.lessons : []);
  }, [data, activeLang]);

  return (
    <>
      {currentLesson.map(({id,title}) => (
        <div
          key={id} 
          className={classNames({
            'bg-blue-900 cursor-pointer rounded-md text-slate-50 p-2 my-3': true,
          })}
        >
          {title}
        </div>
      ))}
    </>
  );
};

export default Categories;
