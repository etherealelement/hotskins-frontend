import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css";
import {widgetHeaderUi} from '~/widgets/header';
import { MantineProvider } from '@mantine/core';


const {Header} = widgetHeaderUi;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header></Header>
  </React.StrictMode>,
)
