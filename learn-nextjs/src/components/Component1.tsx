import React from 'react'

// 这是一个异步组件
export default async function Component1() {
    const data: number = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, 5000);
    })
    return (
        <div>
            这是一个异步组件,数据是 {data}
        </div>
    )
}
