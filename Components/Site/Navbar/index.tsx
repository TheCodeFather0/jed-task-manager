"use client"
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { useLangs } from '@/Store'
import classNames from 'classnames'
import { ILesson } from '@/interface'
import React, { useEffect, useState } from 'react'

const DB_URL = 'http://localhost:3001/langs/'
const SiteNavbar = () => {
    const [data, setData] = useState([])
    const activeLang = useLangs((state: any) => state.activeLang)
    const updateActiveLang = useLangs((state: any) => state.updateActiveLang)

    useEffect(() => {
        axios.get(DB_URL).then(({ data }) => {
            setData(data)
        })
    }, [])

    return (
        <div className='bg-blue-900 py-3'>
            <div className="container h-10 flex items-center justify-between">
                <div>
                    <Link href='/'>
                        <Image src='./jedlogo.svg' alt='logo' width={150} height={150} />
                    </Link>
                </div>

                <div>
                    {
                        data.map(({ id, title }: ILesson) => {
                            return <div key={id} className={classNames({
                                'text-slate-50 inline-block ml-5 font-medium link uppercase cursor-pointer': true,
                                'active-link': title === activeLang
                            })}

                                onClick={() => updateActiveLang(title)}
                            >{title}</div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default SiteNavbar