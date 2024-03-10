import React, { Component } from 'react'

export class Catigories extends Component {
    constructor(props){
        super(props)
        this.state = {
            catigories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'bed',
                    name: 'Кровати'
                },
                {
                    key: 'chair',
                    name: 'Стулья'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                },
                {
                    key: 'cabinet',
                    name: 'Тумбы'
                },
                {
                    key: 'chandelier',
                    name: 'Люстры'
                },
                {
                    key: 'closet',
                    name: 'Шкафы'
                },
                {
                    key: 'table',
                    name: 'Столы'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.catigories.map( el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Catigories