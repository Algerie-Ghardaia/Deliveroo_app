import React, { useState } from "react";
//--------REACT LIBRARY---------//
import { AiFillStar } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
//-----------------------------//

export default function Main({ data, setData }) {
  const [article, setArticle] = useState({});
  const handlSelectArticle = (meal) => {
    console.log(meal.id);
    const article = { ...meal };
    setArticle(article);
    // console.log(meal.title+'\n'+ meal.price);
    // console.log(article.title);
  };
  console.log("Mon article " + article);
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
                              handlSelectArticle(meal);
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
                            {/* className={(meal.description ) ? "":"sans_p"} */}
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
              <div className="btn_p">
                <button
                  className={article.title ? "button isButton" : "button"}
                >
                  Valide mon panier
                </button>
                {/* {article.title ? "":"<p>Votre panier est vide</p>"} */}
                <div className="click_client"> 
                  <div className="icon_2_number">
                    <CiCirclePlus color="#07a497" size={25} />
                    <div className="number">1</div>
                    <CiCircleMinus color="#07a497" size={25} />
                  </div>
                  <div className="title_selection">{article.title}</div>
                  <div className="price_selection">{article.price} €</div>
                </div>
              </div>
              <hr className="ligne" />
              <div className="calc">
                <div className="Sous-total">
                  <h6>Sous-total</h6>
                  <h6>{article.price} €</h6>
                </div>
                <div className="Sous-total">
                  <h6>Frais de livraison</h6>
                  <h6>3,30 €</h6>
                </div>
              </div>
              <hr className="ligne" />
              <div className="Sous-total">
                <div className="total">Total</div>
                <div className="prix_total">28,30 €</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
