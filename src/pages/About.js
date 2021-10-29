import React, { Component } from 'react';
import instaIcon from '../images/insta.png'

class About extends Component {
    render() {
        return (
            <div className="text-center w-75 mx-auto my-5">
                <h4>Данный сайт разработан для тех, кто ведет свой блог в Instagram и активно пользуется хэштегами</h4>
                <h4 className="my-5">
                    Если вы понимаете, зачем это нужно, и что значит та единственная кнопка "Генерировать", то можете смело
                    связаться со мной, и я добавлю вам подобный профиль. Пока что сайт находится в разработке и пользователям
                    недоступно самостоятельно добавлять или удалять хэштеги.
                </h4>
                <p><a href="https://www.instagram.com/zababurin.ph/"><img src={instaIcon} alt="" width="70"/></a></p>
            </div>
        );
    }
}

export default About;