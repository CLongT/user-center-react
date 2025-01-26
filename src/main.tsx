// main.tsx 修改后
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom' // 新增
import router from './router/router.tsx' // 新增

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} /> {/* 替换原<App /> */}
    </StrictMode>,
)