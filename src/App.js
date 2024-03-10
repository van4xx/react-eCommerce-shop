import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Catigories from "./components/Catigories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {
          id:1,
          title: 'Большая мягкая кровать',
          img: 'bedid1.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'bed',
          price: '25600'
        },
        {
          id:2,
          title: 'Стильная тумба',
          img: 'cabinetid1.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'cabinet',
          price: '14700'
        },
        {
          id:3,
          title: 'Царь-стул',
          img: 'chairid1.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'chair',
          price: '135000'
        },
        {
          id:4,
          title: 'Люстра в гостинную',
          img: 'chandelierid1.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'chandelier',
          price: '160000'
        },
        {
          id:5,
          title: 'Шкаф',
          img: 'closetid1.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'closet',
          price: '17900'
        },
        {
          id:6,
          title: 'Диван',
          img: 'sofaid1.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'sofa',
          price: '189000'
        },
        {
          id:7,
          title: 'Раздвижной стол',
          img: 'tableid1.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'table',
          price: '45000'
        },
        {
          id:8,
          title: 'Кухонный стул',
          img: 'chairid2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'chair',
          price: '8990'
        },        {
          id:9,
          title: 'Двух-спальная кровать',
          img: 'bedid2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'bed',
          price: '128990'
        },        {
          id:10,
          title: 'Люстра на кухню',
          img: 'chandelierid2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'chandelier',
          price: '127999'
        },
        {
          id:11,
          title: 'Стол в кухню',
          img: 'tableid2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'table',
          price: '57899'
        },
        {
          id:12,
          title: 'Шкаф с зеркалом',
          img: 'closetid2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'closet',
          price: '98999'
        },
        {
          id:13,
          title: 'Тумба для TV',
          img: 'cabinetid2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'cabinet',
          price: '14689'
        },
        {
          id:14,
          title: 'Диван от тифани',
          img: 'sofaid2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero voluptatibus, aut, cum, dolore ipsa veniam repudiandae officia delectus ducimus a necessitatibus quia. Laboriosam, inventore impedit voluptatibus alias quos doloribus.',
          category: 'sofa',
          price: '87000'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Catigories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach( el => {
      if(el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
