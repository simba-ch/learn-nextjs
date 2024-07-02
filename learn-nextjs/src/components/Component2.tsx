import { sleep } from '@/utils/time'

// 这是一个异步随机报错组件，当随机数大于0.5时报错
export default async function Component2() {
    let random;
    await sleep(2000).then(() => {
        random = Math.random()
        console.log("🚀 ~ awaitsleep ~ random:", random)
        if (random < 0.5) {
            return 1
        } else {
            throw new Error('2')
        }
    })


    return <div>{random}</div>
}
