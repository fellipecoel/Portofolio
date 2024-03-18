import Header from "../Header/Header"
import React from '../images/react.png'
import JavaScript from '../images/js.png'
import Css from '../images/css.png'
import Html from '../images/html.png'
import Sql from '../images/sql.png'
import Nodejs from '../images/node.png'
import Item from '../Item'

const Habilidades = ()=> {
    const linguagens = [
        {
            titulo: 'React',
            img: React
        },

        {
            titulo: 'JavaScript',
            img: JavaScript
        },

        {
            titulo: 'Css',
            img: Css
        },

        {
            titulo: 'Html',
            img: Html
        },

        {
            titulo: 'Sql',
            img: Sql
        },
        
        {
            titulo: 'Node js',
            img: Nodejs
        },
    ]
    return(
        <>
        <Header titulo="Habilidades"/>
            <div className="styleItens">
                {
                    linguagens.map((linguagens) => {
                        return(
                    <Item titulo={linguagens.titulo} img={linguagens.img}/>

                    )
                    
                    })
                }
            </div>
        </>
    )
}
export default Habilidades;