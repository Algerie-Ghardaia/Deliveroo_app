import React, { useState } from "react";
import "../App.css";
//--------REACT LIBRARY---------//
import { AiFillStar } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
//-----------------------------//

export default function Main({ data }) {
  const [article, setArticle] = useState({});
  const [cart, setCart] = useState([]);

  const handlAddSelectArticle = (meal) => {
    const article = { ...meal };
    setArticle(article);
    const newCart = [...cart];
    const found = newCart.find((elem) => elem.id === meal.id);
    if (found) {
      found.quantity++;
    } else {
      newCart.push({ ...article, quantity: 1 });
    }
    setCart(newCart);
  };

  const handlDeleteSelectArticle = (t) => {
    const newCart = [...cart];

    const found = newCart.find((elem) => elem.id === t.id);

    if (found.quantity === 1) {
      const index = newCart.indexOf(found);
      newCart.splice(index, 1);
    } else {
      found.quantity--;
    }

    setCart(newCart);
  };

  let total = 0;
  let livrasion = Number(3,66)
  console.log(livrasion);
  for (let i = 0; i < cart.length; i++) {
    const meal = cart[i];
    total = total + meal.price * meal.quantity;
  }

  const listCommande = cart.map((t) => {
    console.log(t.id);
    return (
      <>
        <div key={t.id} className="click_client">
          <div className="icon_2_number">
            <CiCirclePlus
              color="#07a497"
              size={25}
              onClick={() => {
                handlAddSelectArticle(t);
              }}
            />
            <div className="number">{t.quantity}</div>
            <CiCircleMinus
              color="#07a497"
              size={25}
              onClick={() => {
                handlDeleteSelectArticle(t);
              }}
            />
          </div>

          <div className="title_selection">{t.title}</div>
          <div className="price_selection">{(t.price)*(t.quantity)}€</div>
        </div>
      </>
    );
  });
  return (
    <>
      <main>
        <div className="container menu">
          <section className="col-left">
            {data.categories.map((category) => {
              if (category.meals.length !== 0) {
                return (
                  <div key={category.name}>
                    <h2>{category.name}</h2>
                    <div className="articles-menu">
                      {category.meals.map((meal) => {
                        return (
                          <article
                            key={meal.id}
                            className="glob"
                            onClick={() => {
                              handlAddSelectArticle(meal);
                            }}
                          >
                            <div>
                              <h3>{meal.title}</h3>
                              <p className="description">{meal.description}</p>
                              <span className="price">{meal.price} €</span>
                              {meal.popular && (
                                <span>
                                  <AiFillStar
                                    style={{
                                      color: "#ff8001",
                                      margin: "0 10px",
                                      paddingTop: "2px",
                                    }}
                                  />
                                  Populaire
                                </span>
                              )}
                            </div>
                            <div>
                              {meal.picture && (
                                <img src={meal.picture} alt={meal.title} />
                              )}
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </section>
          <section className="col-right">
            <div className="panier">
              {/* PANIR VIDE */}
              <div className={article.title ? "btn_p display" : "btn_p"}>
                <button className="button">Valide mon panier</button>
                <div className="vide">Votre panier et vide</div>
              </div>
              {/*-------------*/}
              {/* PANIER AVEC COMMANDE */}
              <div className={!article.title ? "display" : "btn_p"}>
                <div>
                  <button
                    className={article.title ? "button isButton" : "button"}
                  >
                    Valide mon panier
                  </button>
                </div>
                <div>{listCommande}</div>
                <hr className="ligne" />
                <div className="calc">
                  <div className="Sous-total">
                    <h6>Sous-total</h6>
                    <h6>{total}€</h6>
                  </div>
                  <div className="Sous-total">
                    <h6>Frais de livraison</h6>
                    <h6>{livrasion}</h6>
                  </div>
                </div>
                <hr className="ligne" />
                <div className="Sous-total">
                  <div className="total">Total</div>
                  <div className="prix_total">{Number(total+livrasion).toFixed(2)}</div>
                </div>
              </div>
              {/*----------------------*/}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
