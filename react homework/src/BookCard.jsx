import React from 'react';
import './BookCard.css';

const BookCard = () => {

    const book1 = {
        image:
          "https://thestoryexchange.org/app/uploads/2023/06/IMG_7627-525x793.jpeg",
        name: "The Whispers by Ashley Audrain",
        description: "The Whispers begins with a young boy falling from his window in the middle of the night. His family watches him from his hospital room, where he lies in a coma. While his mother waits by his side, refusing to speak to anyone, the family’s friends and neighbors wait back home, each confronting their own role in the events that led up to the tragedy. Over the course of one week, the mothers in each of these four families are forced to face their own secrets and the uncomfortable truths that connect them to one another – all while anxiously awaiting the fate of the young boy. This novel faces uncomfortable truths of its own: intuitions we ignore, the sacrifices of motherhood and what happens when we put our needs ahead of our children’s.",
      };
      const book2 = {
        image:
          "https://thestoryexchange.org/app/uploads/2023/06/IMG_7628-525x793.jpeg",
        name: "All the Gold Stars by Rainesford Stauffer ",
        description: "The newest book from journalist and author Rainesford Stauffer focuses on the psychology around ambition. From getting gold stars on our homework in grade school, to attending the “right” college, to putting in extra hours at work, Stauffer evaluates how the cultural, personal and societal pressures around ambition have led to a nationwide burnout epidemic. She combines her personal narrative with interviews with students, parents, workers, psychologists and labor organizers to show the common pressures everyone is facing and the consequences that follow. By asking hard questions, she encourages readers to evaluate our own relationships with ambition so that we can reach our goals in a healthier way. ",
      };
      const book3 = {
        image:
          "https://thestoryexchange.org/app/uploads/2023/06/IMG_7629-525x792.jpeg",
        name: "Banyan Moon by Thao Thai ",
        description: "When Ann Tran gets a call that her beloved grandmother Minh has passed away, she returns home to Florida to face her estranged mother, Huong. There, the two women learn that Minh has left them both Banyan House, the crumbling Gothic manor where Ann grew up. Under the same roof for the first time in years, the mother and daughter attempt to rebuild their relationship without Minh, the one person who’s always held them together. Running parallel to this is Minh’s story – we watch her grow up in the shadow of the Vietnam war and eventually immigrate to America. Years later, when Ann makes a discovery in Banyan House’s attic, all of Minh’s long-buried secrets come to light. Spanning decades and continents, Banyan Moon tells a story of the things we inherit from our mothers, whether we like it or not. ",
      };
      const book4 = {
        image:
          "https://thestoryexchange.org/app/uploads/2023/06/IMG_7630-525x798.jpeg",
        name: "The Sunset Crowd by Karin Tanabe",
        description: "In this novel, Evra Scott, the daughter of an Oscar-winning director and a Brazilian bombshell actress, is L.A.’s reigning style queen. Currently, she’s romantically linked to famous screenwriter Kai de la Faire. Meanwhile, Theodora Leigh is fighting to become a movie producer in a town where sex and sexism sell. Luckily, getting ahead by any means necessary is L.A.’s mantra. And then there’s Bea Dupont, a photographer for Rolling Stone and Vogue who attends every party. She’s also in love with her oldest friend, Kai de la Faire – yes, Evra’s Kai de la Faire. From Rodeo Drive to the French Riviera, this story follows each woman in her pursuit of glory and stardom in a highly competitive setting where some people achieve the American dream and some don’t. And they all learn one truth: it’s about faking it till you make it."  
    };
      
  return (
    <div >
    <div className="wrapper" >
         <div className="img">
            <img src={book1.image} alt=""/>
         </div>
         <div className='book-info'>
         <h1>{book1.name}</h1>
         <p>{book1.description}</p>
         </div>
       </div>
       
       <div className="wrapper-inversed" >
         <div className="img">
            <img src={book2.image} alt=""/>
         </div>
         <div className='book-info'>
         <h1>{book2.name}</h1>
         <p>{book2.description}</p>
         </div>
       </div>

       <div className="wrapper" >
         <div className="img">
            <img src={book3.image} alt=""/>
         </div>
         <div className='book-info'>
         <h1>{book3.name}</h1>
         <p>{book3.description}</p>
         </div>
       </div>

       <div className="wrapper-inversed" >
         <div className="img">
            <img src={book4.image} alt=""/>
         </div>
         <div className='book-info'>
         <h1>{book4.name}</h1>
         <p>{book4.description}</p>
         </div>
       </div>
  </div>
  )
}

export default BookCard