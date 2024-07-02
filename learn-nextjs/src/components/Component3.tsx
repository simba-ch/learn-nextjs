import { sleep } from '@/utils/time'
import React from 'react'
import { redirect } from 'next/navigation'
// 这是一个重定向组件
export default async function Component3() {

    await sleep(2000).then(() => {
        redirect("/login")
    })
    return (
        <div>Component3</div>
    )
}
