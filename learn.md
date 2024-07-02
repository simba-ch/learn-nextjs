# 问题：
1. nextjs是否只是一个前端的替代品，而非真正的全栈（目前没有nestjs的后端解决方案好）
2. 客户端上传静态文件以后如何访问（用户浏览器访问，代码读取文件流）
3. 数据的持久化
4. 数据的储存与重新请求

# 探究

## routing ===> error handling
错误处理中的从错误中恢复像服务器发送了一个请求但是组件并没有重新执行
why?



## 路由与导航
```html
<Layout>
    <Template>
        <ErrorBoundary fallback="{<Error/>}">
            <Suspense fallback={<Loading />}>
            <Page>
                <Link href="/other">导航到其他路由</Link>
            </Page>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
```



### loadingUI和streaming
可以有效的提高组件的渲染效率，将依赖数据的组件以stream的形式传到客户端


## metadata object 和SEO
*注意*：您无法从同一路段同时导出元数据对象和generateMetadata 函数。
要定义静态元数据，请从layout.js 或page.js 文件导出Metadata 对象