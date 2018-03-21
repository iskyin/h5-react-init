import React from 'react'
import { render } from 'react-dom'
// 公共样式
import '@/style/common/index.less'

class Hello extends React.Component {
  render() {
    return (
      <div className='test'>
        <p>hello 1</p>
        <p>hello 2</p>
        <p>hello 3</p>
        <p>hello 4</p>
        <p>hello 5</p>
      </div>
    )
  }
}

render(
  <Hello/>,
  document.getElementById('root')
)
