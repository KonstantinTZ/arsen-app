# инфо для поддержки сайта mimoracir.am

<hr/>

## Как поменять картинки в разделе Галлерея ?

<ol>
    <li>
        Зайти на src/shared/components/Main/Examples/Examples.jsx
    </li>
    <li>
             `<Carousel imgPath={'carousel-1'} imgPath2={'carousel-2'} imgPath3={'carousel-3'}/>`
             Дописать новый imgPath**(Номер по порядку)**={'carousel-...'}, то чем Вы ранее называлие свои картинки
    </li>
    <li>
        Зайти на src/shared/components/Main/Examples/Carousel/Carousel.jsx
    </li>
    <li>
        Зайти на src/shared/components/Main/Examples/Carousel/Carousel.jsx
    </li>
    <li>
       Вставить в 
       Carousel({ imgPath, imgPath2, imgPath3, imgPath*(Номер по порядку)* })
    </li>
    <li>
        Вставить новый блок внутрь div.carousel-inner
        ```JSX
        <div className="carousel-item" data-bs-interval="2000">
          <picture>
            <source srcSet={imgPath ? require(`../../../../../img/${imgPath*(Номер по порядку)*}-300.jpg`) : require(`../../../../../img/big-plug.jpg`)} media="(max-width: 768px)" />
            <source srcSet={imgPath ? require(`../../../../../img/${imgPath*(Номер по порядку)*}-150.jpg`) : require(`../../../../../img/big-plug.jpg`)} media="(max-width: 486px)" />
            <img
              src={imgPath ? require(`../../../../../img/${imgPath*(Номер по порядку)*}.jpg`) : require(`../../../../../img/big-plug.jpg`)}
              className="d-block w-100"
              alt="examples" />
          </picture>
        </div>
      </div>
      ```
    </li>
</ol>
