import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div>
      <div className="logo">
        <img
        className='logo__img'
          src="data:image/png;base64,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"
          alt="logo"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          voluptates minima voluptatem, maxime esse officia ipsum veritatis
          reprehenderit quidem explicabo pariatur tenetur vel impedit tempora
          reprehenderit quidem explicabo pariatur tenetur vel impedit tempora
          reprehenderit quidem explicabo pariatur tenetur vel impedit tempora
          reprehenderit quidem explicabo pariatur tenetur vel impedit tempora
          reprehenderit quidem explicabo pariatur tenetur vel impedit tempora
          reprehenderit quidem explicabo pariatur tenetur vel impedit tempora
          reprehenderit quidem explicabo pariatur tenetur vel impedit tempora
          est animi cum cumque illo
        </p>
      </div>
    </div>
  );
}
