import React from 'react';
import "./index.scss";
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';


export default function index() {
  return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tag-doc'>&lt;!DOCTYPE html&gt;</span>
            <span className='tags top-tag-html'>&lt;html&gt;</span>
            <br />
            <span className='tags top-tags'>&lt;body&gt;</span>
            <Outlet />
            <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </div>
    </div>
  )
}
