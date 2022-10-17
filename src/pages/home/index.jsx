import React, { useEffect } from 'react'
import { Graph } from '@antv/x6'
import styles from './index.modules.less'

const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'rect', // 使用 rect 渲染
      x: 100,
      y: 200,
      width: 80,
      height: 40,
      label: 'hello',
    },
    {
      id: 'node2',
      shape: 'ellipse', // 使用 ellipse 渲染
      x: 300,
      y: 200,
      width: 80,
      height: 40,
      label: 'world',
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
  ],
};

function Home() {

  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('container'),
      width: '100%',
      height: '100%',
      background: {
        color: '#fffbe6', // 设置画布背景颜色
      },
      grid: {
        size: 10,      // 网格大小 10px
        visible: true, // 渲染网格背景
      },
    });
    graph.fromJSON(data)
  })

  return (
    <>
      <div id='container' />
    </>
  )
}

export default Home