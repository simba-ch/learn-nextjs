import Component2 from "@/components/Component2";
import Component3 from "@/components/Component3";
import Component1 from "@components/Component1";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <h1>learn nextjs</h1>
      <div>
        下面是一个异步组件
        <Suspense fallback={<div>loading</div>}>
          <Component1 />
        </Suspense>
        下面是一个报错的异步组件
       <Suspense fallback={<div>loading2</div>}>
          <Component2 />
        </Suspense> 

        {/* 下面是一个重定向组件
        <Suspense fallback={<div>loading3</div>}>
          <Component3 />
        </Suspense> */}
      </div>
    </div>
  );
}
