"use client"
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import Categories from '@/Components/Site/Categories';
import { useLangs } from '@/Store';
import { ILesson } from '@/interface';

const DB_URL = 'http://localhost:3001/langs/'
const Home = () => {
    const [data, setData] = useState([])
    const activeLang = useLangs((state: any) => state.activeLang)

    useEffect(() => {
        axios.get(DB_URL).then(({ data }) => setData(data))
    }, [])

    return (
        <div className="container">
            <div className='grid grid-cols-[1fr,2fr] gap-10 py-6'>
                <div className='relative h-custom overflow-auto'>
                    <Categories activeLang={activeLang} data={data} />
                </div>
                <div className='p-6 h-custom text-justify overflow-auto border-blue-900 bg-blue-100'>
                    <ol>
                            <li className='my-3'>task</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}


export default Home