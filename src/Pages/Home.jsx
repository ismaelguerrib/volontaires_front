import React, { Component } from "react";
import Header from "./../Component/Header";
import Button from "./../Component/Button";
import VolunteersActive from "../images/active-blue-charity-1353351.jpg";
export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="buttons-container">
          <img src={VolunteersActive} alt="Volunteers-active" />
          <div className="Home-request-infos">
            <h2>Which help can I find on Volunteers ?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              laudantium rerum tempora aspernatur, quasi ullam inventore,
              dolorum repellat, fugiat sunt unde nihil iste tenetur culpa sed
              minima! Perspiciatis, dolore magni! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus, facere quisquam minus
              reprehenderit aut voluptatum rerum sint explicabo expedita nemo
              corrupti minima maxime repellendus nesciunt magni voluptas
              perferendis iste beatae?
            </p>
            <Button
              className="btn-options btn-request"
              content="I wish to be helped"
              link="/option-request"
            />
          </div>
          <div className="Home-offer-infos">
            <h2>I want to be a Volunteer !</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              officiis dolorum dolore sapiente, obcaecati quae molestias placeat
              temporibus eaque unde, quod vero modi labore iste tempora aperiam
              voluptas harum accusamus. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Aut nesciunt ex quibusdam perferendis eos eaque
              debitis ab, rem quos nisi explicabo aspernatur corporis, neque
              dolorum. Recusandae temporibus id ipsam laboriosam?
            </p>
            <Button
              className="btn-options btn-offer"
              content="I would like to help others"
              link="/option-offer"
            />
          </div>
        </div>
      </>
    );
  }
}
