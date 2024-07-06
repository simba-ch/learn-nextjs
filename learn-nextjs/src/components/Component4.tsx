"use client"
// 这是一个客户端随机报错组件
export default function Component4() {
    const random = Math.random()
    console.log("🚀 ~ Component4 ~ random:", random)

    if (random < 0.5) {
        throw new Error("客户端报错")
    }



    return (
        <div>
            <div>Component4</div>
            <div>{random}</div>
        </div>
    )
}
