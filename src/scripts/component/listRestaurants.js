import CONFIG from '../globals/config';

class ListRestorants extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = /* html */ ` 
          <style>
              :host {
                width: 350px;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.129);
                padding-bottom: 20px;
              }
              [tabindex="0"]:focus {
                outline: 2px solid rgb(253, 160, 0) !important;
                border: none;
              }
              .content-img {  
                position: relative;
                overflow: hidden;
                width: 100%;
                height: 200px;
              }
              .content-img::before {
                content: "";
                position: absolute;
                bottom: 0px;
                z-index: 5;
                left:0;
                border-right: 180px solid transparent;
                border-bottom: 40px solid white;
              }
              .content-img::after {
                content: "";
                position: absolute;
                bottom: 0px;
                right: 0;
                z-index: 5;
                border-left: 180px solid transparent;
                border-bottom: 40px solid white;
              }
              .content-img img {
                width: 100%;
                border-radius: 10px;
                object-fit: cover;
                border:2px solid white;
              }
              .content-info {
                text-align: center;
                margin-top: 10px;
                line-height: 18px;
                padding: 10px 15px;
              }
              .content-info > b a {
                font-size: 20px;
                text-decoration:none;
                color:rgb(94, 94, 94);
                cursor:pointer;
                transition:.3s all;
              }
              .content-info > b a:hover {
                color:rgb(253, 160, 0) ;
              }
              .content-review {
                display: flex;
                justify-content: center;
                gap: 7px;
                align-items: center;
                font-size: 14px;
                color: rgb(94, 94, 94);
              }
              .content-info > p {
                color: rgb(94, 94, 94);
                font-size: 13px;
                line-height: 24px;
                margin-top:5px;
                height: 100px;
                overflow: hidden;
              }
              .content-review > div svg{
                width:30px;
                height:20px;
                color:red;
              } 
          </style>
          
          <div class="content-img">
             <img src="${CONFIG.BASE_IMAGE_URL}${this._resto.pictureId}" alt="img-content" />
          </div>
          <div class="content-info">
              <b tabindex="0">
              <a href="/#/detail/${this._resto.id}">${this._resto.name}</b></a>
              <div class="content-review">
                <p tabindex="0">${this._resto.rating}</p>
                |
                <p tabindex="0">${this._resto.city}</p>
              </div>
              <p tabindex="0">
                ${this._resto.description}
              </p>
          </div>   
          `;
  }
}

customElements.define('list-restaurants', ListRestorants);
